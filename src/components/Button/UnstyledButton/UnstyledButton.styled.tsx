import styled, { css } from 'styled-components';
import { UnstyledButtonProps } from './UnstyledButton';
import { Button } from '@restart/ui';

enum ButtonFontSize {
	xs = '0.65rem',
	sm = '0.7rem',
	md = '1rem',
	lg = '1.25rem',
	xl = '1.55rem',
}

enum ButtonSizePadding {
	xs = '0.15rem 0.55rem',
	sm = '0.3rem 0.75rem',
	md = '0.475rem 1.25rem',
	lg = '0.75rem 1.75rem',
	xl = '1rem 2rem',
}

const isButtonSizePadding = (key: string): key is ButtonSizePadding =>
	['xs', 'sm', 'md', 'lg', 'xl'].includes(key);

const cssPadding = css<UnstyledButtonProps>`
	${({ size }) =>
		size && isButtonSizePadding(size)
			? ButtonSizePadding[size]
			: ButtonFontSize.md};
`;

const cssFontSize = css<UnstyledButtonProps>`
	${({ size }) =>
		size && isButtonSizePadding(size)
			? ButtonFontSize[size]
			: ButtonFontSize.md};
`;

const cssWidth = css<UnstyledButtonProps>`
	${({ fullWidth }) => fullWidth && '100%'}
`;

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
	padding: ${cssPadding};
	font-size: ${cssFontSize};
	width: ${cssWidth};
	border-radius: 0.35rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
