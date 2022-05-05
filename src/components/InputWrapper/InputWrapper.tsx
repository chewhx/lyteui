import React, { FC, ReactNode, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import {
	StyledHelperText,
	StyledInputWrapper,
	StyledLabel,
} from './InputWrapper.styled';

export type InputWrapperProps = React.HTMLAttributes<HTMLDivElement> & {
	id?: string;
	label?: ReactNode;
	labelProps?: HTMLAttributes<HTMLLabelElement>;
	description?: ReactNode;
	error?: ReactNode;
	required?: boolean;
};

const defaultProps = {};
const propTypes = {
	children: PropTypes.any,
};

const InputWrapper: FC<InputWrapperProps> = React.forwardRef<
	HTMLDivElement,
	InputWrapperProps
>(
	(
		{ id, label, labelProps, description, error, required, children, ...rest },
		ref
	) => {
		const styles = {
			required: { color: 'red' },
			error: { color: 'red' },
		};

		return (
			<StyledInputWrapper {...rest} ref={ref}>
				{label && (
					<div style={{ marginBottom: '3px' }}>
						<StyledLabel htmlFor={id} {...labelProps}>
							{label}
							{required && <span style={styles.required}>*</span>}
						</StyledLabel>
					</div>
				)}
				{description && <StyledHelperText>{description}</StyledHelperText>}
				{children}
				<small id={`${id}-error-message`} style={styles.error}>
					{error}
				</small>
			</StyledInputWrapper>
		);
	}
);

InputWrapper.displayName = 'InputWrapper';
InputWrapper.defaultProps = defaultProps;
InputWrapper.propTypes = propTypes;
export default InputWrapper;
