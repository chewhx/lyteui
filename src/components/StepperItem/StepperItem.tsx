import React from 'react';
import styled from 'styled-components';
import UnstyledButton from '../Button/UnstyledButton/UnstyledButton';

export type StepperItemProps = React.HTMLAttributes<HTMLLIElement> & {
	label: React.ReactNode;
	description?: React.ReactNode;
};

const defaultProps = {
	label: 'Step',
	description: 'Describe your step',
};

const propTypes = {};

const StyledStepperItem = styled.li`
	flex: 1 1 0%;

	/* &:after {
		--size: 5rem;
		content: '';
		position: relative;
		bottom: 10;
		z-index: 1;
		display: block;
		width: var(--size);
		height: 3px;
		background-color: black;
		left: 75%;
		bottom: 50%;
	}

	&:only-child:after {
		display: none;
	}
	&:last-child:after {
		display: none;
	} */
`;

const StepperItem: React.FC<StepperItemProps> = React.forwardRef<
	HTMLLIElement,
	StepperItemProps
>(({ label, description, ...rest }, ref) => {
	return (
		<StyledStepperItem {...rest} ref={ref}>
			<UnstyledButton style={{ width: 'max-content' }}>
				<div style={{ textAlign: 'left' }}>
          
					<h6 style={{ margin: 0 }}>{label}</h6>
					<small className="text-muted">{description}</small>
				</div>
			</UnstyledButton>
		</StyledStepperItem>
	);
});

StepperItem.displayName = 'StepperItem';
StepperItem.defaultProps = defaultProps;
StepperItem.propTypes = propTypes;
export default StepperItem;
