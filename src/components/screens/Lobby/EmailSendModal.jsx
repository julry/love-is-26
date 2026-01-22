import styled from "styled-components";
import { ModalWrapper } from "../../../shared/components/Modal";
import { GlassBlock } from "../../../shared/components/GlassBlock";
import { media } from "../../../styles/mixins";
import { Button } from "../../../shared/components/Button";

const ModalWrapperStyled = styled(ModalWrapper)`
    padding: var(--spacing_x3);
`;


const Content = styled.div`
    text-align: center;
    height: auto;
    flex: 0;
    padding: var(--spacing_x6);
    white-space: pre-wrap;
    ${media.desktop`
        padding: 52px 88px;
    `}
`;


const ContentWrapper = styled.div`
    width: 100%;

    ${media.tablet`
            max-width: var(--content_sm);
    `}

    ${media.desktop`
        max-width: 600px;
    `}
`;

const ButtonStyled = styled(Button)`
    background-color: rgba(255, 255, 255, 0.34);
    padding: var(--spacing_x4);

    ${media.desktop`
        padding: 33px 40px;
    `}
`;

const Text = styled.p`
    margin-bottom: var(--spacing_x6);
    font-size: calc( 16 / 14 * var(--font_md));
    font-weight: 500;

    ${media.desktop`
        margin: 40px 0;
        font-size: 27px;
    `}
`;

export const EmailSendModal = ({onClose}) => (
    <ModalWrapperStyled>
        <ContentWrapper>
            <GlassBlock $angle={125} brightness={1.1} saturation={1.2} elasticity={1.5}>
                <Content>
                    <Text>
                        Твоя почта отправлена.{'\n'}
                        Жди результатов розыгрыша на почте до 8 марта
                    </Text>
                    <ButtonStyled onClick={onClose}>вернуться к дереву</ButtonStyled>
                </Content>
            </GlassBlock>
        </ContentWrapper>
    </ModalWrapperStyled>
)