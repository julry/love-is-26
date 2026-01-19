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
import { SCREEN_NAMES } from '../../../constants/screens';
import { GameEnd } from './GameEnd';
import { Form } from './Form';

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

    & * {
        z-index: 5 !important;
    }
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
    const { isLandscape, openedCompanies, isPlayed, setIsPlayed, next, handleToggleAudio, isMusicPlaying, isRegistered } = useProgress();
    const [isGameStarted, setIsGameStarted] = useState(isPlayed);
    const [isShownStartScreen, setIsShownStartScreen] = useState(!isPlayed);
    const [isShownRules, setIsShownRules] = useState(false);
    const [isFormScreen, setIsFormScreen] = useState(false);
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

    const handleClickHeart = (id) => {
        next(id);
    }

    const handleCloseForm = () => {
        setIsEndPart(false);
        setIsFormScreen(false);
    };

    return (
        <AnimatedBg isGameStarted={isGameStarted} isFinished={isFinished}>
            <Header>
                <Logo $ratio={ratio} src={logo} />
                <ButtonWrapper>
                    <Button isIcon svgProps={{ svgWidth: 22, svgHeight: 22 }}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.693 0C8.384 0 6.575 5.96046e-08 5.163 0.19C3.719 0.384 2.579 0.79 1.684 1.684C0.789 2.579 0.384 3.719 0.19 5.164C5.96046e-08 6.575 0 8.384 0 10.693V10.807C0 13.116 5.96046e-08 14.925 0.19 16.337C0.384 17.781 0.79 18.921 1.684 19.816C2.579 20.711 3.719 21.116 5.164 21.31C6.575 21.5 8.384 21.5 10.693 21.5H10.807C13.116 21.5 14.925 21.5 16.337 21.31C17.781 21.116 18.921 20.71 19.816 19.816C20.711 18.921 21.116 17.781 21.31 16.336C21.5 14.925 21.5 13.116 21.5 10.807V10.693C21.5 8.384 21.5 6.575 21.31 5.163C21.116 3.719 20.71 2.579 19.816 1.684C18.921 0.789 17.781 0.384 16.336 0.19C14.925 5.96046e-08 13.116 0 10.807 0H10.693ZM10 1.5C8.006 1.502 6.523 1.52 5.364 1.676C4.085 1.848 3.314 2.176 2.744 2.745C2.175 3.315 1.848 4.085 1.676 5.364C1.521 6.523 1.502 8.006 1.5 10H5.664C5.30526 9.5512 5.04741 9.03039 4.908 8.473C4.369 6.32 6.32 4.369 8.473 4.908C9.03039 5.04741 9.5512 5.30526 10 5.664V1.5ZM1.5 11.5C1.502 13.494 1.52 14.977 1.676 16.136C1.848 17.415 2.176 18.186 2.745 18.756C3.315 19.325 4.085 19.652 5.364 19.824C6.523 19.979 8.006 19.998 10 20V12.874C9.60542 13.6633 8.99879 14.327 8.24812 14.7909C7.49744 15.2547 6.63241 15.5002 5.75 15.5C5.55109 15.5 5.36032 15.421 5.21967 15.2803C5.07902 15.1397 5 14.9489 5 14.75C5 14.5511 5.07902 14.3603 5.21967 14.2197C5.36032 14.079 5.55109 14 5.75 14C6.48167 14.0002 7.19199 13.7534 7.766 13.2997C8.34002 12.846 8.74415 12.2119 8.913 11.5H1.5ZM11.5 20C13.494 19.998 14.977 19.98 16.136 19.824C17.415 19.652 18.186 19.324 18.756 18.755C19.325 18.185 19.652 17.415 19.824 16.136C19.979 14.977 19.998 13.494 20 11.5H12.587C12.7558 12.2119 13.16 12.846 13.734 13.2997C14.308 13.7534 15.0183 14.0002 15.75 14C15.9489 14 16.1397 14.079 16.2803 14.2197C16.421 14.3603 16.5 14.5511 16.5 14.75C16.5 14.9489 16.421 15.1397 16.2803 15.2803C16.1397 15.421 15.9489 15.5 15.75 15.5C14.8676 15.5002 14.0026 15.2547 13.2519 14.7909C12.5012 14.327 11.8946 13.6633 11.5 12.874V20ZM20 10H15.836C16.1951 9.55129 16.4533 9.03047 16.593 8.473C17.131 6.32 15.18 4.369 13.028 4.908C12.4703 5.04727 11.9491 5.30513 11.5 5.664V1.5C13.494 1.502 14.977 1.52 16.136 1.676C17.415 1.848 18.186 2.176 18.756 2.745C19.325 3.315 19.652 4.085 19.824 5.364C19.979 6.523 19.998 8.006 20 10ZM11.5 10V8.78C11.5017 8.22425 11.6886 7.68492 12.031 7.24721C12.3735 6.8095 12.852 6.49838 13.391 6.363C13.6322 6.30276 13.8849 6.306 14.1245 6.37239C14.364 6.43878 14.5824 6.56607 14.7581 6.74186C14.9339 6.91765 15.0612 7.13596 15.1276 7.37554C15.194 7.61512 15.1972 7.8678 15.137 8.109C15.0017 8.64768 14.6909 9.12597 14.2536 9.46839C13.8163 9.8108 13.2774 9.99785 12.722 10H11.5ZM10 8.777C9.99762 8.22177 9.81048 7.68312 9.46808 7.24602C9.12568 6.80893 8.64752 6.49825 8.109 6.363C7.8678 6.30276 7.61512 6.306 7.37554 6.37239C7.13596 6.43878 6.91765 6.56607 6.74186 6.74186C6.56607 6.91765 6.43878 7.13596 6.37239 7.37554C6.306 7.61512 6.30276 7.8678 6.363 8.109C6.49829 8.64768 6.80912 9.12597 7.24642 9.46839C7.68372 9.8108 8.22259 9.99785 8.778 10H10V8.777Z" fill="#FFF6EF" />
                        </svg>
                    </Button>
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
                                <path d="M4.83316 16.0017V7.19508C4.83316 5.43865 5.94079 3.87312 7.59709 3.28854L14.7303 0.770925C15.6288 0.453827 16.5708 1.12034 16.5708 2.0731V15.3113" stroke="#FFF6EF" stroke-width="1.3809" />
                                <path d="M0.701633 17.0183C1.15434 14.3165 4.38181 15.1957 4.84181 17.3828C5.82761 14.2624 9.58688 13.6594 8.98199 17.0183C8.65897 18.8119 6.68189 20.6633 4.84181 22.1213C1.57696 20.5248 0.57002 18.7664 0.701633 17.0183Z" stroke="#FFF6EF" stroke-width="1.3809" stroke-linejoin="round" />
                                <path d="M15.1896 4.4563L6.21402 7.44849V4.76196L15.1896 1.76978V4.4563Z" fill="#FFF6EF" stroke="#FFF6EF" stroke-width="1.3809" />
                                <path d="M13.1188 12.7173C15.8805 12.0269 17.2614 13.5724 17.2614 15.479C17.2613 16.8598 15.8804 18.2407 13.1188 18.9312C12.4523 19.0978 11.8419 19.1613 11.3064 19.1273C11.0758 19.1127 10.9955 18.8215 11.1339 18.6365C11.5066 18.1379 11.7379 17.4514 11.7379 16.6919C11.7379 15.6875 11.3348 14.8099 10.7331 14.3271C10.5795 14.2038 10.5496 13.962 10.7071 13.8437C11.3828 13.3367 12.2125 12.9439 13.1188 12.7173Z" fill="#FFF6EF" />
                            </>
                        ) : (
                            <>
                                <path d="M5.52344 11.5582V16.0026H4.14258V10.6227L5.52344 11.5582ZM14.5 0.119751C15.8476 -0.355881 17.2607 0.644781 17.2607 2.07385V14.6764L15.8799 13.7408V2.07385C15.8798 1.59754 15.4091 1.26395 14.96 1.42249L7.82715 3.94006C6.59011 4.37671 5.72188 5.47071 5.55469 6.7467L4.31934 5.90979C4.73306 4.41223 5.85217 3.1731 7.36719 2.63831L14.5 0.119751Z" fill="#FFF6EF" />
                                <path d="M0.701633 17.0186C1.15434 14.3169 4.38181 15.1961 4.84181 17.3831C5.82761 14.2628 9.58688 13.6597 8.98199 17.0186C8.65897 18.8123 6.68189 20.6637 4.84181 22.1217C1.57696 20.5252 0.57002 18.7667 0.701633 17.0186Z" stroke="#FFF6EF" stroke-width="1.3809" stroke-linejoin="round" />
                                <path d="M15.8799 4.95483L7.18652 7.85229L5.52344 6.72534V4.2644L15.8799 0.812256V4.95483Z" fill="#FFF6EF" />
                                <path d="M15.2357 18.1371C14.6548 18.4511 13.9504 18.7242 13.1195 18.932C12.4533 19.0986 11.8424 19.1621 11.307 19.1283C11.0764 19.1137 10.9958 18.8221 11.1342 18.6371C11.5068 18.1386 11.7386 17.4521 11.7386 16.6927C11.7386 16.3297 11.684 15.9836 11.5883 15.6664L15.2357 18.1371Z" fill="#FFF6EF" />
                                <path d="M2.19043 6.81091L17.6904 17.3109" stroke="#FFF6EF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </>
                        )}
                    </svg>
                </Button>
            </SoundButton>
            {isLandscape ? <HeartsLandscapeStyled opened={openedCompanies} onClick={(id) => handleClickHeart(id)} /> : <HeartsStyled onClick={(id) => handleClickHeart(id)} opened={openedCompanies} />}
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
            {isEndPart && <GameEnd onClick={() => setIsFormScreen(true)} />}
            {isFormScreen && <Form onClick={handleCloseForm} />}
            <AnimatePresence>
                {isShownStartScreen && (<StartScreen onClose={handleCloseStartScreen} />)}
                {isShownRules && (<Rules onClose={handleCloseRules} />)}
            </AnimatePresence>
        </AnimatedBg>
    )
}