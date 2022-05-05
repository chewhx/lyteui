import React from 'react';
import Input, { InputProps } from '../Input/Input';
import InputWrapper, { InputWrapperProps } from '../InputWrapper/InputWrapper';
import PropTypes from 'prop-types';

export type NumberInputProps = InputProps & {
	id?: string;
	label?: React.ReactNode;
	labelProps?: React.HTMLAttributes<HTMLLabelElement>;
	inputProps?: InputProps;
	description?: React.ReactNode;
	error?: React.ReactNode;
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
};

const NumberInput: React.FC<NumberInputProps> = React.forwardRef<
	HTMLInputElement,
	NumberInputProps
>(
	(
		{
			id,
			label,
			labelProps,
			inputProps,
			required,
			description,
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
				error={error}
				{...wrapperProps}
			>
				<Input
					{...rest}
					{...inputProps}
					fullWidth
					id={id}
					type="number"
					isInvalid={hasError}
					_ref={ref}
				/>
			</InputWrapper>
		);
	}
);

NumberInput.displayName = 'NumberInput';
NumberInput.defaultProps = defaultProps;
NumberInput.propTypes = propTypes;

export default NumberInput;
