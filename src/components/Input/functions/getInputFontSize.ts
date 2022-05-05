import { InputFontSize } from '../Input.enum';
import { InputFontSize as InputFontSizeType } from '../Input.types';

export default (size: InputFontSizeType) =>
	size ? InputFontSize[size] : InputFontSize.md;
