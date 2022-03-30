import React, { FC, HTMLAttributes, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { FormLabelProps } from 'react-bootstrap';
import Input, { InputProps } from '../Input/Input';
import InputWrapper, { InputWrapperProps } from '../InputWrapper/InputWrapper';

export type NumberInputProps = InputProps & {
	id?: string;
	label?: ReactNode;
	labelProps?: FormLabelProps & HTMLAttributes<HTMLLabelElement>;
	description?: ReactNode;
	descriptionPosition?: 'bottom' | 'right';
	error?: ReactNode;
	required?: boolean;
	wrapperProps?: Omit<
		InputWrapperProps,
		| 'id'
		| 'label'
		| 'labelProps'
		| 'description'
		| 'descriptionPosition'
		| 'error'
		| 'required'
	>;
};

const defaultProps = {};

const propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	label: PropTypes.string,
	required: PropTypes.bool,
	error: PropTypes.string,
	description: PropTypes.string,
	min: PropTypes.number,
};

const NumberInput: FC<NumberInputProps> = React.forwardRef<
	HTMLInputElement,
	NumberInputProps
>(
	(
		{
			id,
			className,
			min,
			label,
			labelProps,
			required,
			description,
			descriptionPosition,
			wrapperProps,
			error,
			...rest
		},
		ref
	) => {
		const hasError = error ? true : false;

		return (
			<InputWrapper
				id={id}
				label={label}
				labelProps={labelProps}
				required={required}
				description={description}
				descriptionPosition={descriptionPosition}
				error={error}
				{...wrapperProps}
			>
				<Input
					{...rest}
					id={id}
					type="number"
					isInvalid={hasError}
					ref={ref}
				/>
			</InputWrapper>
		);
	}
);

NumberInput.displayName = 'TextInput';
NumberInput.defaultProps = defaultProps;
NumberInput.propTypes = propTypes;
export default NumberInput;
