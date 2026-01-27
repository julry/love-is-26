import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useGame } from "./useGame";
import logoCommon from '../../../assets/images/logo.png';
import { useProgress } from "../../../contexts/ProgressContext";
import { SCREEN_NAMES } from "../../../constants/screens";
import styled from "styled-components";
import { piecesConfig } from "../../configs/pieces-config";
import { Button } from '../Button';
import { TABLET_WIDTH } from '../../../constants';
import { AnimatePresence, motion } from 'framer-motion'
import { GlassBlock } from "../GlassBlock";
import { media } from '../../../styles/mixins';
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { companiesConfig } from "../../configs/companies-config";
import { ModalWrapper } from "../Modal";
import { RulesContent } from "./RulesContent";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 100%;
    height: 100%;
    background: url(${({ $bg }) => $bg});
    background-repeat: no-repeat;
    background-size: cover;
`;

const CanvasWrapper = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: auto;
    min-height: unset;
    padding: 0;
    width: 100%;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing_x2);
    justify-content: flex-end;
    width: 100%;
    padding: var(--spacing_x3);
    z-index: 5;
    flex-shrink: 0;
    padding-bottom: 0;

    & * {
        z-index: 5;
    }
`;

const EndImageWrapper = styled(motion.div)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex: 1;
    max-height: ${({ $height }) => $height ? $height + 'px' : 'unset'};
    z-index: 2;
    padding-bottom: ${({ $heartPositionY }) => $heartPositionY}px;
    margin-top: ${({ $finishMargin }) => $finishMargin.top ?? 0}px;
    margin-left: ${({ $finishMargin }) => $finishMargin.left ?? 0}px;

    ${media.tablet`
        max-height: unset;
    `}

    & img {
        object-fit: contain;
    }
`;

const EndModal = styled(motion.div)`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const EndTextWrapper = styled.div`
    padding: var(--spacing_x6) ${({$padding}) => $padding ?? 'calc(var(--spacing_x6) * 1.4)'};
    text-align: center;
    white-space: pre-line;
    background: rgba(59, 61, 90, 0.2);

    ${media.desktop`
        padding: 40px 30px;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media screen and (max-height: 900px) {
            padding: 30px 20px;
        }
    `}
`;

const EndText = styled.p`
    line-height: 110%;
    margin: var(--spacing_x4) 0;
    font-size: var(--font_md);

    ${media.desktop`
        margin: 20px 0;
        font-size: 23px;
        max-width: 650px;

        @media screen and (max-height: 900px) {
            font-size: 20px;
            max-width: 600px;
        }
    `}

    & a {
        border-bottom: 1px solid #FFF6EF;
        padding-bottom: 1px;
    }
`;

const EndContent = styled(motion.div)`
    position: absolute;
    left: 50%;
    width: 100%;
    bottom: ${({ $ratio }) => $ratio * 40}px;
    max-width: ${({ $ratio }) => $ratio * 335}px;
    transform-origin: 0 100%;

    ${media.tablet`
        max-width: ${({ $ratio }) => $ratio * 590}px;

        @media screen and (orientation: landscape) {
            max-width: ${({ $ratio }) => $ratio * 824}px;
        }
    `}

    ${media.desktop`
        max-width: ${({ $ratio }) => $ratio * 824}px;
        bottom: ${({ $ratio }) => $ratio * 60}px;

        @media screen and (max-height: 900px) {
            bottom: 40px;
        }
    `}
`;

const Title = styled.h3`
    font-size: calc(20 / 14 * var(--font_md));
    max-width: ${({$maxTitleWidth}) => $maxTitleWidth ? $maxTitleWidth + 'px' : 'unset'};
    margin: 0 auto;

    ${media.desktop`
        font-size: 40px;

        @media screen and (max-height: 900px) {
            font-size: 36px;
        }
    `}
`;

const ButtonStyled = styled(Button)`
    background-color: rgba(255, 255, 255, 0.24);
    padding: ${({ $ratio }) => $ratio * 19}px ${({ $ratio }) => $ratio * 34}px;

    ${media.desktop`
        padding: 20px 40px;
    `}
`;

