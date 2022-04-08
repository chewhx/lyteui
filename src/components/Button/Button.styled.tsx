import styled, { css } from 'styled-components';
import { BootstrapThemeColors } from '../../theme/constants/BootstrapThemeColors';
import darkenColor from '../../utils/darkenColor';
import isValidColor from '../../utils/isValidColor';
import { LyteButtonProps } from './Button';
import { StyledUnStyledButton } from './UnstyledButton/UnstyledButton.styled';

function isOfBootstrapThemeColors(key: string): key is BootstrapThemeColors {
	return [
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'light',
		'dark',
	].includes(key);
}

const cssBgColor = css<LyteButtonProps>`
	${({ color }) =>
		color && isOfBootstrapThemeColors(color)
			? BootstrapThemeColors[color]
			: color && isValidColor(color) && color}
`;

const cssHover = css<LyteButtonProps>`
	${({ color }) =>
		color && isOfBootstrapThemeColors(color)
			? darkenColor(BootstrapThemeColors[color], 0.1)
			: color && isValidColor(color) && darkenColor(color, 0.1)}
`;

const cssColor = css<LyteButtonProps>`
	${({ color }) =>
		color !== 'light' ? BootstrapThemeColors.light : BootstrapThemeColors.dark}
`;

const cssRadius = css<LyteButtonProps>`
	${({ radius }) =>
		typeof radius === 'number'
			? `${radius}px`
			: typeof radius === 'string'
			? radius
			: radius === 'lg'
			? '0.55rem'
			: radius === 'sm'
			? '0.15rem'
			: '0.35rem'}
`;

export const StyledButton = styled(StyledUnStyledButton)<LyteButtonProps>`
	&:focus {
		outline: 0;
		box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
	}
	:disabled {
		pointer-events: none;
		opacity: 0.65;
	}
	color: ${({ variant, color }) =>
		variant === 'outline'
			? color !== 'light'
				? cssBgColor
				: BootstrapThemeColors.dark
			: cssColor};
	background-color: ${({ variant }) =>
		variant === 'outline' ? '#fff' : cssBgColor};
	border-radius: ${cssRadius};
	border-width: ${({ variant }) => (variant === 'outline' ? `1px` : '0px')};
	border-style: ${({ variant }) => (variant === 'outline' ? `solid` : 'none')};
	border-color: ${({ variant }) =>
		variant === 'outline' ? cssBgColor : 'none'};
	&:hover {
		background-color: ${({ variant }) =>
			variant === 'outline' ? cssBgColor : cssHover};
		color: ${({ variant }) => (variant === 'outline' ? cssColor : cssColor)};
	}
`;
