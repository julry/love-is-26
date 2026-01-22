import { useEffect, useMemo, useRef, useState } from "react";

import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { TABLET_WIDTH } from "../../../constants";
import { useProgress } from "../../../contexts/ProgressContext";

export const useGame = ({ company, width, height, dpr, isFirst, stopGame }) => {
    const ratio = useSizeRatio();
    const { pieces: initialPuzzles, heartSize, heartPic: fieldPic } = company;
    const { isLandscape, openedCompanies } = useProgress();
    const gameContainerRef = useRef(null);
    const [endModal, setEndModal] = useState({shown: false, isWin: false});
    const [currentScore, setCurrentScore] = useState(0);
    const gameRef = useRef(null);
    const canvasWidth = useMemo(() => {
        let newWidth = width;

        if (width < TABLET_WIDTH && width > 375) {
            newWidth = 375;
        }

        if (width > 1270) {
            newWidth = 1270;
        } 

        return newWidth
    }, [width]);

    // Функция для предзагрузки изображений
    const preloadImages = () => {
        const puzzlesImages = initialPuzzles.reduce((res, puzzle) => {
            res[puzzle.id] = puzzle.image;

            return res;
        }, {});

        // const images = {'field': fieldPic };
        const images = {...puzzlesImages, 'field': fieldPic };

        const promises = Object.entries(images).map(([name, dataUrl]) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve({ name, img });
                img.src = dataUrl;
            });
        });

        return Promise.all(promises);
    };

    useEffect(() => {
        if (!height || !width || !dpr) return;
        const isWide = width > TABLET_WIDTH;
        const koef = Math.min(isWide ? height / 920 : height / 600, 1);
        const sizeKoef = (isWide ? 2.101 : 1);
        const heartHeight = heartSize.height * sizeKoef * koef;
        const heartWidth = heartSize.width * sizeKoef * koef;
        const y = isFirst && !isWide ? (height - heartHeight) / 2 - (50 * koef) : (height - heartHeight) / 2;
        const headerDistance = (window.innerHeight - height) / 2;
        const heartPositionY = y - headerDistance;

        // Инициализация игры после монтирования компонента
        const initGame = async () => {
            if (!gameContainerRef.current || gameRef.current) return;

            try {
                // Предзагрузка изображений
                const loadedImages = await preloadImages();

                const game = {
                    images: {},
                    puzzles: {},
                    unlockedPuzzles: [],
                    lockedPuzzles: [],
                    width: canvasWidth,
                    height: height,
                    selectedPiece: null,
                    dpr,
                    dragOffsetX: 0,
                    dragOffsetY: 0,
                    isRunning: true,
                    init() {
                        // Сохраняем загруженные изображения
                        loadedImages.forEach(({ name, img }) => {
                            this.images[name] = img;
                        });

                        // Создаем холст для игры
                        const canvas = document.createElement('canvas');

                        canvas.width = canvasWidth * dpr;
                        canvas.height = height * dpr;
                        canvas.style.margin = '0 auto';
                        canvas.style.display = 'block';
                        canvas.style.width = canvasWidth + 'px';
                        canvas.style.height = height + 'px';

                        gameContainerRef.current.innerHTML = '';
                        gameContainerRef.current.appendChild(canvas);

                        const ctx = canvas.getContext('2d');
                        
                        ctx.scale(dpr, dpr);

                        this.ctx = ctx;
                        this.canvas = canvas;

                        // Создаем элементы игры
                        this.createGameElements();

                        // Запускаем игровой цикл
                        this.gameLoop();
                    },
                    createGameElements() {
                        let positionName = isFirst ? 'positionBottom' : 'position';

                        if (isLandscape) {
                            positionName = 'positionLandscape';
                        }
                        
                        initialPuzzles.forEach((puzzle) => {
                            const puzzleWidth = puzzle.width * koef * sizeKoef;
                            const puzzleHeight = puzzle.height * koef * sizeKoef;
                            let xKoef = isLandscape ? Math.min(width / 1270, 1) : Math.max(width / 375, 1);
                            let dif = isWide ? Math.max((height+  headerDistance) - 750, 0) / 2 : Math.max((height + headerDistance) - 650, 0) / 2;

                            if (isLandscape) {
                                dif = 0;
                            }

                            const updatedPuzzle = { 
                                ...puzzle, 
                                width: puzzleWidth, 
                                height: puzzleHeight,
                                position: { x: xKoef * puzzle[positionName].x, y: puzzle[positionName].y * koef + dif },
                                startPosition: { x: xKoef * puzzle[positionName].x, y: puzzle[positionName].y * koef + dif},
                                originalPosition: { x: puzzle.originalPosition.x * koef * sizeKoef, y: puzzle.originalPosition.y * koef * sizeKoef},
                                isLocked: false,
                                verticesRel: puzzle.verticesRel.map(({x,y}) => ({x: x*koef * sizeKoef, y: y*koef * sizeKoef}))
                            };
                            this.unlockedPuzzles.push(updatedPuzzle);
                            this.puzzles[puzzle.id] = updatedPuzzle;
                        });

                        // Настраиваем обработчики событий
                        const canvas = this.canvas;
                        canvas.addEventListener('mousedown', this.handleMouseDown.bind(this));
                        canvas.addEventListener('mouseup', this.handleMouseUp.bind(this));
                        canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
                        canvas.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: false });
                        canvas.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
                        canvas.addEventListener('touchend', this.handleTouchEnd.bind(this));
                    },
                    checkPosition() {
                        if (!this.isDragging || !this.selectedPiece) return;

                        this.isDragging = false;
                        
                        const piece = this.puzzles[this.selectedPiece.id];
                        const originalX = (piece.originalPosition.x + (canvasWidth - heartWidth) / 2);
                        const originalY = piece.originalPosition.y + heartPositionY;
                        const dx = piece.position.x - originalX;
                        const dy = piece.position.y - originalY;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        const maxDistance = isWide ? 50 : 20;
                            
                        if (distance < maxDistance) {
                            this.puzzles[this.selectedPiece.id] = {...piece, position: {...piece.originalPosition, x: originalX, y: originalY}, isLocked: true, timestamp: Date.now()};
                            this.lockedPuzzles.push({...piece, position: {...piece.originalPosition, x: originalX, y: originalY}, isLocked: true});
                            this.unlockedPuzzles = this.unlockedPuzzles.filter(puzz => puzz.id !== piece.id);

                            if (this.unlockedPuzzles.length < 1) {
                                
                                stopGame();
                            }
                        } else {
                            piece.position.x = piece.startPosition.x;
                            piece.position.y = piece.startPosition.y;
                        }

                        this.selectedPiece = null;
                    },
                    isPointInPolygon(point, polygon) {
                        let inside = false;
                        for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
                            const xi = polygon[i].x, yi = polygon[i].y;
                            const xj = polygon[j].x, yj = polygon[j].y;

                            const intersect = ((yi > point.y) !== (yj > point.y)) &&
                                (point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi);


                            if (intersect) {
                                 inside = true;
                                 break;
                            }
                        }
                        return inside;
                    },
                    checkClickOnShape(clickX, clickY, shape) {
                        // shape имеет: startX, startY, verticesRel (относительные координаты вершин), width, height
                        // Проверка ограничивающего прямоугольника
                        if (clickX < shape.position.x || clickX > shape.position.x + shape.width ||
                            clickY < shape.position.y || clickY > shape.position.y + shape.height) {
                            return false;
                        }
                        
                        // if (shape.id === 'puzzle0') return true;
                        
                        // Преобразование вершин в абсолютные координаты
                        const absVertices = shape.verticesRel.map(vertex => ({
                            x: shape.position.x + vertex.x,
                            y: shape.position.y + vertex.y
                        }));
                        
                        // Проверка попадания в многоугольник
                        return this.isPointInPolygon({x: clickX, y: clickY}, absVertices);
                    },
                    getSelectedPiece(x, y) {
                        // const selected = [];
                        for (let i = 0; i < Object.values(this.puzzles).length; i++) {
                            const piece = Object.values(this.puzzles)[i];
                            if (this.checkClickOnShape(x, y, piece) && !piece?.isLocked) {
                                this.selectedPiece = piece;
                            }
                        }
                    },
                    handleMouseDown(e) {
                        const rect = this.canvas.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;

                        this.getSelectedPiece(x, y);

                        if (this.selectedPiece) {
                            this.isDragging = true;
                            this.dragOffsetX = x - this.selectedPiece.position.x;
                            this.dragOffsetY = y - this.selectedPiece.position.y;
                        };
                    },
                    handleMouseUp() {
                        this.checkPosition();
                        this.isDragging = false;
                    },
                    handleTouchStart(e) {
                        e.preventDefault();
                        this.isDragging = true;

                        if (e.touches.length === 1) {
                            const rect = this.canvas.getBoundingClientRect();
                    
                            const x = e.touches[0].clientX - rect.left;
                            const y = e.touches[0].clientY - rect.top;

                            this.getSelectedPiece(x, y);

                             if (this.selectedPiece) {
                                this.isDragging = true;
                                this.dragOffsetX = x - this.selectedPiece.position.x;
                                this.dragOffsetY = y - this.selectedPiece.position.y;
                            };
                        }
                    },
                    handleTouchEnd() {
                        this.checkPosition();
                        this.isDragging = false;
                    },
                    handleMouseMove(e) {
                        if (!this.selectedPiece || !this.isDragging) return;
                        const rect = this.canvas.getBoundingClientRect();
                    
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;

                        let puzzleX = x - this.dragOffsetX;
                        let puzzleY = y - this.dragOffsetY;

                        if (puzzleX > (canvasWidth - (this.selectedPiece.width / 2))) {
                            puzzleX = canvasWidth - (this.selectedPiece.width / 2);
                        }

                        if (puzzleY > (height - (this.selectedPiece.height / 2))) {
                            puzzleY = height - this.selectedPiece.height;
                        }
                        this.puzzles[this.selectedPiece.id].position.x = puzzleX < 0 ? 0 : puzzleX;
                        this.puzzles[this.selectedPiece.id].timestamp = Date.now();
                        this.puzzles[this.selectedPiece.id].position.y = puzzleY < 0 ? 0 : puzzleY;
                    },
                    handleTouchMove(e) {
                        if (!this.selectedPiece || !this.isDragging || !e.touches?.length) return;
                        const rect = this.canvas.getBoundingClientRect();
                    
                        const x = e.touches[0].clientX - rect.left;
                        const y = e.touches[0].clientY - rect.top;

                        let puzzleX = x - this.dragOffsetX;
                        let puzzleY = y - this.dragOffsetY;

                        if (puzzleX > (canvasWidth - (this.selectedPiece.width / 2))) {
                            puzzleX = canvasWidth - (this.selectedPiece.width / 2);
                        }

                        if (puzzleY > (height - (this.selectedPiece.height / 2))) {
                            puzzleY = height - this.selectedPiece.height;
                        }
                        this.puzzles[this.selectedPiece.id].position.x = puzzleX < 0 ? 0 : puzzleX;
                        this.puzzles[this.selectedPiece.id].timestamp = Date.now();
                        this.puzzles[this.selectedPiece.id].position.y = puzzleY < 0 ? 0 : puzzleY;
                    },
                    render() {
                        const ctx = this.ctx;
                        const canvas = this.canvas;

                        // Очищаем холст
                        ctx.clearRect(0, 0, canvas.width, canvas.height);

                        const backImg = this.images.field;
                        if (backImg) {
                            ctx.drawImage(backImg, (canvasWidth - heartWidth) / 2, heartPositionY, heartWidth, heartHeight);
                        }

                        // ctx.fillRect( (canvasWidth - heartWidth) / 2, heartPositionY, heartWidth, heartHeight)

                        const puzzles = Object.values(this.puzzles).sort((a, b) => (a?.timestamp ?? 0) - (b?.timestamp ?? 0));

                        for (let i = 0; i < this.lockedPuzzles.length; i++) {
                            const puzzle = this.lockedPuzzles[i];
                            const puzzImage = this.images[puzzle.id];
                            if (!puzzImage) return;

                            ctx.drawImage(puzzImage, puzzle.position.x, puzzle.position.y, puzzle.width, puzzle.height)
                        }

                        for (let i = 0; i < puzzles.length; i++) {
                            const puzzle = puzzles[i];
                            if (puzzle.isLocked) continue;
                            if (puzzle.id === this.selectedPiece?.id) continue;

                            const puzzImage = this.images[puzzle.id];

                            if (!puzzImage) continue;

                            // const originalX = (puzzle.originalPosition.x + (canvasWidth - heartWidth) / 2);
                            // const originalY = puzzle.originalPosition.y + heartPositionY;
                            // ctx.drawImage(puzzImage, originalX, originalY, puzzle.width, puzzle.height)
                            ctx.drawImage(puzzImage, puzzle.position.x, puzzle.position.y, puzzle.width, puzzle.height)
                        }

                        if (this.selectedPiece) {
                            const puzzle = this.selectedPiece;
                            const puzzImage = this.images[puzzle.id];

                            ctx.drawImage(puzzImage, puzzle.position.x, puzzle.position.y, puzzle.width, puzzle.height)
                        }
                    },
                    gameLoop() {
                        if (!this.isRunning) return;

                        this.render();

                        requestAnimationFrame(this.gameLoop.bind(this));
                    },
                    destroy() {
                        this.isRunning = false;
                        if (this.ctx && this.ctx.canvas) {
                            this.ctx.canvas.remove();
                        }
                    }
                };

                gameRef.current = game;

                game.init();
            } catch (error) {
                console.error('Error initializing game:', error);
            }
        };

        initGame();

        // Очистка при размонтировании компонента
        return () => {
            if (gameRef.current) {
                gameRef.current.destroy();
                gameRef.current = null;
            }
        };
    }, [ratio, width, height, dpr]);

    return { gameContainerRef, currentScore, setCurrentScore, endModal, stopGame, setEndModal };
}