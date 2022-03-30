import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectInput from './SelectInput';
import '../../scss/index.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Forms/SelectInput',
	component: SelectInput,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof SelectInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectInput> = (args) => (
	<SelectInput {...args} />
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
	data: ['a', 'b', 'c'],
	placeholder: 'Select any items',
};
