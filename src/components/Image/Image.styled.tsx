import styled, { css } from 'styled-components';
import { ImageRadiusSize } from '../../theme/constants/RadiusSizes';
import isDefaultSizeType from '../../utils/isDefaultSizeType';
import { ImageProps } from './Image';

const cssBorderRadius = css<ImageProps>`
	${({ radius }) =>
		radius && isDefaultSizeType(radius) ? ImageRadiusSize[radius] : 0};
`;

export const StyledImage = styled.img<ImageProps>`
	max-width: ${({ fluid }) => (fluid ? '100%' : 'none')};
	height: auto;
	border-radius: ${cssBorderRadius};
`;
