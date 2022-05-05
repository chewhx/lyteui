import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { InputRadiusSize, InputSize } from '../Input/Input.types';
import InputWrapper, { InputWrapperProps } from '../InputWrapper/InputWrapper';
import makeOptionList from './utils/makeOptionList';
import { StyledSelect } from './SelectInput.styled';
import { SelectData } from './SelectInput.types';

export type SelectInputProps = InputWrapperProps &
	React.HTMLAttributes<HTMLSelectElement> &
	React.DOMAttributes<HTMLSelectElement> & {
		/**
		 * Data for select options
		 */
		data: SelectData[] | string[];
		isValid?: boolean;
		isInvalid?: boolean;
		fullWidth?: boolean;
		inputSize?: InputSize;
		radius?: InputRadiusSize;
		selectProps?: React.HTMLAttributes<HTMLSelectElement> &
			React.DOMAttributes<HTMLSelectElement>;
		wrapperProps?: InputWrapperProps;
	};

const defaultProps = {
	inputSize: 'md' as InputSize,
	radius: 'md' as InputRadiusSize,
};
const propTypes = {
	placeholder: PropTypes.string,
	id: PropTypes.string,
	className: PropTypes.string,
	label: PropTypes.string,
	required: PropTypes.bool,
	error: PropTypes.string,
	description: PropTypes.string,
	labelProps: PropTypes.object,
};

const SelectInput: FC<SelectInputProps> = React.forwardRef<
	HTMLSelectElement,
	SelectInputProps
>(
	(
		{
			data,
			placeholder,
			id,
			label,
			selectProps,
			description,
			error,
			required,
			wrapperProps,
			...rest
		},
		ref
	) => {
		const hasError = error ? true : false;

		return (
			<InputWrapper
				{...wrapperProps}
				label={label}
				description={description}
				required={required}
				error={error}
				id={id}
			>
				<StyledSelect
					defaultValue={placeholder}
					{...selectProps}
					{...rest}
					fullWidth
					isInvalid={hasError}
					ref={ref}
				>
					<option hidden value={placeholder} label={placeholder} />
					{data && makeOptionList(data)}
				</StyledSelect>
			</InputWrapper>
		);
	}
);

SelectInput.displayName = 'SelectInput';
SelectInput.defaultProps = defaultProps;
SelectInput.propTypes = propTypes;
export default SelectInput;
