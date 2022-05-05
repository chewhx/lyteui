import { ButtonPadding } from '../UnstyledButton.enum';
import { ButtonSize } from '../UnstyledButton.types';

export default (size: ButtonSize) =>
	size ? ButtonPadding[size] : ButtonPadding.md;
