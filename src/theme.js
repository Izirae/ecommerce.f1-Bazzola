import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const styles = {
global: props => ({
    body: {
    color: mode('black', 'white')(props),
    bg: mode('gray.50', '#151025')(props),
    },
}),
};

const components = {

Drawer: {
    // setup light/dark mode component defaults
    baseStyle: props => ({
    dialog: {
        bg: mode('white', '#141214')(props),
    },
    }),
},
};

const theme = extendTheme({
    components,
    styles,
});

export default theme;