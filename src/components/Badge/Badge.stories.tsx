import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Badge } from '../../components';
import '../../scss/index.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Core/Badge',
	component: Badge,
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
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
	children: 'Basic Badge',
};

export const Sizes: ComponentStory<typeof Badge> = () => (
	<>
		<Badge>Normal Badge</Badge>
		<Badge size="md">Small Badge</Badge>
		<Badge size="lg">Large Badge</Badge>
	</>
);

export const Colors: ComponentStory<typeof Badge> = () => (
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
				<Badge
					bg={e}
					key={e}
					className="m-2"
					text={e === 'light' ? 'dark' : 'light'}
				>
					<span className="text-capitalize">
						{e} Badge With {e === 'light' ? 'Dark' : 'Light'} Text
					</span>
				</Badge>
				<Badge
					bg={e}
					key={e}
					size="md"
					className="m-2"
					text={e === 'light' ? 'dark' : 'light'}
				>
					<span className="text-capitalize">
						MD {e} Badge With {e === 'light' ? 'Dark' : 'Light'} Text
					</span>
				</Badge>
			</>
		))}
	</>
);
