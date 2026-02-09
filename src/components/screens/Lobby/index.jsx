import { AnimatedBg } from './AnimatedBg';
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { StartScreen } from "./StartScreen";
import { Rules } from './Rules';
import styled from 'styled-components';
import logo from '../../../assets/images/logo.png';
import { Button } from '../../../shared/components/Button';
import { HeartsBlockMobile } from './mobile/HeartsBlock';
import { media } from '../../../styles/mixins';
import { useProgress } from '../../../contexts/ProgressContext';
import { HeartsBlockLandscape } from './landscape/HeartsBlockLandscape';
import { GlassBlock } from '../../../shared/components/GlassBlock';
import { companiesLength } from '../../../shared/configs/companies-config';
import { GameEnd } from './GameEnd';
import { SCREEN_NAMES } from '../../../constants/screens';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing_x3);
    z-index: 5;

    & * {
        z-index: 5;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing_x2);
`;

const SoundButton = styled.div`
    position: absolute;
    bottom: var(--spacing_x3);
    right: var(--spacing_x3);
    z-index: 5;
`;

const Logo = styled.img`
    object-fit: contain;
    width: ${({ $ratio }) => $ratio * 84}px;
    height: ${({ $ratio }) => $ratio * 60}px;

    ${media.tablet`
        width: 140px;
        height: 102px;
    `}

    ${media.desktopWide`
        width: 200px;
        height: 145px;
    `}
`;

const HeartsStyled = styled(HeartsBlockMobile)`
    position: absolute;
    z-index: 4;
    inset: 0;
`;

const HeartsLandscapeStyled = styled(HeartsBlockLandscape)`
    position: absolute;
    z-index: 4;
    top: 0;
    left: 50%;
    transform: translateX(-50%); 
`;

const GameInfoWrapper = styled.div`
    position: absolute;
    bottom: ${({ $ratio }) => $ratio * 80}px;
    font-size: ${({ $ratio }) => $ratio * 12}px;
    left: 50%;
    transform: translateX(-50%);

    ${media.tablet`
        font-size: 16px;
    `}

    ${media.desktop`
        font-size: 18px;
        bottom: ${({ $ratio }) => $ratio * 60}px;
    `}
`;

const GameInfo = styled.div`
    padding: var(--spacing_x4);
    
    ${media.tablet`
        padding: 20px 16px;
    `}

    ${media.desktop`
        padding: 28px 26px;
    `}
