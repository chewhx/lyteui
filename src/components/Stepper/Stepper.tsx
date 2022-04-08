import React from 'react';
import styled from 'styled-components';

export type StepperProps = React.HTMLAttributes<HTMLElement> & {
	listProps: React.OlHTMLAttributes<HTMLOListElement>;
};

const defaultProps = {};

const propTypes = {};

const StyledStepper = styled.ul`
	display: flex;
	padding: 0 0;
	margin-bottom: 1rem;
	list-style: none;
	width: 100%;
	align-items: center;
`;

const StyledSeparator = styled.li`
	height: 2px;
	width: 100%;
	background-color: black;
	flex: 1 1 0%;
	margin: 0 0.75rem;
	min-width: 20px;
`;

const Stepper: React.FC<StepperProps> = React.forwardRef<
	HTMLOListElement,
	StepperProps
>(({ listProps, children, ...rest }, ref) => {
	const steps = React.Children.toArray(children).reduce<React.ReactNode[]>(
		(acc, item, index, array) => {
			acc.push(item);
			if (index !== array.length - 1) {
				acc.push(<StyledSeparator />);
			}
			return acc;
		},
		[]
	);
	return (
		<StyledStepper {...listProps} {...rest} ref={ref}>
			{steps}
		</StyledStepper>
	);
});

Stepper.displayName = 'Stepper';
Stepper.defaultProps = defaultProps;
Stepper.propTypes = propTypes;
export default Stepper;
