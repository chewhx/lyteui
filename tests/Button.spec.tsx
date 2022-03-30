import React from 'react';
import { fireEvent, render, within } from '@testing-library/react';
import sinon from 'sinon';

import { Button } from '../src/components';

describe('<Button>', () => {
	it('Should output a button', () => {
		const { getByRole } = render(<Button>Button</Button>);
		expect(getByRole('button')).toBeDefined();
		expect(getByRole('button')).toBeVisible();
	});

	it('Should have type=button by default', () => {
		const { getByRole } = render(<Button>Button</Button>);
		expect(getByRole('button')).toHaveAttribute('type');
		expect(getByRole('button').getAttribute('type')).toBe('button');
	});

	it('Should show the type if passed one', () => {
		const { getByRole } = render(<Button type="submit">Button</Button>);
		expect(getByRole('button')).toHaveAttribute('type');
		expect(getByRole('button').getAttribute('type')).toBe('submit');
	});

	it('Should show the type if explicitly passed in when "as" is used', () => {
		const { getByTestId } = render(
			<Button as="div" type="submit" data-testid="test">
				Title
			</Button>
		);
		expect(getByTestId('test').getAttribute('type')).toBe('submit');
	});

	it('Should not have default type=button when "as" is used', () => {
		const { getByTestId } = render(
			<Button as="div" data-testid="test">
				Title
			</Button>
		);

		expect(getByTestId('test').getAttribute('type')).toBe(null);
	});

	it('Should forward refs to the button', () => {
		const ref = React.createRef<HTMLButtonElement>();
		render(
			<div>
				<Button ref={ref}>Yo</Button>
			</div>
		);

		expect(ref.current?.tagName).toBe('BUTTON');

		render(
			<div>
				<Button ref={ref} href="a">
					Yo
				</Button>
			</div>
		);

		expect(ref.current?.tagName).toBe('A');
	});

	it('Should output an anchor if called with a href', () => {
		const href = '/url';

		const { getByRole } = render(<Button href={href}>Title</Button>);

		expect(getByRole('button').getAttribute('href')).toBe(href);
	});

	it('Should call onClick callback', () => {
		const onClick = sinon.spy();

		const { getByRole } = render(<Button onClick={onClick}>Title</Button>);

		fireEvent.click(getByRole('button'));

		expect(onClick.calledOnce).toBe(true);
	});

	it('Should be disabled', () => {
		const { getByRole } = render(<Button disabled>Title</Button>);

		expect(getByRole('button').hasAttribute('disabled')).toBe(true);
	});

	it('Should not be disabled', () => {
		const { getByRole } = render(<Button>Title</Button>);

		expect(getByRole('button').hasAttribute('disabled')).toBe(false);
	});

	it('Should be disabled link', () => {
		const { getByRole } = render(
			<Button disabled href="#">
				Title
			</Button>
		);

		expect(getByRole('button').classList.contains('disabled')).toBe(true);
	});

	it('Should apply variant class', () => {
		const { getByRole } = render(<Button variant="danger">Title</Button>);

		expect(getByRole('button').classList.contains('btn-danger')).toBe(true);
	});

	it('Should have size class', () => {
		const { getByRole } = render(<Button size="lg">Title</Button>);

		expect(getByRole('button').classList.contains('btn-lg')).toBe(true);
	});

	it('Should honour additional classes passed in, adding not overriding', () => {
		const { getByRole } = render(
			<Button className="ken" variant="danger">
				Title
			</Button>
		);

		const button = getByRole('button');
		expect(button.classList.contains('ken')).toBe(true);
		expect(button.classList.contains('btn-danger')).toBe(true);
	});

	it('Should default to variant="primary"', () => {
		const { getByRole } = render(<Button>Title</Button>);

		expect(getByRole('button').classList.contains('btn-primary')).toBe(true);
	});

	it('Should remove default variant', () => {
		const { getByRole } = render(<Button variant={null as any}>Title</Button>);

		expect(getByRole('button').classList.contains('btn-primary')).toBe(false);
	});

	it('Should not output null variant', () => {
		const { getByRole } = render(<Button variant="">Title</Button>);

		expect(getByRole('button').classList.contains('btn-null')).toBe(false);
	});

	it('Should not output empty variant', () => {
		const { getByRole } = render(<Button variant="">Title</Button>);

		expect(getByRole('button').classList.contains('btn-')).toBe(false);
	});

	it('Should be active', () => {
		const { getByRole } = render(<Button active>Title</Button>);

		expect(getByRole('button').classList.contains('active')).toBe(true);
	});

	it('Should allow a custom prefix', () => {
		const { getByRole } = render(
			<Button bsPrefix="my-btn" variant="danger">
				Title
			</Button>
		);

		const button = getByRole('button');
		expect(button.classList.contains('my-btn')).toBe(true);
		expect(button.classList.contains('my-btn-danger')).toBe(true);
	});

	it('Should be disabled when isLoading is true', () => {
		const { getByRole } = render(<Button isLoading>Title</Button>);

		const element = getByRole('button');
		expect(element).toBeDisabled();
	});

	it('Should show given loadingMessage when isLoading is true', () => {
		const { getByRole } = render(
			<Button isLoading loadingMessage="Hello Loading...">
				Title
			</Button>
		);

		const element = getByRole('button');
		expect(element).toHaveTextContent('Hello Loading...');
	});

	it('Should show a spinner when isLoading is true', () => {
		const { getByRole } = render(<Button isLoading>Title</Button>);

		const element = getByRole('button');
		const spinner = within(element).getByTitle('left-spinner');
		expect(spinner).toBeVisible();
	});

	it('Should show a spinner on right side', () => {
		const { getByRole } = render(
			<Button isLoading loaderPosition="right">
				Title
			</Button>
		);

		const element = getByRole('button');
		const spinner = within(element).getByTitle('right-spinner');
		expect(spinner).toBeVisible();
	});

	it('Should not show left spinner when right spinner is visible', () => {
		const { getByRole } = render(
			<Button isLoading loaderPosition="right">
				Title
			</Button>
		);

		const element = getByRole('button');
		expect(() => within(element).getByTitle('left-spinner')).toThrow();
	});
});
