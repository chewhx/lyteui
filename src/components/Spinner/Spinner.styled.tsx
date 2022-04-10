import styled, { css, keyframes } from 'styled-components';
import { ThemeColors } from '../../theme/constants/ThemeColors';
import { ThemeColorsType } from '../../theme/types/ThemeColors';
import isThemeColorType from '../../utils/isThemeColorType';
import { SpinnerProps } from './Spinner';

function isOfBootstrapThemeColors(key: string): key is ThemeColorsType {
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

const spinnerBorder = keyframes`
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
`;

const cssWidth = css<SpinnerProps>`
	${({ size }) =>
		size === 'lg'
			? '1rem'
			: size === 'sm'
			? '0.6rem'
			: size === 'xl'
			? '1.25rem'
			: '0.75rem'}
`;

const cssColor = css<SpinnerProps>`
	${({ theme }) =>
		theme && isThemeColorType(theme)
			? ThemeColors[theme]
			: `currentColor`}
`;

export const StyledSpinner = styled.span<SpinnerProps>`
	display: inline-block;
	width: ${cssWidth};
	height: ${cssWidth};
	vertical-align: -0.125em;
	border: 0.25em solid ${cssColor};
	border-right-color: transparent;
	border-radius: 50%;
	-webkit-animation: 0.75s linear infinite ${spinnerBorder};
	animation: 0.75s linear infinite ${spinnerBorder};
`;
