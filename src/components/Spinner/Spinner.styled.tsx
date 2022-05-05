import styled, { keyframes } from 'styled-components';
import getThemeColor from '../../theme/colors/getThemeColor';
import getSpinnerSize from './getSpinnerSize';
import { SpinnerProps } from './Spinner';

const spinnerBorder = keyframes`
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
`;

export const StyledSpinner = styled.span<SpinnerProps>`
	display: inline-block;
	width: ${({ size }) => size && getSpinnerSize(size)};
	height: ${({ size }) => size && getSpinnerSize(size)};
	vertical-align: -0.125em;
	border: 0.25em solid ${({ color }) => color && getThemeColor(color)};
	border-right-color: transparent;
	border-radius: 50%;
	-webkit-animation: 0.75s linear infinite ${spinnerBorder};
	animation: 0.75s linear infinite ${spinnerBorder};
`;
