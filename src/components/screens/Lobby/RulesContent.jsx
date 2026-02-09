import { GlassBlock } from '../../../shared/components/GlassBlock';
import styled from "styled-components";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { Button } from "../../../shared/components/Button";
import { media } from '../../../styles/mixins';

const RulesBlock = styled.div`
    padding: var(--spacing_x6);

    ${media.desktop`
        padding: 30px;
    `}
`;

const Text = styled.p`
    margin: var(--spacing_x6) 0;
    font-size: var(--font_md);

    ${media.desktop`
        margin: 40px 0;
        font-size: 23px;
    `}
`;

const Wrapper = styled.div`
    text-align: center;
    max-width: var(--content_sm);

    ${media.desktop`
        max-width: 488px;
    `}
`;

const Title = styled.h3`
    font-size: calc(40 / 14 * var(--font_md));
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
            <GlassBlock $angle={135} brightness={1.1} saturation={1.2}>
                <RulesBlock>
                    <Title>правила</Title>
                    <Text>
                        Перед тобой — дерево,
                        на котором растут сердца компаний. Как плоды созревают на ветвях,
                        так компании взращивают любовь своих сотрудников. Собери все сердца, чтобы узнать, что значит любовь для каждого работодателя.
                    </Text>
                    <ButtonStyled
                        glassProps={{
                            $percentage: 5,
                            $angle: 125,
                        }}
                        $ratio={ratio}
                        onClick={onClick}
                    >
                        играть
                    </ButtonStyled>
                </RulesBlock>
            </GlassBlock>
        </Wrapper>
    )
}