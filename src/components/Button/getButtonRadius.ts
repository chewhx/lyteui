import { ButtonRadius } from './Button.enum';
import { ButtonRadius as ButtonRadiusType } from './Button.types';

export default (radiusSize: ButtonRadiusType) =>
	radiusSize ? ButtonRadius[radiusSize] : ButtonRadius.md;
