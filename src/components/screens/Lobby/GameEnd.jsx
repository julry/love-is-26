import styled from 'styled-components';
import {Button} from '../../../shared/components/Button';
import {media} from '../../../styles/mixins';
import { useSizeRatio } from '../../../contexts/SizeRatioContext';
import {GlassBlock} from '../../../shared/components/GlassBlock';

const GameEndWrapper = styled.div`
    position: absolute;
    width: 100%;
    bottom: ${({ $ratio }) => $ratio * 80}px;
    left: 50%;
    transform: translateX(-50%);
    max-width: var(--content_sm);


    ${media.desktop`
        bottom: ${({ $ratio }) => $ratio * 60}px;
    `}

    z-index: 10;
`;

const GameEndContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: var(--spacing_x6);
`;

const Text = styled.p`
    margin: var(--spacing_x6) 0;
    font-size: var(--font_md);

    ${media.desktop`
        margin: 40px 0;
    `}
`;

const Title = styled.h3`
    font-size: calc( 20 / 14 * var(--font_md));
`;

const ButtonStyled = styled(Button)`
    background-color: rgba(255, 255, 255, 0.34);
    padding: ${({ $ratio }) => $ratio * 19}px ${({ $ratio }) => $ratio * 34}px;

    ${media.desktop`
        padding: 20px 40px;
    `}
`;


export const GameEnd = ({onClick}) => {
    const ratio = useSizeRatio();

    return (
        <GameEndWrapper $ratio={ratio}> 
            <GlassBlock $angle={135} brightness={1.1} saturation={1.2}>
                <GameEndContent>
                    <Title>Ты собрал все сердца!</Title>
                    <Text>
                        Дерево любви распустилось.{'\n'}Теперь ты знаешь, что для каждой компании значит любовь.
                    </Text>
                    <ButtonStyled
                        glassProps={{
                            $percentage: 5,
                            $angle: 125,
                        }}
                        $ratio={ratio}
                        onClick={onClick}
                    >
                        к призам
                    </ButtonStyled>
                </GameEndContent>
            </GlassBlock>
        </GameEndWrapper>
    )
}