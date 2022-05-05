import { AvatarFontSizes } from '../Avatar.enum';
import { AvatarSizes as AvatarSizesTypes } from '../Avatar.types';

export default (size: AvatarSizesTypes) =>
	size ? AvatarFontSizes[size] : AvatarFontSizes.md;
