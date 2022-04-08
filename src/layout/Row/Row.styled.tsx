import styled from 'styled-components';
import { RowProps } from './Row';

export const StyledRow = styled.div<RowProps>`
	display: flex;
	flex-wrap: wrap;

	& > * {
		flex: 0 0 auto;
		${({ numColumns }) => {
			return (
				typeof numColumns === 'number' && `width:  calc(100% / ${numColumns})`
			);
		}};
	}
`;