`;

export const Lobby = () => {
    const ratio = useSizeRatio();
    const { isLandscape, openedCompanies, isPlayed, setIsPlayed, next, handleToggleAudio, isMusicPlaying, isRegistered, closeEndBlock } = useProgress();
    const [isGameStarted, setIsGameStarted] = useState(isPlayed);
    const [isShownStartScreen, setIsShownStartScreen] = useState(!isPlayed);
    const [isShownRules, setIsShownRules] = useState(false);
    const isFinished = openedCompanies.length === companiesLength;
    const [isEndPart, setIsEndPart] = useState(isFinished && !isRegistered);

    const handleCloseStartScreen = () => {
        setIsPlayed(true);
        setIsShownStartScreen(false);
        setIsGameStarted(true);
    }

    const handleCloseRules = () => {
        setIsShownRules(false);
    };

    const handleClickHeart = (id, metrika) => {
        reachMetrikaGoal('start_' + metrika);
        next(id);
    }

    const handleCloseEnd = () => {
        closeEndBlock();
        setIsEndPart(false);
    }

    return (
        <AnimatedBg isGameStarted={isGameStarted} isFinished={isFinished}>
            <Header>
                <Logo $ratio={ratio} src={logo} />
                <ButtonWrapper>
                    <Button isIcon onClick={() => setIsShownRules(true)} svgProps={{ svgWidth: 13, svgHeight: 21 }}>
                        <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 6.16146C13 9.2983 10.5148 11.8949 7.3125 12.2745V13.2031C7.3125 13.4366 7.2269 13.6605 7.07452 13.8255C6.92215 13.9906 6.71549 14.0833 6.5 14.0833C6.28451 14.0833 6.07785 13.9906 5.92548 13.8255C5.7731 13.6605 5.6875 13.4366 5.6875 13.2031V11.4427C5.6875 11.2093 5.7731 10.9854 5.92548 10.8203C6.07785 10.6552 6.28451 10.5625 6.5 10.5625C9.18836 10.5625 11.375 8.58863 11.375 6.16146C11.375 3.73428 9.18836 1.76042 6.5 1.76042C3.81164 1.76042 1.625 3.73428 1.625 6.16146C1.625 6.3949 1.5394 6.61879 1.38702 6.78386C1.23465 6.94893 1.02799 7.04167 0.8125 7.04167C0.597012 7.04167 0.390349 6.94893 0.237976 6.78386C0.0856026 6.61879 0 6.3949 0 6.16146C0 2.76385 2.91586 0 6.5 0C10.0841 0 13 2.76385 13 6.16146ZM6.5 16.724C6.17861 16.724 5.86443 16.8272 5.5972 17.0206C5.32997 17.2141 5.12169 17.489 4.9987 17.8107C4.8757 18.1324 4.84352 18.4863 4.90622 18.8278C4.96892 19.1693 5.12369 19.483 5.35095 19.7292C5.57821 19.9754 5.86776 20.143 6.18298 20.211C6.4982 20.2789 6.82493 20.244 7.12186 20.1108C7.41879 19.9775 7.67258 19.7519 7.85114 19.4624C8.0297 19.1729 8.125 18.8326 8.125 18.4844C8.125 18.0175 7.95379 17.5697 7.64905 17.2396C7.3443 16.9094 6.93098 16.724 6.5 16.724Z" fill="#FFF6EF" />
                        </svg>
                    </Button>
                </ButtonWrapper>
            </Header>
            <SoundButton>
                <Button onClick={handleToggleAudio} isIcon svgProps={{ svgWidth: isMusicPlaying ? 18 : 19, svgHeight: 23 }}>
                    <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {isMusicPlaying ? (
                            <>
                                <path d="M4.83316 16.0017V7.19508C4.83316 5.43865 5.94079 3.87312 7.59709 3.28854L14.7303 0.770925C15.6288 0.453827 16.5708 1.12034 16.5708 2.0731V15.3113" stroke="#FFF6EF" strokeWidth="1.3809" />
                                <path d="M0.701633 17.0183C1.15434 14.3165 4.38181 15.1957 4.84181 17.3828C5.82761 14.2624 9.58688 13.6594 8.98199 17.0183C8.65897 18.8119 6.68189 20.6633 4.84181 22.1213C1.57696 20.5248 0.57002 18.7664 0.701633 17.0183Z" stroke="#FFF6EF" strokeWidth="1.3809" strokeLinejoin="round" />
                                <path d="M15.1896 4.4563L6.21402 7.44849V4.76196L15.1896 1.76978V4.4563Z" fill="#FFF6EF" stroke="#FFF6EF" strokeWidth="1.3809" />
                                <path d="M13.1188 12.7173C15.8805 12.0269 17.2614 13.5724 17.2614 15.479C17.2613 16.8598 15.8804 18.2407 13.1188 18.9312C12.4523 19.0978 11.8419 19.1613 11.3064 19.1273C11.0758 19.1127 10.9955 18.8215 11.1339 18.6365C11.5066 18.1379 11.7379 17.4514 11.7379 16.6919C11.7379 15.6875 11.3348 14.8099 10.7331 14.3271C10.5795 14.2038 10.5496 13.962 10.7071 13.8437C11.3828 13.3367 12.2125 12.9439 13.1188 12.7173Z" fill="#FFF6EF" />
                            </>
                        ) : (
                            <>
                                <path d="M5.52344 11.5582V16.0026H4.14258V10.6227L5.52344 11.5582ZM14.5 0.119751C15.8476 -0.355881 17.2607 0.644781 17.2607 2.07385V14.6764L15.8799 13.7408V2.07385C15.8798 1.59754 15.4091 1.26395 14.96 1.42249L7.82715 3.94006C6.59011 4.37671 5.72188 5.47071 5.55469 6.7467L4.31934 5.90979C4.73306 4.41223 5.85217 3.1731 7.36719 2.63831L14.5 0.119751Z" fill="#FFF6EF" />
                                <path d="M0.701633 17.0186C1.15434 14.3169 4.38181 15.1961 4.84181 17.3831C5.82761 14.2628 9.58688 13.6597 8.98199 17.0186C8.65897 18.8123 6.68189 20.6637 4.84181 22.1217C1.57696 20.5252 0.57002 18.7667 0.701633 17.0186Z" stroke="#FFF6EF" strokeWidth="1.3809" strokeLinejoin="round" />
                                <path d="M15.8799 4.95483L7.18652 7.85229L5.52344 6.72534V4.2644L15.8799 0.812256V4.95483Z" fill="#FFF6EF" />
                                <path d="M15.2357 18.1371C14.6548 18.4511 13.9504 18.7242 13.1195 18.932C12.4533 19.0986 11.8424 19.1621 11.307 19.1283C11.0764 19.1137 10.9958 18.8221 11.1342 18.6371C11.5068 18.1386 11.7386 17.4521 11.7386 16.6927C11.7386 16.3297 11.684 15.9836 11.5883 15.6664L15.2357 18.1371Z" fill="#FFF6EF" />
                                <path d="M2.19043 6.81091L17.6904 17.3109" stroke="#FFF6EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </>
                        )}
                    </svg>
                </Button>
            </SoundButton>
            {isLandscape ? <HeartsLandscapeStyled opened={openedCompanies} onClick={handleClickHeart} /> : <HeartsStyled onClick={handleClickHeart} opened={openedCompanies} />}
            <GameInfoWrapper $ratio={ratio}>
                <GlassBlock
                    $percentage={10}
                    $angle={110}
                >
                    <GameInfo>
                        <p>
                            Сердец собрано {openedCompanies.length}/{companiesLength}
                        </p>
                    </GameInfo>
                </GlassBlock>
            </GameInfoWrapper>
            {isEndPart && <GameEnd onClick={handleCloseEnd} />}
            <AnimatePresence>
                {isShownStartScreen && (<StartScreen onClose={handleCloseStartScreen} />)}
                {isShownRules && (<Rules onClose={handleCloseRules} />)}
            </AnimatePresence>
        </AnimatedBg>
    )
}