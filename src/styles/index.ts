import { createStitches } from "@stitches/react";

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme
} = createStitches({
    theme: {
        colors: {
            white: "#FFF",
            black: "#000",

            dark900: "#101026",
            dark700: "#1D1D2E",

            gray100: "#8A8A8A",
            green900: "#3fffa3",
            red900: "#FF3F4B",
        },

        fontSizes: {
            xsl: '1rem',
            sl: '1.2rem',
            md: '1.6rem',
            lg: '2.4rem',
            xlg: '3.2rem',
            xxlg: '4.0rem'
        },
    }
});