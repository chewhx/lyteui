import { AvatarSizes } from '../Avatar.enum';
import { AvatarSizes as AvatarSizesTypes } from '../Avatar.types';

export default (size: AvatarSizesTypes) => {
	if (size) {
		return `
    width: ${AvatarSizes[size]};
    height: ${AvatarSizes[size]};
    `;
	}
	return `
  width: ${AvatarSizes.md};
  height: ${AvatarSizes.md};
  `;
};
