import React from 'react';
import { DefaultSizes } from '../../../theme/types/DefaultSizes';
import { StyledUnStyledButton } from './UnstyledButton.styled';

export type UnstyledButtonProps = React.DOMAttributes<HTMLButtonElement> &
	React.HTMLAttributes<HTMLButtonElement> & {
		size?: DefaultSizes;
		fullWidth?: boolean;
	};

const defaultProps = {};

const propTypes = {};

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
