import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from './TextInput';
// import '../../scss/index.scss';
import { RadiusValues } from '../Input/Input';

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
	error: 'Must be alphanumeric only',
	description: 'This is description',
	// radius: 'xl',
};

export const Radius = () => {
	return ['xs', 'sm', 'md', 'lg', 'xl'].map((e) => (
		<>
			<TextInput
				key={e}
				radius={e as RadiusValues}
				required
				label={`${e} radius`}
				placeholder={`${e} input`}
				description="This is description"
				wrapperProps={{ className: 'my-5' }}
			/>
			<TextInput
				key={e}
				labelProps={{ style: { marginBottom: '0.5rem' } }}
				radius={e as RadiusValues}
				size="lg"
				label={`Big ${e} radius`}
				placeholder={`Big ${e} input`}
				description="This is description for below"
				wrapperProps={{ className: 'my-5' }}
			/>
		</>
	));
};

export const Sizes = () => (
	<>
		<TextInput radius={'sm'} placeholder={`Small Input`} className="my-2" />
		<TextInput
			radius={'sm'}
			size="lg"
			placeholder={`Big Input`}
			className="my-2"
		/>
	</>
);

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
