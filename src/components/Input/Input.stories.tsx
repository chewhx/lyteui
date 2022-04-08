import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input, { LyteRadiusForSm, LyteRadiusForLg, InputProps } from './Input';
// import '../../scss/index.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Forms/Input',
	component: Input,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {};

export const Radius = () => {
	return ['xs', 'sm', 'md', 'lg', 'xl'].map((e) => (
		<>
			<Input
				key={e}
				radius={e as InputProps['radius']}
				placeholder={`${e} input`}
				className="my-2"
			/>
		</>
	));
};

export const Sizes = () => (
	<>
		<Input
			radius={'sm'}
			size="sm"
			placeholder={`Small Input`}
			className="my-2"
		/>
		<Input radius={'sm'} placeholder={`Normal Input`} className="my-2" />
		<Input radius={'sm'} size="lg" placeholder={`Big Input`} className="my-2" />
	</>
);

export const SizeAndRadius = () => {
	return ['xs', 'sm', 'md', 'lg', 'xl'].map((e) => (
		<div className="my-5" key={e}>
			<Input
				radius={e as InputProps['radius']}
				size="sm"
				placeholder={`Size: sm, Radius: ${e}`}
				className="my-2"
			/>
			<Input
				radius={e as InputProps['radius']}
				placeholder={`Size: md, Radius: ${e}`}
				className="my-2"
			/>
			<Input
				radius={e as InputProps['radius']}
				size="lg"
				placeholder={`Size: lg, Radius: ${e}`}
				className="my-2"
			/>
		</div>
	));
};

export const NumberInput = () => {
	return (
		<Input
			radius="lg"
			placeholder={`Number Input`}
			className="my-2"
			type="number"
		/>
	);
};

export const ColorInput = () => {
	return (
		<Input
			radius="lg"
			placeholder={`Number Input`}
			className="my-2"
			type="color"
		/>
	);
};
