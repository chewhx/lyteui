import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
import '../../scss/index.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Core/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		size: {
			name: 'Size',
			defaultValue: 'md',
			control: {
				type: 'select',
			},
			options: ['sm', 'md', 'lg'],
		},
		variant: {
			defaultValue: 'primary',
			control: {
				type: 'select',
			},
			options: [
				'primary',
				'secondary',
				'success',
				'warning',
				'danger',
				'info',
				'light',
				'dark',
				'link',
			],
		},
		loaderPosition: {
			defaultValue: 'left',
			control: {
				type: 'select',
			},
			options: ['left', 'right'],
		},
	},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
	children: 'Basic Button',
};

export const Sizes: ComponentStory<typeof Button> = () => (
	<>
		<Button size="sm">Small Button</Button>
		<Button>Normal Button</Button>
		<Button size="lg">Large Button</Button>
	</>
);

export const Colors: ComponentStory<typeof Button> = () => (
	<>
		{[
			'primary',
			'secondary',
			'success',
			'warning',
			'danger',
			'info',
			'light',
			'dark',
			'link',
			'outline-primary',
			'outline-secondary',
			'outline-success',
			'outline-warning',
			'outline-danger',
			'outline-info',
			'outline-light',
			'outline-dark',
			'outline-link',
		].map((e) => (
			<Button variant={e} key={e} className="m-2">
				<span className="text-capitalize">{e} Button</span>
			</Button>
		))}
	</>
);

export const Loading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Loading.args = {
	children: 'Loading Button',
	isLoading: true,
	loaderPosition: 'right',
};
