import React from 'react';
import { StyledSpinner } from './Spinner.styled';
import PropTypes from 'prop-types';
import { LyteSizes } from '../../theme/types/LyteSizes';

export type SpinnerProps = React.HTMLAttributes<HTMLSpanElement> & {
	size?: LyteSizes;
};

const propTypes = {
	children: PropTypes.node,
};

const Spinner: React.FC<SpinnerProps> = React.forwardRef<
	HTMLSpanElement,
	SpinnerProps
>(({ children, ...rest }, ref) => {
	return (
		<StyledSpinner {...rest} ref={ref}>
			{children}
		</StyledSpinner>
	);
});

Spinner.displayName = 'Spinner';
Spinner.propTypes = propTypes;
export default Spinner;
