import React from 'react';
import { Form, FormControlProps } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { StyledInput } from './Input.styled';
import { DefaultRadiusSizes } from '../../theme/types/DefaultRadiusSizes';
import { DefaultInputSizes } from '../../theme/types/DefaultInputSizes';

export enum LyteRadiusForSm {
	xs = '0.35rem',
	sm = '0.5rem',
	md = '0.75rem',
	lg = '1.0rem',
	xl = '1.25rem',
}

export enum LyteRadiusForLg {
	xs = '0.6rem',
	sm = '0.75rem',
	md = '1.0rem',
	lg = '1.25rem',
	xl = '1.5rem',
}

export type InputProps = React.HTMLAttributes<HTMLInputElement> &
	React.DOMAttributes<HTMLInputElement> & {
		radius?: DefaultRadiusSizes;
		readOnly?: boolean;
		disabled?: boolean;
		plaintext?: boolean;
		htmlSize?: number;
		size?: DefaultInputSizes;
		value?: string | string[] | number;
		onChange?: React.ChangeEventHandler<HTMLInputElement>;
		type?: string;
		isValid?: boolean;
		isInvalid?: boolean;
		inputSize?: DefaultInputSizes;
		fullWidth?: boolean;
		_ref?: React.Ref<HTMLInputElement>;
	};

const defaultProps = {
	size: 'md' as DefaultInputSizes,
	isValid: false,
};

const propTypes = {};

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
