import { Button } from '@restart/ui';
import styled from 'styled-components';
import getButtonFontSize from './functions/getButtonFontSize';
import getButtonPadding from './functions/getButtonPadding';
import { UnstyledButtonProps } from './UnstyledButton';

export const StyledUnStyledButton = styled(Button)<UnstyledButtonProps>`
	font-family: Poppins;
	display: inline-block;
	font-weight: 400;
	line-height: 1.5;
	color: #212529;
	text-align: center;
	text-decoration: none;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
	background-color: transparent;
	border: 1px solid transparent;
	padding: ${({ size }) => size && getButtonPadding(size)};
	font-size: ${({ size }) => size && getButtonFontSize(size)};
	width: ${({ fullWidth }) => fullWidth && '100%'};
	border-radius: 0.35rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
