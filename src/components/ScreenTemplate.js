import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { SizeRatioContextProvider } from '../contexts/SizeRatioContext';
import { DESKTOP_WIDTH } from '../constants';
import { GlassBlock } from '../shared/components/GlassBlock';
import { Button } from '../shared/components/Button';
import { media } from '../styles/mixins';
import audioSrcWav from '../assets/sounds/loveis.wav';
import audioSrcMp3 from '../assets/sounds/loveis.mp3';
import audioSrcOgg from '../assets/sounds/loveis.ogg';
import { useProgress } from '../contexts/ProgressContext';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const WrapperInner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Content = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transform: translate(0, 0);
    background-color: rgba(0, 0, 0, 0.4);

    --font-content: 16px;
    --font_md: ${({ $sizeRatio }) => $sizeRatio * 14}px;
    --content_sm: ${({ $sizeRatio }) => $sizeRatio * 290}px;
    --spacing_x1: ${({ $sizeRatio }) => $sizeRatio * 5}px;
    --spacing_x2: ${({ $sizeRatio }) => $sizeRatio * 10}px;
    --spacing_x3: ${({ $sizeRatio }) => $sizeRatio * 15}px;
    --spacing_x4: ${({ $sizeRatio }) => $sizeRatio * 20}px;
    --spacing_x5: ${({ $sizeRatio }) => $sizeRatio * 25}px;
    --spacing_x6: ${({ $sizeRatio }) => $sizeRatio * 30}px;
    font-size: ${({ $sizeRatio }) => `calc(var(--font-content) * ${$sizeRatio})`};

    @media screen and (min-width: ${DESKTOP_WIDTH}){
        --font-content: 16px;
    }

    ${media.tablet`
        --spacing_x1: ${({ $sizeRatio }) => $sizeRatio * 8}px;
        --spacing_x2: ${({ $sizeRatio }) => $sizeRatio * 16}px;
        --spacing_x3: ${({ $sizeRatio }) => $sizeRatio * 24}px;
        --spacing_x4: ${({ $sizeRatio }) => $sizeRatio * 32}px;
        --spacing_x5: ${({ $sizeRatio }) => $sizeRatio * 40}px;
        --spacing_x6: ${({ $sizeRatio }) => $sizeRatio * 48}px;
        --content_sm: 400px;
        --font_md: 18px;
    `}

    ${media.desktop`
        --spacing_x1: ${({ $sizeRatio }) => $sizeRatio * 16}px;
        --spacing_x2: ${({ $sizeRatio }) => $sizeRatio * 32}px;
        --spacing_x3: ${({ $sizeRatio }) => $sizeRatio * 48}px;
        --spacing_x4: ${({ $sizeRatio }) => $sizeRatio * 64}px;
        --spacing_x5: ${({ $sizeRatio }) => $sizeRatio * 80}px;
        --spacing_x6: ${({ $sizeRatio }) => $sizeRatio * 96}px;
        --content_sm: 488px;
        --font_md: 20px;
    `}
    ${media.desktopWide`
        --spacing_x1: ${({ $sizeRatio }) => $sizeRatio * 20}px;
        --spacing_x2: ${({ $sizeRatio }) => $sizeRatio * 40}px;
        --spacing_x3: ${({ $sizeRatio }) => $sizeRatio * 60}px;
        --spacing_x4: ${({ $sizeRatio }) => $sizeRatio * 80}px;
        --spacing_x5: ${({ $sizeRatio }) => $sizeRatio * 100}px;
        --spacing_x6: ${({ $sizeRatio }) => $sizeRatio * 120}px;
        --content_sm: 588px;
        --font_md: 23px;
    `}
`;


const CookieWrapper = styled.div`
    position: absolute;
    bottom: ${({ $ratio }) => $ratio * 40}px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 40;
    width: 100%;
    max-width: ${({ $ratio }) => $ratio * 335}px;

    ${media.tablet`
        max-width: ${({ $ratio }) => $ratio * 455}px;
    `};
`;

const CookieContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ $ratio }) => $ratio * 17}px ${({ $ratio }) => $ratio * 25}px;
    width: 100%;
    font-size: ${({ $ratio }) => $ratio * 12}px;

    ${media.desktop`
        font-size: 16px;
    `}
`;

const OkButton = styled(Button)`
    background-color: rgba(255, 255, 255, 0.34);
    padding: ${({ $ratio }) => $ratio * 12}px ${({ $ratio }) => $ratio * 22}px;
`;

export function ScreenTemplate(props) {
    const { audioRef } = useProgress();
    const [isCookies, setIsCookies] = useState(false);

    const { children } = props;
    const wrapperRef = useRef();
    const wrapperInnerRef = useRef();

    useEffect(() => {
        const isAgreedCookies = localStorage.getItem('love_cookies_agreed');
        if (isAgreedCookies) return;

        setIsCookies(!isAgreedCookies);
    }, []);


    const handleClick = () => {
        localStorage.setItem('love_cookies_agreed', true);
        setIsCookies(false);
    };

    return (
        <SizeRatioContextProvider target={wrapperInnerRef}>
            {(sizeRatio) => (
                <Wrapper ref={wrapperRef}>
                    <audio ref={audioRef} loop>
                        <source src={audioSrcOgg} type="audio/ogg" />
                        <source src={audioSrcMp3} type="audio/mpeg" />
                        <source src={audioSrcWav} type="audio/wav" />
                    </audio>
                    <WrapperInner ref={wrapperInnerRef}>
                        <Content $sizeRatio={sizeRatio}>
                            {children}
                            {
                                isCookies && (
                                    <CookieWrapper $ratio={sizeRatio}>
                                        <GlassBlock $angle={100} $percentage={3}>
                                            <CookieContent $ratio={sizeRatio}>
                                                <div>
                                                    <p>Мы используем <a href="https://fut.ru/cookie" target="_blank" rel="noreferrer">
                                                        куки.
                                                    </a> </p>
                                                    <p>Играя, ты соглашаешься с этим</p>
                                                </div>

                                                <OkButton 
                                                    $ratio={sizeRatio}
                                                    glassProps={{
                                                        $percentage: 5,
                                                        $angle: 125,
                                                    }}
                                                    onClick={handleClick}
                                                >
                                                    окей
                                                </OkButton>
                                            </CookieContent>
                                        </GlassBlock>
                                    </CookieWrapper>
                                )
                            }
                        </Content>
                    </WrapperInner>
                </Wrapper>
            )}
        </SizeRatioContextProvider>
    );
};
