import styled, { css } from 'styled-components';
import { ThemeColors } from '../../theme/constants/ThemeColors';
import isThemeColorType from '../../utils/isThemeColorType';
import { BadgeProps } from './Badge';

const cssBgColor = css<BadgeProps>`
	${({ theme, variant }) =>
		variant === 'outline' && theme !== 'light'
			? '#fff'
			: variant === 'outline' && theme === 'light'
			? 'transparent'
			: theme && isThemeColorType(theme)
			? ThemeColors[theme]
			: ThemeColors.primary}
`;

const cssColor = css<BadgeProps>`
	${({ theme, textTheme }) =>
		textTheme && isThemeColorType(textTheme)
			? ThemeColors[textTheme]
			: theme !== 'light'
			? ThemeColors.white
			: ThemeColors.dark}
`;

enum BadgeSizePadding {
	xs = '0.3rem 0.65rem',
	sm = '0.35rem 0.85rem',
	md = '0.45rem 1.05rem',
	lg = '0.55rem 1.55rem',
	xl = '0.75rem 1.95rem',
}

const isBadgeSizePadding = (key: string): key is BadgeSizePadding =>
	['xs', 'sm', 'md', 'lg', 'xl'].includes(key);

enum BadgeFontSize {
	xs = '0.65rem',
	sm = '0.7rem',
	md = '0.75rem',
	lg = '0.95rem',
	xl = '1.05rem',
}

const cssPadding = css<BadgeProps>`
	${({ size }) =>
		size && isBadgeSizePadding(size)
			? BadgeSizePadding[size]
			: `0.4rem 1.05rem`}
`;

const cssFontSize = css<BadgeProps>`
	${({ size }) =>
		size && isBadgeSizePadding(size) ? BadgeFontSize[size] : `0.75rem`}
`;

const cssBorder = css<BadgeProps>`
	${({ variant, theme }) =>
		variant &&
		`1px solid ${
			isThemeColorType(theme) ? ThemeColors[theme] : ThemeColors.primary
		}`}
`;

export const StyledBadge = styled.span<BadgeProps>`
	font-family: Poppins;
	display: inline-block;
	padding: ${cssPadding};
	font-size: ${cssFontSize};
	font-weight: 600;
	line-height: 1;
	color: ${({ variant, theme }) =>
		variant == 'outline' && isThemeColorType(theme)
			? ThemeColors[theme]
			: variant === 'filled' || !variant
			? cssColor
			: ThemeColors.primary};
	text-align: center;
	white-space: nowrap;
	vertical-align: baseline;
	border-radius: ${({ pill }) => (pill ? '50rem' : '0.25rem')};
	background-color: ${cssBgColor};
	border: ${cssBorder};

	&:empty {
		display: none;
	}
`;
