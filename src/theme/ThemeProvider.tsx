import React from 'react';
import {
	ThemeProvider as SCThemeProvider,
	createGlobalStyle,
} from 'styled-components';
import { BootstrapThemeColors } from './constants/BootstrapThemeColors';

const theme = {
	colors: {
		primary: BootstrapThemeColors.primary,
		secondary: BootstrapThemeColors.secondary,
		success: BootstrapThemeColors.success,
		info: BootstrapThemeColors.info,
		warning: BootstrapThemeColors.warning,
		danger: BootstrapThemeColors.danger,
		light: BootstrapThemeColors.light,
		dark: BootstrapThemeColors.dark,
	},
	fontFamily: 'Poppins',
};

const FontFamily = createGlobalStyle`
  body {
    font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto,
    'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }
`;

const ThemeProvider: React.FC = ({ children }) => {
	return (
		<SCThemeProvider theme={theme}>
			<FontFamily />
			{children}
		</SCThemeProvider>
	);
};

export default ThemeProvider;
