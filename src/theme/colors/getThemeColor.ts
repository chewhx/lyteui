import { DefaultThemeColors } from './ThemeColors.enum';
import { ThemeColorsType } from './ThemeColors.type';

export default (key: ThemeColorsType) =>
	key ? DefaultThemeColors[key] : DefaultThemeColors.primary;
