import React from 'react';
import PropTypes from 'prop-types';
import getInitialsFromName from '../../utils/getInitialsFromName';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { DefaultSizes } from '../../theme/types/DefaultSizes';
import { StyledAvatar, StyledAvatarImg } from './Avatar.styled';
import { ThemeColorsType } from '../../theme/types/ThemeColors';

export type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
	/**Adjusts overall size */
	size?: DefaultSizes;
	/**Adjusts the border-radius */
	radius?: DefaultSizes;
	/**Change background to a theme color */
	theme?: ThemeColorsType;
	/**URL of profile image  */
	img?: string;
};

const defaultProps = {
	size: 'md' as DefaultSizes,
	theme: 'primary' as ThemeColorsType,
};

const propTypes = {
	size: PropTypes.oneOf<DefaultSizes>([]),
	radius: PropTypes.oneOf<DefaultSizes>([]),
	theme: PropTypes.oneOf<ThemeColorsType>([]),
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
