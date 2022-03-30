import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Input } from '../src/components';

describe('<Input>', () => {
	it('should render correctly', () => {
		const { getByTestId } = render(
			<Input
				type="text"
				id="email"
				name="name"
				className="some-classname"
				data-testid="test-id"
			/>
		);

		const element = getByTestId('test-id');
		expect(element.tagName.toLowerCase()).toBe('input');
		expect(element.id).toBe('email');
		expect(element.classList.length).toBe(2);
		expect(element.classList).toContain('form-control');
		expect(element.classList).toContain('some-classname');
		expect(element.getAttribute('name')).toBe('name');
		expect(element.getAttribute('type')).toBe('text');
	});

	it('should support textarea', () => {
		const { getByTestId } = render(
			<Input as="textarea" data-testid="test-id" />
		);

		expect(getByTestId('test-id').tagName.toLowerCase()).toBe('textarea');
	});

	it('should support type=color', () => {
		const { getByTestId } = render(
			<Input type="color" data-testid="test-id" />
		);

		expect(getByTestId('test-id').getAttribute('type')).toBe('color');
	});

	it('should support ref forwarding', () => {
		const ref = React.createRef<HTMLInputElement>();
		render(<Input ref={ref} type="text" />);
		expect(ref.current?.tagName).toBe('INPUT');
	});

	it('should properly display size of Input', () => {
		const { getByTestId } = render(
			<Input type="text" size="lg" data-testid="test-id" />
		);

		const element = getByTestId('test-id');
		expect(element.classList.length).toBe(2);
		expect(element.classList).toContain('form-control-lg');
	});

	it('should properly display html size of Input', () => {
		const { getByTestId } = render(
			<Input type="text" htmlSize={42} data-testid="test-id" />
		);

		expect(getByTestId('test-id').getAttribute('size')).toBe('42');
	});

	it('Should have input as default component', () => {
		const { getByTestId } = render(<Input data-testid="test-id" />);

		expect(getByTestId('test-id').tagName.toLowerCase()).toBe('input');
	});

	it('should support an array of strings as values', () => {
		const { getByTestId } = render(
			<Input
				value={['hello', 'world']}
				onChange={() => undefined}
				data-testid="test-id"
			/>
		);

		expect(getByTestId('test-id').getAttribute('value')).toBe('hello,world');
	});

	it('should support larger radius for size lg', () => {
		const { getByTestId } = render(
			<Input size="lg" radius="sm" data-testid="test-id" />
		);

		expect(getByTestId('test-id').style.borderRadius).toBe('0.75rem');
	});

	it('should support larger radius for size lg', () => {
		const { getByTestId } = render(
			<Input size="lg" radius="xl" data-testid="test-id" />
		);

		expect(getByTestId('test-id').style.borderRadius).toBe('1.5rem');
	});

	it('should support text input', () => {
		const { getByTestId } = render(<Input data-testid="test-id" />);

		const element = getByTestId('test-id');
		expect(element).toHaveValue('');
		fireEvent.change(element, { target: { value: '123abc' } });
		expect(element).toHaveValue('123abc');
	});
});
