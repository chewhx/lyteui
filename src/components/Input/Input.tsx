import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './Input.styled';
import { InputSize, InputRadiusSize } from './Input.types';

export type InputProps = React.HTMLAttributes<HTMLInputElement> &
	React.DOMAttributes<HTMLInputElement> & {
		/**
		 * Adjusts radius of input field
		 */
		radius?: InputRadiusSize;
		/**
		 * Readonly format
		 */
		readOnly?: boolean;
		/**
		 * Disabled mode
		 */
		disabled?: boolean;
		/**
		 * Plain text format
		 */
		plaintext?: boolean;
		/**
		 * Adjust size of input field
		 */
		size?: InputSize;
		/**
		 * Set input field to 100% width
		 */
		fullWidth?: boolean;
		value?: string | string[] | number;
		onChange?: React.ChangeEventHandler<HTMLInputElement>;
		type?: string;
		isValid?: boolean;
		isInvalid?: boolean;
		inputSize?: InputSize;
		htmlSize?: number;
		_ref?: React.Ref<HTMLInputElement>;
	};

const defaultProps = {
	size: 'md' as InputSize,
	radius: 'md' as InputRadiusSize,
	isValid: false,
};

const propTypes = {
	radius: PropTypes.oneOf<InputRadiusSize>([]),
	readOnly: PropTypes.bool,
	disabled: PropTypes.bool,
	plaintext: PropTypes.bool,
	size: PropTypes.oneOf<InputSize>([]),
	fullWidth: PropTypes.bool,
};

const Input: React.FC<InputProps> = React.forwardRef<
	HTMLInputElement,
	InputProps
>(({ size, htmlSize, readOnly, _ref, disabled, ...rest }, ref) => {
	return (
		<StyledInput
			htmlSize={htmlSize}
			inputSize={size}
			disabled={readOnly || disabled}
			{...rest}
			ref={_ref || ref}
		/>
	);
});

Input.displayName = 'Input';
Input.defaultProps = defaultProps;
Input.propTypes = propTypes;

export default Input;
