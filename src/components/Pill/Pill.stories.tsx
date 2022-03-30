import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pill from './Pill';
import '../../scss/index.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Core/Pill',
	component: Pill,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
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
	},
} as ComponentMeta<typeof Pill>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
	children: 'Basic Badge',
};

export const Sizes: ComponentStory<typeof Pill> = () => (
	<>
		<Pill>Normal Badge</Pill>
		<Pill size="md">Small Badge</Pill>
		<Pill size="lg">Large Badge</Pill>
	</>
);

export const Colors: ComponentStory<typeof Pill> = () => (
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
		].map((e) => (
			<>
				<Pill
					bg={e}
					key={e}
					className="m-2"
					text={e === 'light' ? 'dark' : 'light'}
				>
					<span className="text-capitalize">
						{e} Badge With {e === 'light' ? 'Dark' : 'Light'} Text
					</span>
				</Pill>
				<Pill
					bg={e}
					key={e}
					size="md"
					className="m-2"
					text={e === 'light' ? 'dark' : 'light'}
				>
					<span className="text-capitalize">
						MD {e} Badge With {e === 'light' ? 'Dark' : 'Light'} Text
					</span>
				</Pill>
			</>
		))}
	</>
);
