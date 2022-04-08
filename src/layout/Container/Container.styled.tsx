import styled from 'styled-components';
import { ContainerProps } from './Container';
import { ContainerMaxWidth } from './Container.enum';

export const StyledContainer = styled.div<ContainerProps>`
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	max-width: ${({ fluid }) => {
		return typeof fluid === 'string'
			? ContainerMaxWidth[fluid]
			: typeof fluid === 'boolean'
			? `100%`
			: ContainerMaxWidth.lg;
	}};
`;
