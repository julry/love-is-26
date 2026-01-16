import {useEffect, useMemo} from "react";
import styled from 'styled-components';
import { preloadImages } from "../constants/images";
import { useProgress } from "../contexts/ProgressContext";
import { useImagePreloader } from "../hooks/useImagePreloader.jsx";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 100%;
`;

export function ScreenContent() {
    const {screen: Screen, currentScreen} = useProgress();

    useImagePreloader(preloadImages);

    return Screen && (
            <AnimatePresence>
                <Wrapper
                    key={currentScreen}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.3
                    }}
                >
                    <Screen />
                </Wrapper>
            </AnimatePresence>
    )
}