import {createContext, useCallback, useContext, useLayoutEffect, useState} from 'react'
import { getSizeRatio } from "../utils/getSizeRatio";
import { useResizeObserver } from '../hooks/useResizeObserver';

const INITIAL_STATE = 1

const SizeRatioContext = createContext(INITIAL_STATE)

const TARGET_WIDTH_DESKTOP = 1440;
const TARGET_WIDTH = 365;

const TARGET_HEIGHT_DESKTOP = 1024;
const TARGET_HEIGHT = 667;

export function SizeRatioContextProvider(props) {
    const {children, target} = props

    const [sizeRatio, setSizeRatio] = useState(INITIAL_STATE);

    const calculateSizeRatio = useCallback(() => {
        const width = target?.current?.clientWidth;
        const height = target?.current?.clientHeight;

        const isLandscape = width > height;

        const targetWidth = isLandscape ? TARGET_WIDTH_DESKTOP : TARGET_WIDTH;
        const targetHeight = isLandscape ? TARGET_HEIGHT_DESKTOP : TARGET_HEIGHT;

        setSizeRatio(getSizeRatio(width, height, targetWidth, targetHeight))
    }, [target])

    useLayoutEffect(() => {
        calculateSizeRatio();
    }, [calculateSizeRatio])

    useResizeObserver(target, { onResize: calculateSizeRatio });

    return (
        <SizeRatioContext.Provider value={sizeRatio}>
            {typeof children === 'function' ? children(sizeRatio) : children}
        </SizeRatioContext.Provider>
    )
}

export function useSizeRatio() {
    return useContext(SizeRatioContext)
}
