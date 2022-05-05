import React from 'react'
import { SelectData } from '../SelectInput.types';

export default (data: SelectData[] | string[]) => {
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
