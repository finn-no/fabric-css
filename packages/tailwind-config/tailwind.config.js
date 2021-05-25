const { colors: colorSpec } = require('./colors');
const focusRing = require('./focus-ring');
const headings = require('./headings');

const colors = Object.entries(colorSpec).reduce((acc, [colorName, colorObjectOrString]) => {
    acc[colorName] = {};
    if (colorObjectOrString === Object(colorObjectOrString))
        Object.keys(colorObjectOrString).forEach(
            (level) => (acc[colorName][level] = `var(--f-${colorName.toLowerCase()}-${level})`),
        );
    else acc[colorName] = `var(--f-${colorName})`;
    return acc;
}, {});

module.exports = {
    darkMode: false,
    plugins: [focusRing, headings],
    corePlugins: {
        // Backgrounds
        gradientColorStops: false,
        // Layout
        boxSizing: false,
        // Typography
        fontFamily: false,
        letterSpacing: false,
        placeholderColor: false,
        placeholderOpacity: false,
        opacity: false,
        backgroundOpacity: false,
        borderOpacity: false,
        divideOpacity: false,
        ringOpacity: false,
        textOpacity: false,
        translate: false,
        // SVG
        fill: false,
        stroke: false,
        strokeWidth: false,
    },
    theme: {
        spacing: {
            0: '0',
            1: '1px',
            2: '2px',
            4: '4px',
            6: '6px',
            8: '8px',
            10: '10px',
            12: '12px',
            14: '14px',
            16: '16px',
            20: '20px',
            24: '24px',
            28: '28px',
            32: '32px',
            40: '40px',
            44: '44px',
            48: '48px',
            56: '56px',
            64: '64px',
            80: '80px',
            96: '96px',
            112: '112px',
            128: '128px',
            144: '144px',
        },
        lineHeight: {
            16: '16px',
            18: '18px',
            22: '22px',
            24: '24px',
            28: '28px',
            34: '34px',
            41: '41px',
        },
        maxWidth: (theme, { breakpoints }) => ({
            none: 'none',
            0: '0px',
            '1/4': '25%',
            '1/3': '33.3%',
            '1/2': '50%',
            '2/3': '66.6%',
            '3/4': '75%',
            full: '100%',
            min: 'min-content',
            max: 'max-content',
            ...breakpoints(theme('screens')),
        }),
        borderRadius: {
            0: '0px',
            2: '2px',
            4: '4px',
            8: '8px',
            16: '16px',
            full: '9999px',
        },
        colors,
        // Typography
        textColor: {
            ...colors,
            primary: colors.gray['700'],
            secondary: colors.gray['500'],
            danger: colors.red['600'],
        },
        fontFamily: {
            sans: ['Finntype', 'Arial', 'Helvetica', 'sans-serif'],
        },
        fontSize: {
            12: ['12px', '16px'],
            14: ['14px', '18px'],
            16: ['16px', '22px'],
            22: ['22px', '28px'],
            28: ['28px', '34px'],
            34: ['34px', '41px'],
        },
        fontWeight: {
            normal: 300,
            bold: 700,
        },
        // Effects
        boxShadow: {
            'light-2': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            'light-1': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            'light-3': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24)',
            2: '0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23)',
            3: '0 10px 20px rgba(0, 0, 0, .19), 0 6px 6px rgba(0, 0, 0, .23)',
            4: '0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22)',
            none: 'none',
        },
        screens: {
            // => @media (min-width: 480) { ... }
            // sm hits typical mobiles in landscape and up
            sm: '480px',
            // md hits tablets and up
            md: '768px',
            // lg hits full desktop-width and up
            lg: '990px',
        },
    },
    // Disable response variants for these
    variants: {
        // Effects
        extend: {
            backgroundColor: ['active'],
            borderColor: ['active'],
            textColor: ['active'],
        },
        animation: [],
        appearance: [],
        backgroundAttachment: [],
        backgroundClip: [],
        backgroundColor: ['hover', 'focus', 'group-hover'],
        backgroundImage: [],
        backgroundPosition: [],
        backgroundRepeat: [],
        backgroundSize: [],
        borderCollapse: [],
        borderColor: ['hover', 'focus', 'group-hover'],
        borderRadius: ['responsive'],
        boxShadow: [],
        clear: [],
        cursor: [],
        display: ['responsive'],
        divideColor: [],
        divideOpacity: [],
        divideStyle: [],
        divideWidth: [],
        flex: ['responsive'],
        flexDirection: ['responsive'],
        flexGrow: ['responsive'],
        flexShrink: ['responsive'],
        flexWrap: ['responsive'],
        float: [],
        maxWidth: [],
        // Typography
        fontStyle: [],
        fontSmoothing: [],
        fontVariantNumeric: [],
        lineHeight: [],
        listStylePosition: [],
        listStyleType: [],
        textTransform: [],
        // Interactivity
        margin: ['responsive'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: [],
        minWidth: ['responsive'],
        objectFit: [],
        objectPosition: [],
        order: ['responsive'],
        outline: [],
        overflow: [],
        overscrollBehavior: [],
        padding: ['responsive'],
        placeContent: ['responsive'],
        placeItems: ['responsive'],
        placeSelf: ['responsive'],
        pointerEvents: [],
        position: ['responsive'],
        resize: [],
        ringColor: [],
        ringOffsetColor: [],
        ringOffsetWidth: [],
        ringWidth: ['hover', 'focus'],
        rotate: [],
        scale: [],
        skew: [],
        space: ['responsive'],
        tableLayout: [],
        textAlign: ['responsive'],
        textColor: ['hover', 'focus', 'group-hover'],
        textDecoration: ['hover', 'focus'],
        textOverflow: [],
        textTransform: [],
        transform: [],
        transformOrigin: [],
        transitionDelay: [],
        transitionDuration: [],
        transitionProperty: [],
        transitionTimingFunction: [],
        translate: [],
        userSelect: [],
        verticalAlign: [],
        visibility: [],
        whitespace: [],
        width: ['responsive'],
        wordBreak: [],
        zIndex: [],
    },
};
