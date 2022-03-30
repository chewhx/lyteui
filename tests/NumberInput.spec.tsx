import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { NumberInput } from '../src/components';

describe('<NumberInput>', () => {
	it('should render correctly', () => {
		const { getByTestId, getByText } = render(
			<NumberInput
				id="email"
				name="name"
				className="some-classname"
				data-testid="test-id"
				label="Ross Geller"
				description="Friends NYC"
				placeholder="Brusselsprouts"
			/>
		);

		const numberInput = getByTestId('test-id');
		expect(numberInput.tagName.toLowerCase()).toBe('input');
		expect(numberInput.getAttribute('id')).toBe('email');
		expect(numberInput.getAttribute('name')).toBe('name');
		expect(numberInput.getAttribute('type')).toBe('number');
		expect(numberInput.getAttribute('placeholder')).toBe('Brusselsprouts');

		const description = getByText('Friends NYC');
		expect(description.tagName.toLowerCase()).toBe('p');

		const label = getByText('Ross Geller');
		expect(label.tagName.toLowerCase()).toBe('label');
	});

	it('should render a red asterisk when required', () => {
		const { getByText } = render(
			<NumberInput
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
			<NumberInput
				id="email"
				name="name"
				className="some-classname"
				data-testid="test-id"
				required
				label="Ross Geller"
				error="Wrong friend"
			/>
		);

		const numberInput = getByTestId('test-id');
		expect(numberInput).toHaveClass('is-invalid');

		const errorMessage = getByText('Wrong friend');
		expect(errorMessage.tagName.toLowerCase()).toBe('small');
		expect(errorMessage).toHaveStyle('color: red');
	});

	it('should only allow number input', () => {
		const { getByTestId } = render(
			<NumberInput
				id="email"
				name="name"
				className="some-classname"
				data-testid="test-id"
				required
				label="Ross Geller"
			/>
		);

		const numberInput = getByTestId('test-id');
		fireEvent.change(numberInput, { target: { value: 'fasdfasd' } });
		expect(numberInput).toHaveDisplayValue('');
		expect(numberInput).toHaveValue(null);
		fireEvent.change(numberInput, { target: { value: 90909090 } });
		expect(numberInput).toHaveDisplayValue('90909090');
		expect(numberInput).toHaveValue(90909090);
	});
});
