import { useSizeRatio } from "../../../contexts/SizeRatioContext"
import { ModalWrapper } from '../../../shared/components/Modal';
import logo from '../../../assets/images/logo.png';
import styled from 'styled-components';
import { Button } from '../../../shared/components/Button';
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { RulesContent } from "./RulesContent";
import { media } from "../../../styles/mixins";
import { useProgress } from "../../../contexts/ProgressContext";

const StartButton = styled(Button)`
    width: ${({ $ratio }) => $ratio * 69}px !important;
    height: ${({ $ratio }) => $ratio * 62}px !important;

    ${media.desktop`
        width: ${({ $ratio }) => $ratio * 75}px !important;
        height: ${({ $ratio }) => $ratio * 67}px !important;

        & svg {
            height: 40px !important;
            width:  35px !important;
        }
    `}
`;

const StartText = styled.h3`
    margin-top: ${({ $ratio }) => $ratio * 15}px;
    font-size: ${({ $ratio }) => $ratio * 20}px;
    white-space: pre;
    text-align: center;
`

const Logo = styled.img`
    object-fit: contain;
    width: ${({ $ratio }) => $ratio * 202}px;
    height: ${({ $ratio }) => $ratio * 147}px;
    margin-top: ${({ $ratio }) => $ratio * -147}px;
    margin-bottom:  ${({ $ratio }) => $ratio * 25}px;
`;

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StartScreen = ({ onClose }) => {
    const { handleToggleAudio } = useProgress();
    const ratio = useSizeRatio();
    const [isRules, setIsRules] = useState(false);

    const handleStart = () => {
        handleToggleAudio();
        setIsRules(true);
    }

    return (
        <ModalWrapper exit={{ opacity: 0 }}>
            <AnimatePresence>
                {
                    isRules ? (
                        <Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <RulesContent onClick={onClose} />
                        </Wrapper>)
                        : (
                            <Wrapper exit={{ opacity: 0 }}>
                                <Logo $ratio={ratio} src={logo} alt="Любовь это..." />
                                <StartButton
                                    $ratio={ratio}
                                    isIcon
                                    onClick={handleStart}
                                    glassProps={{
                                        $percentage: 15,
                                        $angle: 125,
                                    }}
                                    svgProps={{svgWidth: 37, svgHeight: 33}}
                                >
                                    <svg width="100%" height="100%" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.7077 14.9271V4.77716C10.7077 1.93061 13.8712 0.224538 16.2497 1.78839L33.2309 12.9534C35.4735 14.4279 35.3536 17.7552 33.0108 19.0646L11.9569 30.831C11.155 31.2792 10.2052 31.4181 9.34024 31.1087C3.59764 29.0547 -1.11444 23.7399 2.40158 21.0626C4.06055 19.7994 5.9119 20.0648 7.63803 21.604C8.36028 19.258 9.80483 18.5362 11.4299 18.5362C15.2643 18.5362 16.0962 24.3753 11.4299 27.3561" stroke="#FFF6EF" stroke-width="2.38462" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </StartButton>
                                <StartText $ratio={ratio}>нажми, чтобы{'\n'}начать</StartText>
                            </Wrapper>
                        )
                }
            </AnimatePresence>
        </ModalWrapper>
    )
}