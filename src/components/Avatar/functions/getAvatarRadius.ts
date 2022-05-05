import { AvatarRadiusSizes } from '../Avatar.enum';
import { AvatarRadiusSizes as AvatarRadiusSizesType } from '../Avatar.types';

export default (radius: AvatarRadiusSizesType) =>
	radius ? AvatarRadiusSizes[radius] : AvatarRadiusSizes.md;
