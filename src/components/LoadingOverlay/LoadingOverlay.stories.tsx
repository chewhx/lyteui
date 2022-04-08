import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoadingOverlay from './LoadingOverlay';
// import '../../scss/index.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Core/LoadingOverlay',
	component: LoadingOverlay,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof LoadingOverlay>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoadingOverlay> = (args) => (
	<LoadingOverlay {...args} />
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {};
