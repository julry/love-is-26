import { css } from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH, WIDE_DESKTOP_WIDTH } from "../constants";

export const media = {
    tablet: (...args) => css`
        @media (min-width: ${TABLET_WIDTH}px) {
            ${css(...args)}
        }
    `,
    desktop: (...args) => css`
        @media (min-width: ${DESKTOP_WIDTH}px) {
            ${css(...args)}
        }
    `,
    desktopWide: (...args) => css`
        @media (min-width: ${WIDE_DESKTOP_WIDTH}px) {
            ${css(...args)}
        }
    `,
};
