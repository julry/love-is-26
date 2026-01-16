import styled from "styled-components";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { GlassBlock } from "../GlassBlock";
import { media } from "../../../styles/mixins";
import { Button } from "../Button";

const RulesBlock = styled.div`
    padding: var(--spacing_x6);
`;

const Text = styled.p`
    margin: var(--spacing_x6) 0;
    font-size: var(--font_md);

    ${media.desktop`
        margin: 40px 0;
    `}
`;

const Wrapper = styled.div`
    text-align: center;
    max-width: var(--content_sm);
`;

const Title = styled.h3`
    font-size: calc( 40 / 14 * var(--font_md));
`;

const ButtonStyled = styled(Button)`
    background-color: rgba(255, 255, 255, 0.34);
    padding: ${({ $ratio }) => $ratio * 19}px ${({ $ratio }) => $ratio * 34}px;

    ${media.desktop`
        padding: 20px 40px;
    `}
`;

export const RulesContent = ({onClick}) => {
    const ratio = useSizeRatio();
    return (
        <Wrapper>
            <GlassBlock $angle={135} brightness={1.1} saturation={1.2} elasticity={1.5}>
                <RulesBlock>
                    <Title>Как играть</Title>
                    <Text>
                        Перетаскивай фрагменты, чтобы соединить сердце воедино. Когда пазл будет собран, ты узнаешь, что для компании значит любовь.
                    </Text>
                    <ButtonStyled
                        glassProps={{
                            $percentage: 5,
                            $angle: 125,
                        }}
                        $ratio={ratio}
                        onClick={onClick}
                    >
                        понятно
                    </ButtonStyled>
                </RulesBlock>
            </GlassBlock>
        </Wrapper>
    )
}