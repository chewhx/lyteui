import React from 'react';
import { StyledRow } from './Row.styled';

export type RowProps = React.HTMLAttributes<HTMLDivElement> & {
	numColumns?: number;
};

const Row: React.FC<RowProps> = React.forwardRef<HTMLDivElement, RowProps>(
	({ children, ...rest }, ref) => {
		return (
			<StyledRow {...rest} ref={ref}>
				{children}
			</StyledRow>
		);
	}
);

Row.displayName = 'Row';
export default Row;
