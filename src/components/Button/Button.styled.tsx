import styled, { css } from 'styled-components';
import { StyledUnStyledButton } from './UnstyledButton/UnstyledButton.styled';
import { ButtonProps } from './Button';
import darkenColor from '../../utils/darkenColor';
import isThemeColorType from '../../utils/isThemeColorType';
import { ThemeColors } from '../../theme/constants/ThemeColors';

const cssBgColor = css<ButtonProps>`
	${({ theme }) => theme && isThemeColorType(theme) && ThemeColors[theme]}
`;

const cssHover = css<ButtonProps>`
	${({ theme }) =>
		theme && isThemeColorType(theme) && darkenColor(ThemeColors[theme], 0.1)}
`;

const cssColor = css<ButtonProps>`
	${({ theme }) => (theme !== 'light' ? ThemeColors.light : ThemeColors.dark)}
`;

const cssRadius = css<ButtonProps>`
	${({ radius }) =>
		radius === 'lg'
			? '0.65rem'
			: radius === 'sm'
			? '0.15rem'
			: radius === 'md'
			? '0.35rem'
			: '0.35rem'}
`;

export const StyledButton = styled(StyledUnStyledButton)<ButtonProps>`
	&:focus {
		outline: 0;
		box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
	}
	:disabled {
		pointer-events: none;
		opacity: 0.65;
	}
	box-sizing: border-box;
	color: ${({ variant, theme }) =>
		variant === 'outline'
			? theme !== 'light'
				? cssBgColor
				: ThemeColors.dark
			: cssColor};
	background-color: ${({ variant }) =>
		variant === 'outline' ? '#fff' : cssBgColor};
	border-radius: ${cssRadius};
	border-width: ${({ variant }) => (variant === 'outline' ? `1.5px` : '0px')};
	border-style: ${({ variant }) => (variant === 'outline' ? `solid` : 'none')};
	border-color: ${({ variant }) =>
		variant === 'outline' ? cssBgColor : 'none'};
	&:hover {
		background-color: ${({ variant }) =>
			variant === 'outline' ? cssBgColor : cssHover};
		color: ${({ variant }) => (variant === 'outline' ? cssColor : cssColor)};
	}
`;
