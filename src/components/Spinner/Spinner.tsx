import React from 'react';
import { StyledSpinner } from './Spinner.styled';
import PropTypes from 'prop-types';
import { SpinnerSizes } from './Spinner.types';
import { ThemeColorsType } from '../../theme/colors/ThemeColors.type';

export type SpinnerProps = Omit<
	React.HTMLAttributes<HTMLSpanElement>,
	'color' | 'size'
> & {
	/**Adjusts overall size */
	size?: SpinnerSizes;
	/**Color the loader border according to theme colors */
	color?: ThemeColorsType;
};

const propTypes = {
	size: PropTypes.oneOf<SpinnerSizes>([]),
	color: PropTypes.oneOf<ThemeColorsType>([]),
};

const defaultProps = {
	size: 'md' as SpinnerSizes,
	color: 'primary' as ThemeColorsType,
};

const Spinner: React.FC<SpinnerProps> = React.forwardRef<
	HTMLSpanElement,
	SpinnerProps
>((props, ref) => {
	return <StyledSpinner {...props} ref={ref} />;
});

Spinner.displayName = 'Spinner';
Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;
export default Spinner;
