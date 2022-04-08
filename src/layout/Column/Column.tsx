import React from 'react';
import { StyledColumn } from './Column.styled';

export type ColumnProps = React.HTMLAttributes<HTMLDivElement>;

const Column: React.FC<ColumnProps> = React.forwardRef<
	HTMLDivElement,
	ColumnProps
>(({ children, ...rest }, ref) => {
	return (
		<StyledColumn {...rest} ref={ref}>
			{children}
		</StyledColumn>
	);
});

Column.displayName = 'Column';
export default Column;
