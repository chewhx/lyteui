import React from 'react';
import PropTypes from 'prop-types';
import getInitialsFromName from '../../utils/getInitialsFromName';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { LyteSizes } from '../../theme/types/LyteSizes';
import { StyledAvatar, StyledAvatarImg } from './Avatar.styled';
import { BootstrapThemeColorsType } from '../../theme/constants/BootstrapThemeColors';

export type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
	avatarSize?: LyteSizes;
	radiusSize?: LyteSizes;
	variant?: BootstrapThemeColorsType;
	img?: string;
};

const defaultProps = {
	avatarSize: 'md' as LyteSizes,
};

const propTypes = {
	avatarSize: PropTypes.oneOf<LyteSizes>(['xs', 'sm', 'md', 'lg', 'xl']),
	radiusSize: PropTypes.oneOf<LyteSizes>(['xs', 'sm', 'md', 'lg', 'xl']),
	variant: PropTypes.oneOf<BootstrapThemeColorsType>([
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'light',
		'dark',
	]),
};

const Avatar: React.FC<AvatarProps> = React.forwardRef<
	HTMLDivElement,
	AvatarProps
>(({ radiusSize, img, children, ...rest }, ref) => {
	const output = !children ? (
		<FontAwesomeIcon icon={faCircleUser} />
	) : typeof children === 'string' ? (
		getInitialsFromName(children)
	) : (
		children
	);

	return (
		<StyledAvatar radiusSize={radiusSize} {...rest} ref={ref}>
			{!img ? output : <StyledAvatarImg src={img} />}
		</StyledAvatar>
	);
});

Avatar.displayName = 'Avatar';
Avatar.defaultProps = defaultProps;
Avatar.propTypes = propTypes;

export default Avatar;
