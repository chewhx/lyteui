import React, {
	DOMAttributes,
	FC,
	HTMLAttributes,
	InputHTMLAttributes,
} from 'react';
import { Form, FormControlProps } from 'react-bootstrap';
import PropTypes from 'prop-types';

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

const getRadiusValue = (
	enumType: 'sm' | 'lg',
	enumKey?: keyof typeof LyteRadiusForSm | keyof typeof LyteRadiusForLg
) => {
	if (enumType === 'lg') {
		return LyteRadiusForLg[enumKey || 'xs'];
	} else {
		return LyteRadiusForSm[enumKey || 'xs'];
	}
};

export type RadiusValues = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type InputProps = FormControlProps &
	HTMLAttributes<HTMLInputElement> &
	Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
	Omit<DOMAttributes<HTMLInputElement>, 'radius'> & {
		radius?: RadiusValues;
		ref?: React.Ref<HTMLInputElement>;
	};

const defaultProps = {};

const propTypes = {};

const Input: FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>(
	({ radius = 'sm' as InputProps['radius'], ...rest }, ref) => {
		return (
			<Form.Control
				{...rest}
				size={rest.size}
				style={{
					...rest.style,
					borderRadius: getRadiusValue(rest.size || 'sm', radius),
				}}
				ref={ref}
			/>
		);
	}
);

Input.displayName = 'Input';
Input.defaultProps = defaultProps;
Input.propTypes = propTypes;

export default Input;
