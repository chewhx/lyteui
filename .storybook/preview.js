import React from 'react';
import ThemeProvider from '../src/theme/ThemeProvider';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	layout: 'fullscreen',
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [(Story) => <ThemeProvider>{Story()}</ThemeProvider>];
