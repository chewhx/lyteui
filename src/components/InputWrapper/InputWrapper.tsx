import React, { FC, ReactNode, HTMLAttributes } from 'react';
import { Form, FormGroupProps, FormLabelProps } from 'react-bootstrap';
import PropTypes from 'prop-types';

export type InputWrapperProps = FormGroupProps & {
	id?: string;
	label?: ReactNode;
	labelProps?: FormLabelProps & HTMLAttributes<HTMLLabelElement>;
	description?: ReactNode;
	descriptionPosition?: 'bottom' | 'right';
	error?: ReactNode;
	required?: boolean;
};

const defaultProps = {};
const propTypes = {
	children: PropTypes.any,
};

const InputWrapper: FC<InputWrapperProps> = React.forwardRef<
	HTMLElement,
	InputWrapperProps
>(
	(
		{
			id,
			label,
			labelProps,
			description,
			descriptionPosition,
			error,
			required,
			children,
			...rest
		},
		ref
	) => {
		const styles = {
			wrapper: {
				margin: '1.25rem 0',
			},
			label: {
				marginBottom: '0rem',
			},
			required: { color: 'red' },
			error: { color: 'red' },
		};

		const DescriptionComponent = () =>
			descriptionPosition === 'right' ? (
				<small className="m-0 text-muted small ms-2">{description}</small>
			) : (
				<p className="m-0 text-muted small mb-1">{description}</p>
			);

		return (
			<Form.Group style={styles.wrapper} {...rest} ref={ref}>
				{label && (
					<Form.Label htmlFor={id} style={styles.label} {...labelProps}>
						{label}
						{required && <span style={styles.required}>*</span>}
					</Form.Label>
				)}
				{description && <DescriptionComponent />}
				{children}
				<small id={`${id}-error-message`} style={styles.error}>
					{error}
				</small>
			</Form.Group>
		);
	}
);

InputWrapper.displayName = 'InputWrapper';
InputWrapper.defaultProps = defaultProps;
InputWrapper.propTypes = propTypes;
export default InputWrapper;
