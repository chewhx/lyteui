import { ButtonFontSize } from '../UnstyledButton.enum';
import { ButtonSize } from '../UnstyledButton.types';

export default (size: ButtonSize) =>
	size ? ButtonFontSize[size] : ButtonFontSize.md;
