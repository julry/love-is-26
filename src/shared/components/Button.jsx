import styled from "styled-components";
import { GlassBlock } from "./GlassBlock";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { media } from "../../styles/mixins";
import { DESKTOP_WIDTH } from "../../constants";

const Wrapper = styled.div`
    height: ${({$isIcon, $ratio}) => $isIcon ? $ratio * 52 + 'px' : 'auto'};
    width: ${({$isIcon, $ratio}) => $isIcon ? $ratio * 58 + 'px' : 'auto'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({$ratio}) => $ratio * 19}px;

    & svg {
        height: ${({$svgHeight, $ratio}) => $svgHeight * $ratio}px;
        width: ${({$svgWidth, $ratio}) => $svgWidth * $ratio}px;
    }

    ${media.tablet`
        height: ${({$isIcon, $ratio}) => $isIcon ? $ratio * 60 + 'px' : 'auto'};
        width: ${({$isIcon, $ratio}) => $isIcon ? $ratio * 66 + 'px' : 'auto'};

        font-size: 22px;

        & svg {
            height: ${({$svgHeight, $ratio}) => $svgHeight * $ratio * 1.15}px;
            width: ${({$svgWidth, $ratio}) => $svgWidth * $ratio * 1.15}px;
        }
    `}

    ${media.desktop`
        height: ${({$isIcon}) => $isIcon ?  75 + 'px' : 'auto'};
        width: ${({$isIcon}) => $isIcon ? 85 + 'px' : 'auto'};
        font-size: 32px;

        & svg {
            height: ${({$svgHeight}) => $svgHeight * 1.44}px;
            width: ${({$svgWidth}) => $svgWidth * 1.44}px;
        }
    `}

    ${media.desktopWide`
        height: ${({$isIcon}) => $isIcon ? 88 + 'px' : 'auto'};
        width: ${({$isIcon,}) => $isIcon ? 96 + 'px' : 'auto'};
        font-size: 36px;

        & svg {
            height: ${({$svgHeight, $ratio}) => $svgHeight * 1.7}px;
            width: ${({$svgWidth, $ratio}) => $svgWidth * 1.7}px;
        }
    `}

    @media screen and (min-width: ${DESKTOP_WIDTH}px) and (max-height: 900px) {
        height: ${({$isIcon}) => $isIcon ? 70 + 'px' : 'auto'};
        width: ${({$isIcon}) => $isIcon ? 79 + 'px' : 'auto'};
        font-size: 30px;

        & svg {
            height: ${({$svgHeight}) => $svgHeight * 1.3}px;
            width: ${({$svgWidth}) => $svgWidth * 1.3}px;
        }
    }

    @media screen and (min-width: ${DESKTOP_WIDTH}px) and (max-height: 700px) {
        font-size: 26px;
        height: ${({$isIcon}) => $isIcon ? 65 + 'px' : 'auto'};
        width: ${({$isIcon}) => $isIcon ? 69 + 'px' : 'auto'};

        & svg {
            height: ${({$svgHeight}) => $svgHeight * 1.2}px;
            width: ${({$svgWidth}) => $svgWidth * 1.2}px;
        }
    }
`;

export const Button = (props) => {
    const ratio = useSizeRatio();

    const { svgWidth, svgHeight } = props.svgProps ?? {}

    return (
        <button onClick={props.onClick}>
            <GlassBlock 
                {...props.glassProps}
                blur={3.7}
                contrast={0.1}
                brightness={1.2}
                {...(props.isIcon ? {$angle: 145} : {})}
            >
                <Wrapper $ratio={ratio} $svgWidth={svgWidth} $svgHeight={svgHeight} $isIcon={props.isIcon} className={props.className}>
                    {props.children}
                </Wrapper>
            </GlassBlock>
        </button>
    )
}