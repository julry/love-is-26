import styled from 'styled-components';
import { Button } from '../../../shared/components/Button';
import { media } from '../../../styles/mixins';
import { useSizeRatio } from '../../../contexts/SizeRatioContext';
import { GlassBlock } from '../../../shared/components/GlassBlock';
import { ModalWrapper } from '../../../shared/components/Modal';
import { useState } from 'react';

const ModalWrapperStyled = styled(ModalWrapper)`
    padding: var(--spacing_x3);
`;

const GameEndContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: auto;
    flex: 0;
    padding: var(--spacing_x6);
`;

const FormWrapper = styled.div`
    width: 100%;

    ${media.tablet`
        max-width: var(--content_sm);
    `}

    ${media.desktop`
        max-width: 600px;
    `}
`;

const Title = styled.h3`
    font-size: calc( 20 / 14 * var(--font_md));
    margin-bottom: var(--spacing_x6);

    ${media.desktop`
        margin-bottom: 40px;
    `}
`;

const ButtonStyled = styled(Button)`
    background-color: rgba(255, 255, 255, 0.34);
    padding: ${({ $ratio }) => $ratio * 19}px ${({ $ratio }) => $ratio * 34}px;

    ${media.desktop`
        padding: 33px 40px;
    `}
`;


const Input = styled.input`
    position: relative;
    background: transparent;
    outline: none;
    border: none;

    height: 40px;
    width: 100%;
    border-radius: 20px;
    padding: 0 var(--spacing_x3);
    font-size: var(--font_md);

    &::placeholder {
        color: #FFF6EF;
    }

    ${media.tablet`
       font-size: 16px;
    `}

    ${media.desktop`
       font-size: 24px;
       height: 60px;
    `}
`;


const CheckBoxesWrapper = styled.div`
    width: 100%;
    margin: var(--spacing_x6) 0;

    ${media.tablet`
        margin: 40px 0;
    `}
`;

const InputRadioButton = styled.input`
    display: none;
`;

const IconWrapper = styled.div`
    margin-top: calc(var(--spacing_x1) / 5 * -3);
    margin-right: var(--spacing_x2);

    ${media.desktop`
        margin-top: -2px;
        margin-right: 20px;
    `}

`;

const RadioIconStyled = styled.div`
    position: relative;
    flex-shrink: 0;
    width: ${({ $ratio }) => $ratio * 17}px;
    height: ${({ $ratio }) => $ratio * 17}px;
`;

const RadioButtonLabel = styled.label`
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    font-size: ${({ $ratio }) => $ratio * 11}px;
    color: var(--color-black);
    width: 100%;
    text-align: left;

    ${media.tablet`
       font-size: 13px;
    `}

    ${media.desktop`
       font-size: 16px;

        & + &  {
            margin-top: 20px;
        }
    `}

    & + &  {
        margin-top: var(--spacing_x2);
    }

    & ${InputRadioButton}:checked + ${RadioIconStyled} {
        background: #7CDB01;
    }

    & ${InputRadioButton}:checked + ${RadioIconStyled}::after {
       content: '';
       position: absolute;
       border-radius: 20px;
       top: 47%;
       left: 21%;
       height: 2px;
       width: 4px;
       transform: rotate(45deg);
       background-color: white;
    }

    & ${InputRadioButton}:checked + ${RadioIconStyled}::before {
       content: '';
       position: absolute;
       border-radius: 20px;
       top: 40%;
       left: 33%;
       width: 7px;
       height: 2px;
       background-color: white;
       transform: rotate(-40deg);
    }
`;

export const Form = ({onClick}) => {
    const [isAgreed, setIsAgreed] = useState(false);
    const [isMailsAgreed, setIsMailsAgreed] = useState(false);
    const ratio = useSizeRatio();

    return (
        <ModalWrapperStyled>
            <FormWrapper>
                <GlassBlock $angle={135} brightness={1.1} saturation={1.2} elasticity={1.5}>
                    <GameEndContent>
                        <Title>Оставь почту, чтобы принять участие в розыгрыше крутых призов!</Title>
                        <GlassBlock $angle={95}>
                            <Input placeholder='email@email.ru' />
                        </GlassBlock>
                        <CheckBoxesWrapper>
                            <RadioButtonLabel $ratio={ratio}>
                                <InputRadioButton
                                    type="checkbox"
                                    value={isAgreed}
                                    checked={isAgreed}
                                    onChange={() => setIsAgreed((prevAgreed) => !prevAgreed)}
                                />
                                <IconWrapper>
                                    <GlassBlock $angle={125} $percentage={2} borderRadius={5}>
                                        <RadioIconStyled $ratio={ratio} />
                                    </GlassBlock>
                                </IconWrapper>
                                <span>
                                    Я даю согласие на{"\u00A0"}
                                    <a
                                        href={"https://fut.ru/personal_data_agreement"}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        обработку
                                    </a>{" "}
                                    и{"\u00A0"}
                                    <a
                                        href={"https://fut.ru/personal_data_transfer_agreement"}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        передачу
                                    </a>{" "}
                                    моих персональных данных и соглашаюсь с{" "}
                                    <a
                                        href={'https://fut.ru/user-agreement'}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Политикой обработки персональных данных
                                    </a>
                                    , а также с{"\u00A0"}
                                    <a
                                        href={'/'}
                                        target="_blank"
                                        rel="noreferrer"
                                    >правилами проведения акции</a>.
                                </span>
                            </RadioButtonLabel>
                            <RadioButtonLabel $ratio={ratio}>
                                <InputRadioButton
                                    type="checkbox"
                                    value={isMailsAgreed}
                                    checked={isMailsAgreed}
                                    onChange={() => setIsMailsAgreed((prevAgreed) => !prevAgreed)}
                                />
                                <IconWrapper>
                                    <GlassBlock $angle={125} $percentage={2} borderRadius={5}>
                                        <RadioIconStyled $ratio={ratio} />
                                    </GlassBlock>
                                </IconWrapper>
                                <span>
                                    Хочу ловить{"\u00A0"}
                                    <a
                                        href={"https://fut.ru/adv_messages_agreement"}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        персональные стажировки от топ‑компаний в рекламной рассылке.
                                    </a>
                                </span>
                            </RadioButtonLabel>

                        </CheckBoxesWrapper>
                        <ButtonStyled
                            glassProps={{
                                $percentage: 5,
                                $angle: 125,
                            }}
                            $ratio={ratio}
                            onClick={onClick}
                        >
                            отправить
                        </ButtonStyled>
                    </GameEndContent>
                </GlassBlock>
            </FormWrapper>
        </ModalWrapperStyled>
    )
}