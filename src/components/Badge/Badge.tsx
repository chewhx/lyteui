import React from 'react';
import PropTypes from 'prop-types';
import { StyledBadge } from './Badge.styled';
import { ThemeColorsType } from '../../theme/types/ThemeColors';
import { DefaultSizes } from '../../theme/types/DefaultSizes';

type BadgeVariant = 'filled' | 'outline';

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
	/**Color with theme colors */
	theme?: ThemeColorsType;
	/**Render badge in pill shape */
	pill?: boolean;
	/**Adjust badge size */
	size?: DefaultSizes;
	/**Color text in badge with theme colors */
	textTheme?: ThemeColorsType;
	/**Renders a different variant */
	variant?: BadgeVariant;
};

const propTypes = {
	theme: PropTypes.oneOf<ThemeColorsType>([]),
	pill: PropTypes.bool,
	size: PropTypes.oneOf<DefaultSizes>([]),
	textTheme: PropTypes.oneOf<ThemeColorsType>([]),
	variant: PropTypes.oneOf<BadgeVariant>([]),
};

const defaultProps = {
	theme: 'primary' as ThemeColorsType,
	variant: 'filled' as BadgeVariant,
};

const Badge: React.FC<BadgeProps & React.DOMAttributes<HTMLSpanElement>> =
	React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
		console.log(props);
		return <StyledBadge {...props} ref={ref} />;
	});

Badge.displayName = 'Badge';
Badge.defaultProps = defaultProps;
Badge.propTypes = propTypes;
export default Badge;
