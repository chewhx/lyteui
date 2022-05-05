import React from 'react';
import { StyledUnStyledButton } from './UnstyledButton.styled';
import { ButtonSize } from './UnstyledButton.types';
import PropTypes from 'prop-types';

export type UnstyledButtonProps = React.DOMAttributes<HTMLButtonElement> &
	React.HTMLAttributes<HTMLButtonElement> & {
		size?: ButtonSize;
		fullWidth?: boolean;
	};

const defaultProps = {
	size: 'md' as ButtonSize,
};

const propTypes = {
	size: PropTypes.oneOf<ButtonSize>([]),
};

const UnstyledButton: React.FC<UnstyledButtonProps> = React.forwardRef<
	HTMLButtonElement,
	UnstyledButtonProps
>(({ children, ...rest }, ref) => {
	return (
		<StyledUnStyledButton {...rest} ref={ref}>
			{children}
		</StyledUnStyledButton>
	);
});

UnstyledButton.displayName = 'UnstyledButton';
UnstyledButton.defaultProps = defaultProps;
UnstyledButton.propTypes = propTypes;
export default UnstyledButton;
