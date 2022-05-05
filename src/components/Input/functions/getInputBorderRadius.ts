import { InputRadius } from '../Input.enum';
import { InputRadiusSize } from '../Input.types';

export default (radius: InputRadiusSize) =>
	radius ? InputRadius[radius] : InputRadius.md;
