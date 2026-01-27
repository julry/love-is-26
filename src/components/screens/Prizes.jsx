import styled from "styled-components";
import bgMob from '../../assets/images/prizesBgMobile.svg';
import bgDesk from '../../assets/images/prizesBgDesk.svg';
import { useProgress } from "../../contexts/ProgressContext";
import { media } from "../../styles/mixins";
import { Button } from "../../shared/components/Button";
import { SCREEN_NAMES } from "../../constants/screens";
import { GlassBlock } from "../../shared/components/GlassBlock";
import { useSizeRatio } from "../../contexts/SizeRatioContext";

import logo from '../../assets/images/logo.png';

import alfaPrize from '../../assets/images/prizes/alfaPrize.png';
import avitoPrize from '../../assets/images/prizes/avitoPrize.png';
import ftPrize1 from '../../assets/images/prizes/ftPrize1.png';
import ftPrize2 from '../../assets/images/prizes/ftPrize2.png';
import ftPrize3 from '../../assets/images/prizes/ftPrize3.png';
import lemanaPrize from '../../assets/images/prizes/lemanaPrize.png';
import otpPrize from '../../assets/images/prizes/otpPrize.png';
import vtbPrize from '../../assets/images/prizes/vtbPrize.png';
import yandexPrize from '../../assets/images/prizes/yandexPrize.png';

import logoAlfa from '../../assets/images/prizes/logoAlfa.svg';
import logoAvito from '../../assets/images/prizes/logoAvito.svg';
import logoFt from '../../assets/images/prizes/logoFt.svg';
import logoLemana from '../../assets/images/prizes/logoLemana.svg';
import logoOtp from '../../assets/images/prizes/logoOtp.svg';
import logoYandex from '../../assets/images/prizes/logoYandex.svg';
import logoVtb from '../../assets/images/prizes/logoVtb.svg';

import cornerBotLamps from '../../assets/images/prizes/cornerBottomLamps.png';
import cornerTopLamps from '../../assets/images/prizes/cornerTopLamps.png';
import leftBig from '../../assets/images/prizes/leftBigLamps.png';
import rightLamps from '../../assets/images/prizes/rightLamps.png';
import topLamps from '../../assets/images/prizes/topLamps.png';

import { useRef } from "react";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 46px 0 0;
    width: 100%;
    height: 100%;
    background: url(${({ $bg }) => $bg});
    background-repeat: no-repeat;
    background-size: cover;

    ${media.desktop`
        padding: 65px 0 0;
    `}
`;


const CloseButton = styled.div`
    position: absolute;
    right: 15px;
    top: 15px;

    @media screen and (orientation: landscape) {
        top: 65px;
        right: 56px;
    }

`;

const Content = styled.div`
    overflow: hidden auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    gap: 20px;

    flex: 1;
    width: 100%;

    padding: 10px 15px 40px;

    max-height: 100%;

    ${media.desktop`
        justify-content: space-between;
        max-width: 1005px;
        padding-bottom: 30px;
    `}
`;


const Card = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 9px;
    width: ${({$isLandscape, $isFullWidth}) => $isLandscape && !$isFullWidth ? 'calc((100% - 40px) / 2)' : '100%'};
    height: 158px;
    max-width: 360px;
    background: linear-gradient(0deg, rgba(255, 246, 239, 0.8), rgba(255, 246, 239, 0.8)), rgba(59, 61, 90, 0.2);
    border-radius: 40px;

    @media screen and (orientation: landscape) {
        height: 210px;
        max-width: unset;
    }
`;

const TitleBlock = styled(GlassBlock)`
    width: 130px;
    height: 40px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-bottom: var(--spacing_x3);

    ${media.desktop`
        width: 197.5px;
        height: 75px;
    `}
`;

const Title = styled.h3`
    text-align: center;
    font-size: calc(35 / 14 * var(--font_md));

    @media screen and (orientation: landscape) and (max-height: 600px){
       font-size: calc(28 / 14 * var(--font_md));
    }
`;

const Element = styled.img`
    position: absolute;
    top: ${({$top}) => $top}px;
    left: ${({$left}) => $left}px;
    height: ${({$height}) => $height}px;
    width: ${({$width}) => $width}px;
    object-fit: contain;

    ${({$right}) => $right !== undefined ? 'right:' + $right + 'px; left: auto;' : ''};
    ${({$bottom}) => $bottom !== undefined ? 'bottom:' + $bottom + 'px; top: auto;' : ''};

    ${({$shouldRotate}) => $shouldRotate ? 'transform: scale(-1,1)' : ''}
`;


const PrizeGroup = styled.div`
    position: relative;
    width: 300px;
    height: 100%;

    @media screen and (orientation: landscape){
        width: 501px;
    }
`;

const ButtonWrapper = styled.div`
    margin: 0 auto;
`;

