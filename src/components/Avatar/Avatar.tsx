import React from 'react';
import PropTypes from 'prop-types';
import getInitialsFromName from '../../utils/getInitialsFromName';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { StyledAvatar, StyledAvatarImg } from './Avatar.styled';
import { ThemeColorsType } from '../../theme/colors/ThemeColors.type';
import { AvatarSizes, AvatarRadiusSizes } from './Avatar.types';

export type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
	/**Adjusts overall size */
	size?: AvatarSizes;
	/**Adjusts the border-radius */
	radius?: AvatarRadiusSizes;
	/**Change background to a theme color */
	bg?: ThemeColorsType;
	/**URL of profile image  */
	img?: string;
};

const defaultProps = {
	size: 'md' as AvatarSizes,
	radius: 'xl' as AvatarRadiusSizes,
	bg: 'primary' as ThemeColorsType,
};

const propTypes = {
	size: PropTypes.oneOf<AvatarSizes>([]),
	radius: PropTypes.oneOf<AvatarRadiusSizes>([]),
	bg: PropTypes.oneOf<ThemeColorsType>([]),
	img: PropTypes.string,
};

const Avatar: React.FC<AvatarProps> = React.forwardRef<
	HTMLDivElement,
	AvatarProps
>(({ img, children, ...rest }, ref) => {
	const output = !children ? (
		<FontAwesomeIcon icon={faCircleUser} />
	) : typeof children === 'string' ? (
		getInitialsFromName(children)
	) : (
		children
	);

	return (
		<StyledAvatar {...rest} ref={ref}>
			{!img ? output : <StyledAvatarImg src={img} />}
		</StyledAvatar>
	);
});

Avatar.displayName = 'Avatar';
Avatar.defaultProps = defaultProps;
Avatar.propTypes = propTypes;

export default Avatar;
