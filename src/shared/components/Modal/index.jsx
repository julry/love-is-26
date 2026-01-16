import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalWrapper = styled(motion.div)`
    position: absolute;
    z-index: 20;
    inset: 0;
    background: rgba(32, 32, 32, 0.5);
    backdrop-filter: blur(3.5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
