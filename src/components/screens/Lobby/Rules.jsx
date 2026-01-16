import { ModalWrapper } from "../../../shared/components/Modal";
import { RulesContent } from "./RulesContent";

export const Rules = ({onClose}) => (
    <ModalWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <RulesContent onClick={onClose}/>
    </ModalWrapper>
)