import { ThemeColorKeys } from '../theme/constants/ThemeColors';
import { ThemeColorsType } from '../theme/types/ThemeColors';

export default function (key: string): key is ThemeColorsType {
	return ThemeColorKeys.includes(key);
}
