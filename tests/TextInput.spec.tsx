import React from 'react';
import { getByText, render, within } from '@testing-library/react';

import { TextInput } from '../src/components';

describe('<TextInput>', () => {
	it('should render correctly', () => {
		const { getByTestId, getByText } = render(
			<TextInput
				id="email"
				name="name"
				className="some-classname"
				data-testid="test-id"
				label="Ross Geller"
				description="Friends NYC"
				placeholder="Brusselsprouts"
			/>
		);

		const textInput = getByTestId('test-id');
		expect(textInput.tagName.toLowerCase()).toBe('input');
		expect(textInput.getAttribute('id')).toBe('email');
		expect(textInput.getAttribute('name')).toBe('name');
		expect(textInput.getAttribute('type')).toBe('text');
		expect(textInput.getAttribute('placeholder')).toBe('Brusselsprouts');

		const description = getByText('Friends NYC');
		expect(description.tagName.toLowerCase()).toBe('p');

		const label = getByText('Ross Geller');
		expect(label.tagName.toLowerCase()).toBe('label');
	});

	it('should render a red asterisk when required', () => {
		const { getByText } = render(
			<TextInput
				id="email"
				name="name"
				className="some-classname"
				data-testid="test-id"
				required
				label="Ross Geller"
			/>
		);

		const label = getByText('Ross Geller');
		const asterisk = label.querySelector('span');
		expect(asterisk?.textContent).toBe('*');
		expect(asterisk?.style.color).toBe('red');
	});

	it('should be invalid and display an error text', () => {
		const { getByTestId, getByText } = render(
			<TextInput
				id="email"
				name="name"
				className="some-classname"
				data-testid="test-id"
				required
				label="Ross Geller"
				error="Wrong friend"
			/>
		);

		const textInput = getByTestId('test-id');
		expect(textInput).toHaveClass('is-invalid');

		const errorMessage = getByText('Wrong friend');
		expect(errorMessage.tagName.toLowerCase()).toBe('small');
		expect(errorMessage).toHaveStyle('color: red');
	});
});
