import styled, { css } from 'styled-components';
import { UnstyledButtonProps } from './UnstyledButton';

const cssPadding = css<UnstyledButtonProps>`
	${({ size }) =>
		size === 'lg'
			? `0.75rem 1.75rem`
			: size === 'sm'
			? `0.3rem 0.75rem`
			: `0.475rem 1.25rem`};
`;

const cssFontSize = css<UnstyledButtonProps>`
	${({ size }) =>
		size === 'lg' ? `1.25rem` : size === 'sm' ? `0.875rem` : `inherit`}
`;

const cssWidth = css<UnstyledButtonProps>`
	${({ fullWidth }) => fullWidth && '100%'}
`;

export const StyledUnStyledButton = styled.button<UnstyledButtonProps>`
	font-family: inherit;
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
	padding: ${cssPadding};
	font-size: ${cssFontSize};
	width: ${cssWidth};
	border-radius: 0.35rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
