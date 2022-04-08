import { colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';
import makePalette from '../utils/makePalette';
extend([mixPlugin]);

const themeColorNames = [
	'primary',
	'secondary',
	'success',
	'info',
	'warning',
	'danger',
	'light',
	'dark',
];

const primaryColorName = [
	'primary-100',
	'primary-200',
	'primary-300',
	'primary-400',
	'primary-500',
	'primary-600',
	'primary-700',
	'primary-800',
	'primary-900',
];

type ThemeColorNames = {
	primary: string;
	secondary: string;
	success: string;
	info: string;
	warning: string;
	danger: string;
	light: string;
	dark: string;
};

type PaletteColorNames = {
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
	800: string;
	900: string;
};

type Colors = {
	theme: ThemeColorNames;
	palette: {
		primary: PaletteColorNames;
		secondary: PaletteColorNames;
		success: PaletteColorNames;
		info: PaletteColorNames;
		warning: PaletteColorNames;
		danger: PaletteColorNames;
		light: PaletteColorNames;
		dark: PaletteColorNames;
	};
};

export default function useColors(newTheme: Partial<ThemeColorNames>): Colors {
	const styles: CSSStyleDeclaration = getComputedStyle(document.body);
	const array = themeColorNames.map((name) => [
		name,
		styles.getPropertyValue(`--bs-${name}`),
	]);

	const theme: ThemeColorNames = Object.fromEntries(array);
	const primary: PaletteColorNames = makePalette(theme.primary);
	const secondary: PaletteColorNames = makePalette(theme.secondary);
	const success: PaletteColorNames = makePalette(theme.success);
	const info: PaletteColorNames = makePalette(theme.info);
	const warning: PaletteColorNames = makePalette(theme.warning);
	const danger: PaletteColorNames = makePalette(theme.danger);
	const light: PaletteColorNames = makePalette(theme.light);
	const dark: PaletteColorNames = makePalette(theme.dark);

	const palette = {
		primary,
		secondary,
		success,
		info,
		warning,
		danger,
		light,
		dark,
	};

	return { theme, palette };
}