const BottomLogo = styled(motion.div)`
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ $width }) => $width}px;
    height: ${({ $height }) => $height}px;

    @media screen and (max-height: 900px) {
        bottom: 30px;
    }

    @media screen and (max-height: 700px) {
        bottom: 15px;
    }
`;

const LogoWrapper = styled.div`
    position: absolute;
    top: ${({ $top }) => $top ?? 'var(--spacing_x3)'};
    left: var(--spacing_x3);
    width: ${({ $width }) => $width}px;
    height: ${({ $height }) => $height}px;

    & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const LandscapeInfo = styled.div`
    position: absolute;
    top: ${({ $ratio }) => $ratio * 75}px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;
    max-width: ${({ $ratio }) => $ratio * 291}px;
    font-size: ${({ $ratio }) => $ratio * 12}px;


    ${media.desktop`
        top: 60px;
        max-width: 562px;
        font-size: ${({ $ratio }) => $ratio * 23}px;
    `}
`;

const LandscapeInfoContent = styled.div`
    padding: ${({ $ratio }) => $ratio * 22}px;

    ${media.desktop`
        padding: ${({ $ratio }) => $ratio * 38}px ${({ $ratio }) => $ratio * 22}px;
    `}
`;

export const GameScreen = ({ companyId }) => {
    const ratio = useSizeRatio();
    const company = companiesConfig.find(({ id }) => id === companyId) ?? {};

    const { 
        heartSize, bgPic, bgPicLand, logo, finalHeart, 
        finishTitle, finishText, paddingText, maxTitleWidth, 
        additionalLove, finishMargin, link
    } = company;

    const { next, openedCompanies, setOpenedCompanies, isLandscape } = useProgress();
    const isAlreadyFinished = useMemo(() => openedCompanies.includes(companyId), []);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [dpr, setDpr] = useState(0);
    const [isEnd, setIsEnd] = useState(isAlreadyFinished);
    const [isRules, setIsRules] = useState(false);
    const [heartPositionY, setHeartPositionY] = useState(0);
    const [heartHeight, setHeartHeight] = useState(heartSize.height);
    const [heartWidth, setHeartWidth] = useState(heartSize.width);
    const [infoHeight, setInfoHeight] = useState(0);
    const [heartFinishMargin, setHeartFinishMargin] = useState(finishMargin ?? {});

    const $info = useRef();


    const isFirst = useMemo(() => !openedCompanies.length, []);

    const handleBack = () => {
        next(SCREEN_NAMES.LOBBY);
    };

    const handleClickRules = () => {
        if (isEnd) return;

        setIsRules(true);
    }

    useEffect(() => {
        const rect = gameContainerRef.current.getBoundingClientRect();
        const isWide = rect.width > TABLET_WIDTH;

        const koef = Math.min(isWide ? rect.height / 920 : rect.height / 600, 1);
        const sizeKoef = (isWide ? 2.101 : 1);
        const heartHeightS = heartSize.height * sizeKoef * koef;
        const headerHeight = window.innerHeight - rect.height;
        const y = isFirst && !isWide ? (rect.height - heartHeightS) / 2 - (50 * koef) : (rect.height - heartHeightS) / 2;
        const heartPositionY = y - headerHeight * koef / 2;
        setHeartHeight(heartHeightS);
        setHeartWidth(heartSize.width * sizeKoef * koef);

        const infoRect = $info.current.getBoundingClientRect();

        setInfoHeight(Math.max(15 * sizeKoef, (infoRect.height / 2 - y) * koef) + 15 * sizeKoef);
        setHeartPositionY(isWide || !isFirst ? 0 : (headerHeight / 2) * koef);
        setWidth(rect.width);
        setHeight(rect.height);
        setDpr(window?.devicePixelRatio || 1);
        setHeartFinishMargin({
            left: (finishMargin?.left ?? 0) * sizeKoef * koef,
            top: (finishMargin?.top ?? 0) * sizeKoef * koef,
        })
    }, []);


    const stopGame = useCallback(() => {
        const storageCompanies = openedCompanies?.includes?.(companyId) ? openedCompanies : [...openedCompanies, companyId];
        // localStorage.setItem('doneCompanies', JSON.stringify(storageCompanies));
        setOpenedCompanies(prev => prev?.includes?.(companyId) ? prev : [...prev, companyId]);
        setIsEnd(true);
    }, []);

    useEffect(() => {
        const preventDefault = (e) => e.preventDefault();

        document.body.addEventListener('touchmove', preventDefault, { passive: false });

        return () => document.body.removeEventListener('touchmove', preventDefault);
    }, [])

    const { gameContainerRef, } = useGame({ width, height, dpr, isFirst, company, initialPuzzles: piecesConfig.avito, stopGame });

    const isHelpBlock = useMemo(() => (isLandscape || isFirst), [isLandscape, isFirst]);

    return (
        <Wrapper $bg={isLandscape ? bgPicLand : bgPic}>
            {isLandscape ? (
                <LogoWrapper $width={141} $height={102} $top={'var(--spacing_x3)'}>
                    <img src={logoCommon} alt="" />
                </LogoWrapper>
            ) : (
                <LogoWrapper $width={logo.sizeSm.width * ratio} $height={logo.sizeSm.height * ratio} $top={logo.sizeSm.top * ratio + 'px'}>
                    {logo.image}
                </LogoWrapper>
            )}
            <Header>
                {!isHelpBlock && (
                    <Button isIcon onClick={handleClickRules} svgProps={{ svgWidth: 13, svgHeight: 21 }}>
                        <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 6.16146C13 9.2983 10.5148 11.8949 7.3125 12.2745V13.2031C7.3125 13.4366 7.2269 13.6605 7.07452 13.8255C6.92215 13.9906 6.71549 14.0833 6.5 14.0833C6.28451 14.0833 6.07785 13.9906 5.92548 13.8255C5.7731 13.6605 5.6875 13.4366 5.6875 13.2031V11.4427C5.6875 11.2093 5.7731 10.9854 5.92548 10.8203C6.07785 10.6552 6.28451 10.5625 6.5 10.5625C9.18836 10.5625 11.375 8.58863 11.375 6.16146C11.375 3.73428 9.18836 1.76042 6.5 1.76042C3.81164 1.76042 1.625 3.73428 1.625 6.16146C1.625 6.3949 1.5394 6.61879 1.38702 6.78386C1.23465 6.94893 1.02799 7.04167 0.8125 7.04167C0.597012 7.04167 0.390349 6.94893 0.237976 6.78386C0.0856026 6.61879 0 6.3949 0 6.16146C0 2.76385 2.91586 0 6.5 0C10.0841 0 13 2.76385 13 6.16146ZM6.5 16.724C6.17861 16.724 5.86443 16.8272 5.5972 17.0206C5.32997 17.2141 5.12169 17.489 4.9987 17.8107C4.8757 18.1324 4.84352 18.4863 4.90622 18.8278C4.96892 19.1693 5.12369 19.483 5.35095 19.7292C5.57821 19.9754 5.86776 20.143 6.18298 20.211C6.4982 20.2789 6.82493 20.244 7.12186 20.1108C7.41879 19.9775 7.67258 19.7519 7.85114 19.4624C8.0297 19.1729 8.125 18.8326 8.125 18.4844C8.125 18.0175 7.95379 17.5697 7.64905 17.2396C7.3443 16.9094 6.93098 16.724 6.5 16.724Z" fill="#FFF6EF" />
                        </svg>
                    </Button>
                )}
                <Button isIcon onClick={handleBack} svgProps={{ svgWidth: 14, svgHeight: 15 }}>
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.21934 0.237618C0.359965 0.0854635 0.550589 0 0.74934 0C0.948091 0 1.13871 0.0854635 1.27934 0.237618L13.2793 13.2376C13.353 13.312 13.4121 13.4017 13.4531 13.5014C13.4941 13.601 13.5162 13.7086 13.5179 13.8177C13.5197 13.9268 13.5012 14.0352 13.4635 14.1363C13.4257 14.2375 13.3696 14.3294 13.2984 14.4066C13.2272 14.4837 13.1423 14.5446 13.0489 14.5854C12.9555 14.6263 12.8555 14.6464 12.7548 14.6444C12.6541 14.6425 12.5548 14.6186 12.4628 14.5742C12.3708 14.5298 12.288 14.4658 12.2193 14.386L0.21934 1.38595C0.0788894 1.23361 0 1.0271 0 0.811785C0 0.596472 0.0788894 0.389962 0.21934 0.237618Z" fill="#FFF6EF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2793 0.237618C13.4198 0.389962 13.4987 0.596472 13.4987 0.811785C13.4987 1.0271 13.4198 1.23361 13.2793 1.38595L1.27934 14.386C1.13717 14.5295 0.949121 14.6076 0.75482 14.6039C0.560519 14.6002 0.375134 14.5149 0.237721 14.366C0.100308 14.2172 0.0215962 14.0163 0.018168 13.8059C0.0147398 13.5954 0.0868627 13.3916 0.219343 13.2376L12.2193 0.237618C12.36 0.0854635 12.5506 0 12.7493 0C12.9481 0 13.1387 0.0854635 13.2793 0.237618Z" fill="#FFF6EF" />
                    </svg>
                </Button>
            </Header>
            {isHelpBlock && !isEnd && (
                <LandscapeInfo $ratio={ratio}>
                    <GlassBlock
                        borderRadius={isLandscape ? 40 : 30}
                        $angle={105}
                    >
                        <LandscapeInfoContent $ratio={ratio}>
                            <p>
                                Перетаскивай фрагменты, чтобы соединить сердце воедино. Когда пазл будет собран,
                                ты узнаешь, что для компании значит любовь.
                            </p>
                        </LandscapeInfoContent>
                    </GlassBlock>
                </LandscapeInfo>
            )}
            <CanvasWrapper 
                ref={gameContainerRef} 
                animate={isEnd ? { opacity: 0 } : {}} 
                transition={{ duration: isAlreadyFinished ? 0 : 1, delay: isAlreadyFinished ? 0 : 0.5 }} 
            />
            <AnimatePresence>
                {isEnd && (
                    <EndModal 
                        key="end-modal"
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1, y: -infoHeight }}
                        transition={{
                            y: {
                                delay: isAlreadyFinished ? 0 : 1.4,
                                duration: 0.4
                            }, opacity: { duration: 0.6, delay: 0.2 }
                        }}
                    >
                        <EndImageWrapper 
                            $finishMargin={heartFinishMargin}
                            $height={isFirst ? height : undefined} 
                            $heartPositionY={heartPositionY}
                        >
                            <img src={finalHeart} width={heartWidth + 'px'} height={heartHeight + 'px'} />
                        </EndImageWrapper>
                    </EndModal>
                )}
                <EndContent
                    key="end-content"
                    ref={$info}
                    $ratio={ratio}
                    $heartHeight={heartSize.height}
                    initial={{ x: '-50%', y: '100vh', opacity: 0 }} animate={isEnd ? { y: 0, opacity: 1 } : {}}
                    transition={{
                        y: {
                            delay: isAlreadyFinished ? 0 : 1.4,
                            duration: 0.4,
                        },
                    }}>
                    <GlassBlock $angle={135} brightness={1.1} saturation={1.2}>
                        <EndTextWrapper $padding={paddingText}>
                            <Title $maxTitleWidth={maxTitleWidth}>Любовь{additionalLove ? ` ${additionalLove}`: ''} — это {finishTitle}</Title>
                            <EndText>
                                {finishText}<a href={link} target="_blank">тут</a>.
                            </EndText>
                            <ButtonStyled glassProps={{$angle: 105}} onClick={handleBack} $ratio={ratio}>забрать</ButtonStyled>
                        </EndTextWrapper>
                    </GlassBlock>
                </EndContent>
                {isLandscape && !isEnd && (
                    <BottomLogo exit={{ opacity: 0 }} $width={logo.sizeLg.width} $height={logo.sizeLg.height}>
                        {logo.image}
                    </BottomLogo>
                )}
                {
                    isRules && (
                        <ModalWrapper exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <RulesContent onClick={() => setIsRules(false)} />
                        </ModalWrapper>
                    )
                }
            </AnimatePresence>
        </Wrapper>
    )

}