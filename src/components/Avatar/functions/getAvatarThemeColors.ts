import { DefaultThemeColors } from '../../../theme/colors/ThemeColors.enum';
import { ThemeColorsType } from '../../../theme/colors/ThemeColors.type';

export default (bg: ThemeColorsType) => {
	return `
  background-color: ${DefaultThemeColors[bg]};
  color: ${bg === 'light' ? DefaultThemeColors.dark : DefaultThemeColors.light};
  `;
};
