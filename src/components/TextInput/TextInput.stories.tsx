import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from './TextInput';
import { InputRadiusSize } from '../Input/Input.types';
// import '../../scss/index.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Forms/TextInput',
	component: TextInput,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof TextInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextInput> = (args) => (
	<TextInput {...args} />
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
	placeholder: 'Placeholder text',
	label: 'Business Name',
	required: true,
	// error: 'Must be alphanumeric only',
	// isValid: true,
	description: 'This is description',
	// radius: 'xl',
};

export const Invoice = () => {
	return (
		<>
			<TextInput
				label="Contact Person"
				required
				description="Client name"
				error="Contact Person is required"
			/>
			<TextInput label="Company/Business Name" />
			<TextInput label="Registration ID" required />
			<TextInput label="Email" />
			<TextInput label="Address Line 1" />
		</>
	);
};
