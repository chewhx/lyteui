import React, { DOMAttributes, FC, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { Form, FormSelectProps } from 'react-bootstrap';

type SelectData = {
	value: string | number;
	label: string;
	disabled?: boolean;
};

type SelectInputProps = FormSelectProps &
	HTMLAttributes<HTMLSelectElement> &
	DOMAttributes<HTMLSelectElement> & {
		data: SelectData[] | string[];
	};

const makeOptsList = (data: SelectData[] | string[]) => {
	// if (!data.length) return;
	return data.map((e) => {
		if (typeof e === 'string') {
			return <option key={e} value={e} label={e} />;
		}
		if ('value' in e && 'label' in e) {
			return (
				<option
					key={e.value}
					value={e.value}
					label={e.label}
					disabled={e.disabled || false}
				/>
			);
		}
		return;
	});
};

const defaultProps = {};
const propTypes = {
	placeholder: PropTypes.string,
};

const SelectInput: FC<SelectInputProps> = React.forwardRef<
	HTMLSelectElement,
	SelectInputProps
>(({ data, placeholder, ...rest }, ref) => {
	return (
		<Form.Select defaultValue={placeholder} {...rest} ref={ref}>
			<option hidden value={placeholder} label={placeholder} />
			{data && makeOptsList(data)}
		</Form.Select>
	);
});

SelectInput.displayName = 'SelectInput';
SelectInput.defaultProps = defaultProps;
SelectInput.propTypes = propTypes;
export default SelectInput;
