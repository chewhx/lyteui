import React from 'react';
import { StyledContainer } from './Container.styled';

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
	fluid?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};

const Container: React.FC<ContainerProps> = React.forwardRef<
	HTMLDivElement,
	ContainerProps
>(({ children, ...rest }, ref) => {
	return (
		<StyledContainer {...rest} ref={ref}>
			{children}
		</StyledContainer>
	);
});

Container.displayName = 'Container';

export default Container;
