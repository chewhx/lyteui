import React from 'react';
import ThemeProvider from '../src/theme/ThemeProvider';
import pretty from 'pretty';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	layout: 'fullscreen',
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	docs: {
		transformSource: (input) => pretty(input),
	},
};
