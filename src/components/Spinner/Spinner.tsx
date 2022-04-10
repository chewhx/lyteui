import React from 'react';
import { StyledSpinner } from './Spinner.styled';
import PropTypes from 'prop-types';
import { DefaultSizes } from '../../theme/types/DefaultSizes';
import { ThemeColorsType } from '../../theme/types/ThemeColors';

export type SpinnerProps = React.HTMLAttributes<HTMLSpanElement> & {
	size?: DefaultSizes;
	theme?: ThemeColorsType;
};

const propTypes = {};

const Spinner: React.FC<SpinnerProps> = React.forwardRef<
	HTMLSpanElement,
	SpinnerProps
>((props, ref) => {
	return <StyledSpinner {...props} ref={ref} />;
});

Spinner.displayName = 'Spinner';
Spinner.propTypes = propTypes;
export default Spinner;
