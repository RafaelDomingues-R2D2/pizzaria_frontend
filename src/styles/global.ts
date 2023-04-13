import { globalCss } from ".";

export const globalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0,
        outline: 0,
        boxSizing: "borderBox",
    },
    
    body: {
        backgroundColor: "$dark700",
        color: "$gray100",
        "-weibkit-font-smoothing": "antialiased",
    },

    "body, input, textarea, select, button": {
        fontFamily: "Roboto",
        fontWeight: 400,
    },

    button: {
        cursor: "pointer",
    },

    a: {
        color: "inherit",
        textDecoration: "none",
    },

    '@media (maxWidth: 720px)': {
        html: {
          fontSize: "87.5%", // vai gerar 14px;
        },
      },
      
    '@media (maxWidth: 1080px)': {
    html: {
        fontSize: "93.75%", // vai gerar 15px;
    },
    },
    
});