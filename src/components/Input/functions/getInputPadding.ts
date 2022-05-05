import { InputPadding } from '../Input.enum';
import { InputPadding as InputPaddingType } from '../Input.types';

export default (inputSize: InputPaddingType) =>
	inputSize ? InputPadding[inputSize] : InputPadding.md;