const Logo = styled.img`
    position: absolute;
    object-fit: contain;
    width: 90px;
    height: 52px;
    top: 45px;
    left: 56px;

    ${media.desktop`
        width: 140px;
        height: 102px;
    `}

    ${media.desktopWide`
        width: 200px;
        height: 145px;
    `}
`;

const Amount = styled.h4`
    position: absolute;
    left: ${({$ratio}) => 16 * $ratio}px;
    bottom: ${({$ratio}) => 10 * $ratio}px;
    font-size: 80px;
    color: #363330;

    @media screen and (orientation: landscape){
        font-size: 107px;
        left: 40px;
        bottom: 20px;
    }
`;

export const Prizes = () => {
    const ratio = useSizeRatio();
    const {isLandscape, next} = useProgress();
    const contentRef = useRef();

    return (
        <Wrapper $bg={isLandscape ? bgDesk : bgMob}>
            <CloseButton>
                <Button isIcon onClick={() => next(SCREEN_NAMES.LOBBY)} svgProps={{ svgWidth: 14, svgHeight: 15 }}>
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.21934 0.237618C0.359965 0.0854635 0.550589 0 0.74934 0C0.948091 0 1.13871 0.0854635 1.27934 0.237618L13.2793 13.2376C13.353 13.312 13.4121 13.4017 13.4531 13.5014C13.4941 13.601 13.5162 13.7086 13.5179 13.8177C13.5197 13.9268 13.5012 14.0352 13.4635 14.1363C13.4257 14.2375 13.3696 14.3294 13.2984 14.4066C13.2272 14.4837 13.1423 14.5446 13.0489 14.5854C12.9555 14.6263 12.8555 14.6464 12.7548 14.6444C12.6541 14.6425 12.5548 14.6186 12.4628 14.5742C12.3708 14.5298 12.288 14.4658 12.2193 14.386L0.21934 1.38595C0.0788894 1.23361 0 1.0271 0 0.811785C0 0.596472 0.0788894 0.389962 0.21934 0.237618Z" fill="#FFF6EF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2793 0.237618C13.4198 0.389962 13.4987 0.596472 13.4987 0.811785C13.4987 1.0271 13.4198 1.23361 13.2793 1.38595L1.27934 14.386C1.13717 14.5295 0.949121 14.6076 0.75482 14.6039C0.560519 14.6002 0.375134 14.5149 0.237721 14.366C0.100308 14.2172 0.0215962 14.0163 0.018168 13.8059C0.0147398 13.5954 0.0868627 13.3916 0.219343 13.2376L12.2193 0.237618C12.36 0.0854635 12.5506 0 12.7493 0C12.9481 0 13.1387 0.0854635 13.2793 0.237618Z" fill="#FFF6EF" />
                    </svg>
                </Button>
            </CloseButton>
            {isLandscape && (
                <Logo src={logo} alt="" />
            )}
            <TitleBlock $angle={135}>
                <Title>призы</Title>
            </TitleBlock>
            <Content ref={contentRef}>
                <Card $isLandscape={isLandscape} $isFullWidth>
                    {isLandscape ? (
                        <>
                            <Element $top={20} $left={50} $width={129} $height={49} src={logoFt} alt=""/>
                            <PrizeGroup $isLandscape>
                                <Element $top={39} $left={0} $width={207} $height={157} src={ftPrize1} alt=""/>
                                <Element $top={8} $left={204} $width={169} $height={189} src={ftPrize2} alt=""/>
                                <Element $top={27} $left={366} $width={135} $height={174} src={ftPrize3} alt=""/>
                            </PrizeGroup>
                            <Element $top={-63} $right={84} $width={201} $height={124} src={topLamps} alt=""/>
                            <Element $bottom={-18} $right={-14} $width={108} $height={87} src={cornerBotLamps} alt=""/>
                            <Element $top={8} $left={-65} $width={138} $height={198} src={leftBig} alt=""/>
                        </>
                    ) : (
                        <>
                            <Element $top={15 * ratio} $left={38 * ratio} $width={76 * ratio} $height={29 * ratio} src={logoFt} alt=""/>
                            <PrizeGroup>
                                <Element $top={52} $left={0} $width={125 * ratio} $height={95 * ratio} src={ftPrize1} alt=""/>
                                <Element $top={16} $left={112 * ratio} $width={116 * ratio} $height={129 * ratio} src={ftPrize2} alt=""/>
                                <Element $top={38} $left={203 * ratio} $width={86 * ratio} $height={111 * ratio} src={ftPrize3} alt=""/>
                            </PrizeGroup>
                            <Element $top={-43 * ratio} $left={94 * ratio} $width={141 * ratio} $height={84 * ratio} src={topLamps} alt=""/>
                            <Element $bottom={-15 * ratio} $right={-38 * ratio} $width={137 * ratio} $height={67 * ratio} src={cornerBotLamps} alt=""/>
                        </>
                    )}
                </Card>
                <Card $isLandscape={isLandscape}>
                    {isLandscape ? (
                        <>  
                            <Element $top={31} $left={45} $width={96} $height={27} src={logoAvito} alt=""/>
                            <Element $top={-47} $left={-24} $width={138} $height={127} src={cornerTopLamps} alt=""/>
                            <Element $bottom={-18} $right={-14} $width={108} $height={87} src={cornerBotLamps} alt=""/>
                            <PrizeGroup>
                                <Amount $ratio={ratio}>5x</Amount>
                                <Element $top={-4} $left={175} $width={244} $height={207} src={avitoPrize} alt=""/>
                            </PrizeGroup>
                        </>
                    ) : (
                        <>
                            <Element $top={23 * ratio} $left={34 * ratio} $width={72 * ratio} $height={20 * ratio} src={logoAvito} alt=""/>
                            <PrizeGroup>
                                <Amount $ratio={ratio}>5x</Amount>
                                <Element $top={-1} $left={114 * ratio} $width={186 * ratio} $height={158 * ratio} src={avitoPrize} alt=""/>
                            </PrizeGroup>
                            <Element $top={-35 * ratio} $left={-17 * ratio} $width={102 * ratio} $height={94 * ratio} src={cornerTopLamps} alt=""/>
                            <Element $bottom={-15 * ratio} $right={-38 * ratio} $width={137 * ratio} $height={67 * ratio} src={cornerBotLamps} alt=""/>
                        </>
                    )}
                </Card>
                <Card $isLandscape={isLandscape}>
                    {isLandscape ? (
                        <>
                            <Element $top={19} $left={47} $width={105} $height={46} src={logoAlfa} alt=""/>
                            <Element $shouldRotate $top={-47} $right={-24} $width={138} $height={127} src={cornerTopLamps} alt=""/>
                            <Element $shouldRotate $bottom={-18} $left={-14} $width={108} $height={87} src={cornerBotLamps} alt=""/>
                            <PrizeGroup>
                                <Amount $ratio={ratio}>10x</Amount>
                                <Element $top={15} $left={190} $width={244} $height={186} src={alfaPrize} alt=""/>
                            </PrizeGroup>
                        </>
                    ) : (
                        <>
                            <Element $top={14 * ratio} $left={35 * ratio} $width={79 * ratio} $height={34 * ratio} src={logoAlfa} alt=""/>
                            <PrizeGroup>
                                <Amount $ratio={ratio}>10x</Amount>
                                <Element $top={11} $left={126 * ratio} $width={183 * ratio} $height={140 * ratio} src={alfaPrize} alt=""/>
                            </PrizeGroup>
                            <Element $shouldRotate $top={-35 * ratio} $right={-17 * ratio} $width={102 * ratio} $height={94 * ratio} src={cornerTopLamps} alt=""/>
                            <Element $shouldRotate $bottom={-15 * ratio} $left={-38 * ratio} $width={137 * ratio} $height={67 * ratio} src={cornerBotLamps} alt=""/>
                        </>
                    )}
                </Card>
                <Card $isLandscape={isLandscape}>
                    {isLandscape ? (
                        <>
                        <Element $top={31} $left={45} $width={92} $height={33} src={logoVtb} alt=""/>
                        <Element $top={-47} $left={-24} $width={138} $height={127} src={cornerTopLamps} alt=""/>
                        <Element $bottom={-18} $right={-14} $width={108} $height={87} src={cornerBotLamps} alt=""/>
                        <PrizeGroup>
                                <Amount $ratio={ratio}>10x</Amount>
                                <Element $top={13} $left={205} $width={216} $height={180} src={vtbPrize} alt=""/>
                            </PrizeGroup>
                        </>
                    ) : (
                        <>
                            <Element $top={14 * ratio} $left={35 * ratio} $width={64 * ratio} $height={23 * ratio} src={logoVtb} alt=""/>
                            <PrizeGroup>
                                <Amount $ratio={ratio}>10x</Amount>
                                <Element $top={10} $left={134 * ratio} $width={167 * ratio} $height={136 * ratio} src={vtbPrize} alt=""/>
                            </PrizeGroup>
                            <Element $shouldRotate $top={-35 * ratio} $right={-17 * ratio} $width={102 * ratio} $height={94 * ratio} src={cornerTopLamps} alt=""/>
                            <Element $shouldRotate $bottom={-15 * ratio} $left={-38 * ratio} $width={137 * ratio} $height={67 * ratio} src={cornerBotLamps} alt=""/>
                        </>
                    )}
                </Card>
                <Card $isLandscape={isLandscape}>
                    {isLandscape ? (
                        <>
                            <Element $top={15} $left={63} $width={67} $height={55} src={logoLemana} alt=""/>
                            <Element $top={-70} $left={111} $width={198} $height={138} src={topLamps} alt=""/>
                            <Element $shouldRotate $top={51} $left={-46} $width={92} $height={113} src={rightLamps} alt=""/>
                            <PrizeGroup>
                                <Amount $ratio={ratio}>10x</Amount>
                                <Element $top={1} $left={230} $width={195} $height={193} src={lemanaPrize} alt=""/>
                            </PrizeGroup>
                        </>
                    ) : (
                        <>
                            <Element $top={12 * ratio} $left={48 * ratio} $width={50 * ratio} $height={41 * ratio} src={logoLemana} alt=""/>
                            <PrizeGroup>
                                <Amount $ratio={ratio}>10x</Amount>
                                <Element $top={-1} $left={146 * ratio} $width={156 * ratio} $height={145 * ratio} src={lemanaPrize} alt=""/>
                            </PrizeGroup>
                            <Element $top={-43 * ratio} $left={94 * ratio} $width={141 * ratio} $height={84 * ratio} src={topLamps} alt=""/>
                            <Element $shouldRotate $top={38 * ratio} $left={-35 * ratio} $width={70 * ratio} $height={87 * ratio} src={rightLamps} alt=""/>
                        </>
                    )}
                </Card>
                <Card $isLandscape={isLandscape}>
                    {isLandscape ? (
                        <>
                            <Element $top={-70} $left={111} $width={198} $height={138} src={topLamps} alt=""/>
                            <Element $top={51} $right={-46} $width={92} $height={113} src={rightLamps} alt=""/>
                            <Element $top={33} $left={33} $width={120} $height={30} src={logoOtp} alt=""/>
                            <PrizeGroup>
                                <Amount $ratio={ratio}>5x</Amount>
                                <Element $top={10} $left={205} $width={189} $height={217} src={otpPrize} alt=""/>
                            </PrizeGroup>
                        </>
                    ) : (
                        <>
                            <Element $top={25 * ratio} $left={25 * ratio} $width={90 * ratio} $height={22 * ratio} src={logoOtp} alt=""/>
                            <PrizeGroup>
                                <Amount $ratio={ratio}>5x</Amount>
                                <Element $top={4} $left={137 * ratio} $width={142 * ratio} $height={163 * ratio} src={otpPrize} alt=""/>
                            </PrizeGroup>
                            <Element $top={-43 * ratio} $left={94 * ratio} $width={141 * ratio} $height={84 * ratio} src={topLamps} alt=""/>
                            <Element $shouldRotate $top={38 * ratio} $left={-35 * ratio} $width={70 * ratio} $height={87 * ratio} src={rightLamps} alt=""/>
                        </>
                    )}
                </Card>
                <Card $isLandscape={isLandscape}>
                    {isLandscape ? (
                        <>
                            <Element $shouldRotate $top={-47} $right={-24} $width={138} $height={127} src={cornerTopLamps} alt=""/>
                            <Element $shouldRotate $bottom={-18} $left={-14} $width={108} $height={87} src={cornerBotLamps} alt=""/>
                            <Element $top={22} $left={51} $width={92} $height={23} src={logoYandex} alt=""/>
                            <PrizeGroup>
                                <Amount $ratio={ratio}>10x</Amount>
                                <Element $top={11} $left={218} $width={192} $height={183} src={yandexPrize} alt=""/>
                            </PrizeGroup>
                        </>
                    ) : (
                        <>
                            <Element $top={19 * ratio} $left={39 * ratio} $width={69 * ratio} $height={19 * ratio} src={logoYandex} alt=""/>
                            <PrizeGroup>
                                <Amount $ratio={ratio}>10x</Amount>
                                <Element $top={8} $left={138 * ratio} $width={144 * ratio} $height={137 * ratio} src={yandexPrize} alt=""/>
                            </PrizeGroup>
                            <Element $top={-35 * ratio} $left={-17 * ratio} $width={102 * ratio} $height={94 * ratio} src={cornerTopLamps} alt=""/>
                            <Element $bottom={-15 * ratio} $right={-38 * ratio} $width={137 * ratio} $height={67 * ratio} src={cornerBotLamps} alt=""/>
                        </>
                    )}
                </Card>
                {!isLandscape && (
                    <ButtonWrapper>
                        <Button onClick={() => contentRef.current?.scrollTo({top: 0, behavior: 'smooth'})} isIcon svgProps={{ svgWidth: 10, svgHeight: 17 }}>
                            <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 1V16" stroke="#FFF6EF" stroke-width="2" stroke-linecap="round"/>
                            <path d="M1 5.5L5 1L9 5.5" stroke="#FFF6EF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </Button>
                    </ButtonWrapper>
                )}
            </Content>
        </Wrapper>
    )
}