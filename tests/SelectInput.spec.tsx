import React from 'react';
import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SelectInput } from '../src/components';

const data = [
	{ value: 'singapore', label: 'Singapore' },
	{ value: 'london', label: 'London' },
	{ value: 'paris', label: 'Paris' },
];

describe('<SelectInput>', () => {
	it('should render correctly', () => {
		const { getByTestId } = render(
			<SelectInput
				data-testid="test-id"
				name="bar"
				className="my-control"
				data={data}
			/>
		);

		const element = getByTestId('test-id');
		expect(element.tagName.toLowerCase()).toBe('select');
		expect(element).toHaveClass('form-select');
		expect(element).toHaveClass('my-control');
		expect(element).toHaveAttribute('name', 'bar');
	});

	it('should render size correctly', () => {
		const { getByTestId } = render(
			<SelectInput data-testid="test-id" name="bar" data={data} size="lg" />
		);

		const element = getByTestId('test-id');
		expect(element).toHaveClass('form-select-lg');
	});

	it('should render htmlSize correctly', () => {
		const { getByTestId } = render(
			<SelectInput htmlSize={3} data-testid="test-id" data={data} />
		);

		const element = getByTestId('test-id');
		expect(element).toHaveAttribute('size', '3');
	});

	it('should render isValid correctly', () => {
		const { getByTestId } = render(
			<SelectInput htmlSize={3} data-testid="test-id" data={data} isValid />
		);

		const element = getByTestId('test-id');
		expect(element).toHaveClass('form-select');
		expect(element).toHaveClass('is-valid');
	});

	it('should render isInvalid correctly', () => {
		const { getByTestId } = render(
			<SelectInput htmlSize={3} data-testid="test-id" data={data} isInvalid />
		);

		const element = getByTestId('test-id');
		expect(element).toHaveClass('form-select');
		expect(element).toHaveClass('is-invalid');
	});

	it('should render data correctly', () => {
		const { getByTestId } = render(
			<SelectInput data-testid="test-id" data={data} name="cities" />
		);

		const element = getByTestId('test-id');
		const options = within(element).getAllByRole('option');
		expect(options).toHaveLength(data.length);

		const option1 = options[0];
		expect(option1).toHaveValue('singapore');
		const option2 = options[1];
		expect(option2).toHaveValue('london');
		const option3 = options[2];
		expect(option3).toHaveValue('paris');
	});

	it('should render option selected', async () => {
		const { getByTestId } = render(
			<SelectInput data-testid="test-id" data={data} />
		);

		const element = getByTestId('test-id');
		expect(element).toHaveValue('');
		await userEvent.selectOptions(element, 'singapore');
		expect(element).toHaveValue('singapore');
		await userEvent.selectOptions(element, 'london');
		expect(element).toHaveValue('london');
	});
});
