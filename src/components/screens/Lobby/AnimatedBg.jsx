import frame1 from '../../../assets/images/bg/bgMobile1.png';
import frame2 from '../../../assets/images/bg/bgMobile2.png';
import frame3 from '../../../assets/images/bg/bgMobile3.png';
import frame4 from '../../../assets/images/bg/bgMobile4.png';
import frame5 from '../../../assets/images/bg/bgMobile5.png';
import frame6 from '../../../assets/images/bg/bgMobile6.png';
import frame7 from '../../../assets/images/bg/bgMobile7.png';
import frame8 from '../../../assets/images/bg/bgMobile8.png';
import frame9 from '../../../assets/images/bg/bgMobile9.png';
import frame10 from '../../../assets/images/bg/bgMobile10.png';
import frame11 from '../../../assets/images/bg/bgMobile11.png';
import frame12 from '../../../assets/images/bg/bgMobile12.png';
import frameDesktop1 from '../../../assets/images/bg/bgDesktop1.png';
import frameDesktop2 from '../../../assets/images/bg/bgDesktop2.png';
import frameDesktop3 from '../../../assets/images/bg/bgDesktop3.png';
import frameDesktop4 from '../../../assets/images/bg/bgDesktop4.png';
import frameDesktop5 from '../../../assets/images/bg/bgDesktop5.png';
import frameDesktop6 from '../../../assets/images/bg/bgDesktop6.png';
import frameDesktop7 from '../../../assets/images/bg/bgDesktop7.png';
import frameDesktop8 from '../../../assets/images/bg/bgDesktop8.png';
import frameDesktop9 from '../../../assets/images/bg/bgDesktop9.png';
import frameDesktop10 from '../../../assets/images/bg/bgDesktop10.png';
import frameDesktop11 from '../../../assets/images/bg/bgDesktop11.png';
import frameDesktop12 from '../../../assets/images/bg/bgDesktop12.png';
import treeDesktop1 from '../../../assets/images/bg/treeDesktop1.png';
import treeDesktop2 from '../../../assets/images/bg/treeDesktop2.png';
import treeDesktop3 from '../../../assets/images/bg/treeDesktop3.png';
import treeDesktop4 from '../../../assets/images/bg/treeDesktop4.png';
import treeDesktop5 from '../../../assets/images/bg/treeDesktop5.png';
import treeDesktop6 from '../../../assets/images/bg/treeDesktop6.png';
import treeDesktop7 from '../../../assets/images/bg/treeDesktop7.png';
import treeDesktop8 from '../../../assets/images/bg/treeDesktop8.png';
import treeDesktop9 from '../../../assets/images/bg/treeDesktop9.png';
import treeDesktop10 from '../../../assets/images/bg/treeDesktop10.png';
import treeDesktop11 from '../../../assets/images/bg/treeDesktop11.png';
import treeDesktop12 from '../../../assets/images/bg/treeDesktop12.png';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { preloadImage } from '../../../hooks/useImagePreloader';
import { OffLightsMobile } from './mobile/OffLights';
import { useProgress } from '../../../contexts/ProgressContext';
import { OffLightsLandscape } from './landscape/OffLightsLandscape';

const Wrapper = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: multiply;
    isolation: isolate;
`;

//TODO: мб вернуть
// const Backdrop = styled(Wrapper)`
//     position: absolute;
//     z-index: 0;
//     inset: 0;
//     background-image: url(${frame1});
//     background-size: cover;
//     transform: scale(1.1);
//     filter: blur(7px);
// `;


const Image = styled(Wrapper)`
    position: absolute;
    inset: 0;
    z-index: 1;
`;

const NextImage = styled(Image)`
    z-index: 2;
`;


const TreeImage = styled(Image)`
    z-index: 3;
    background-size: contain;
`;


const NextTreeImage = styled(TreeImage)`
    z-index: 4;
`;


const Content = styled.div`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 7;
`;

const OffLightsStyled = styled(OffLightsMobile)`
    position: absolute;
    inset: 0;
    z-index: 4;
    mix-blend-mode: saturation;
    background-blend-mode: saturation;

    & * {
        mix-blend-mode: saturation;
        background-blend-mode: saturation;
    }
`;

const LandscapeOffLightsStyled = styled(OffLightsLandscape)`
    position: absolute;
    inset: 0;
    z-index: 4;
    mix-blend-mode: saturation;
    background-blend-mode: saturation;

    & * {
        mix-blend-mode: saturation;
        background-blend-mode: saturation;
    }
`;

export const AnimatedBg = ({ isGameStarted, isFinished, ...props }) => {
    const { isLandscape } = useProgress();
    const [isLoaded, setIsLoaded] = useState(false);

    const initialImg = isLandscape ? frameDesktop1 : frame1;

    const images = isLandscape ? [
        frameDesktop1, frameDesktop2, frameDesktop3, frameDesktop4, frameDesktop5, frameDesktop6,
        frameDesktop7, frameDesktop8, frameDesktop9, frameDesktop10, frameDesktop11, frameDesktop12
    ] : [
        frame1, frame2, frame3, frame4, frame5, frame6,
        frame7, frame8, frame9, frame10, frame11, frame12
    ];

    const treeImages = isLandscape ? [
        treeDesktop1, treeDesktop2, treeDesktop3, treeDesktop4, treeDesktop5, treeDesktop6,
        treeDesktop7, treeDesktop8, treeDesktop9, treeDesktop10, treeDesktop11, treeDesktop12
    ] : [];

    const [state, setState] = useState({
        baseIndex: 0,
        overlayIndex: 1,
        showOverlay: false,
    });

    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        Promise.allSettled(
            [...images, ...treeImages].map((src) => preloadImage(src))
        ).finally(() => {
            setIsLoaded(true);
        });
    }, []);

    useEffect(() => {
        if (!(isLoaded && isGameStarted)) return;

        const transition = () => {
            setState(prev => ({ ...prev, showOverlay: true }));

            timeoutRef.current = setTimeout(() => {
                setState(prev => ({
                    baseIndex: prev.overlayIndex,
                    overlayIndex: (prev.overlayIndex + 1) % images.length,
                    showOverlay: false,
                }));
            }, 500);
        };

        intervalRef.current = setInterval(transition, 800);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [isLoaded, images.length, isGameStarted]);

    return (
        <Wrapper
            {...props}
            style={(isLoaded && isGameStarted) ? {} : { backgroundImage: `url(${initialImg})` }}
        >
            <Image
                style={{
                    backgroundImage: `url(${images[state.baseIndex]})`,
                }}
                key={`base-${state.baseIndex}`}
                initial={false}
                animate={{ opacity: 1 }}
            />
            <TreeImage
                style={{
                    backgroundImage: `url(${treeImages[state.baseIndex]})`,
                }}
                key={`base-tree-${state.baseIndex}`}
                initial={false}
                animate={{ opacity: 1 }}
            />
            <NextImage
                style={{
                    backgroundImage: `url(${images[state.overlayIndex]})`,
                }}
                key={`overlay-${state.overlayIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                }}
            />
            <NextTreeImage
                style={{
                    backgroundImage: `url(${treeImages[state.overlayIndex]})`,
                }}
                key={`overlay-tree-${state.overlayIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                }}
            />
            {!isFinished && (
                isLandscape ? <LandscapeOffLightsStyled /> : <OffLightsStyled />
            )}
            <Content>
                {props.children}
            </Content>
        </Wrapper>
    )
};
