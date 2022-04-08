import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NumberInput from './NumberInput';
// import '../../scss/index.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Forms/NumberInput',
	component: NumberInput,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof NumberInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NumberInput> = (args) => (
	<NumberInput {...args} />
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
	placeholder: 'Placeholder number',
	label: 'Mobile Number',
	required: true,
	// error: 'Must be alphanumeric only',
	description: 'Number input only',
	min: 0,
	max: 100,
	value: 'fasdfs',
};
