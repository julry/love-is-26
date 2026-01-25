import styled from 'styled-components';
import { Button } from '../../../shared/components/Button';
import { media } from '../../../styles/mixins';
import { useSizeRatio } from '../../../contexts/SizeRatioContext';
import { GlassBlock } from '../../../shared/components/GlassBlock';
import { ModalWrapper } from '../../../shared/components/Modal';
import { useState } from 'react';
import { emailRegExp } from '../../../constants/regexp';
import { useProgress } from '../../../contexts/ProgressContext';

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

    transition: opacity 0.3s;
    opacity: ${({$disabled}) => $disabled ? 0.6 : 1};
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
`;

const GlassBlockStyled = styled(GlassBlock)`
    ${({$isError}) => $isError ? '&::before {background-color: red;padding: 2px;}' : ''};
`;

const AgreedIcon = styled.div`
    position: absolute;
    border-radius: 20px;
    top: 43%;
    left: 33%;
    width: 9px;
    height: 2px;
    background-color: #FFF6EF;
    transform: rotate(-60deg);

    &::after {
        content: '';
       position: absolute;
       border-radius: 20px;
       top: -100%;
       left: -20%;
       height: 2px;
       width: 6px;
       transform: rotate(-85deg);
       background-color: white;
    }
`;

export const Form = ({onClick}) => {
    const {registrateEmail} = useProgress();
    const [email, setEmail] = useState('');
    const [isAgreed, setIsAgreed] = useState(true);
    const [isMailsAgreed, setIsMailsAgreed] = useState(true);
    const [isSending, setIsSending] = useState(false);
    const [isCorrect, setIsCorrect] = useState(true);
    
    const ratio = useSizeRatio();
    const isButtonDisabled = !isAgreed || !email || !isCorrect || isSending;

    const handleSubmit = async () => {
        if (isButtonDisabled) return;
        setIsSending(true);
        await registrateEmail({email, isMailsAgreed});
        onClick();
    }

    const handleBlur = () => {
        if (email.match(emailRegExp) || !email) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    const handleChange = (e) => {
        if (isSending) return;
        setIsCorrect(true);
        setEmail(e.target.value);
    };

    return (
        <ModalWrapperStyled>
            <FormWrapper>
                <GlassBlock $angle={135} brightness={1.1} saturation={1.2}>
                    <GameEndContent>
                        <Title>Оставь почту, чтобы принять участие в розыгрыше крутых призов!</Title>
                        <GlassBlockStyled 
                            $angle={95} 
                            $isError={!isCorrect}
                        >
                            <Input 
                                type="email" 
                                id="email"
                                value={email} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                                placeholder='email@email.ru' 
                            />
                        </GlassBlockStyled>
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
                                        {isAgreed && (<AgreedIcon />)}
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
                                        {isMailsAgreed && (<AgreedIcon />)}
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
                            onClick={handleSubmit}
                            $disabled={isButtonDisabled}
                        >
                            отправить
                        </ButtonStyled>
                    </GameEndContent>
                </GlassBlock>
            </FormWrapper>
        </ModalWrapperStyled>
    )
}