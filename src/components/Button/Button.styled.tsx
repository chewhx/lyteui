import styled from 'styled-components';
import darkenColor from '../../theme/colors/darkenColor';
import getThemeColor from '../../theme/colors/getThemeColor';
import { ThemeColorsType } from '../../theme/colors/ThemeColors.type';
import { ButtonProps } from './Button';
import { ButtonVariant } from './Button.types';
import { StyledUnStyledButton } from './UnstyledButton/UnstyledButton.styled';
import getButtonRadius from './getButtonRadius';

const getButtonThemeColors = (bg: ThemeColorsType, variant: ButtonVariant) => {
	if (variant === 'filled') {
		return `
      background-color: ${getThemeColor(bg)};
      color: ${bg === 'light' ? getThemeColor('dark') : getThemeColor('light')};
      &:hover {
        background-color: ${darkenColor(getThemeColor(bg), 0.1)};
      }
    `;
	}
	if (variant === 'outline') {
		return `
      background-color: ${getThemeColor('white')};
      color: ${getThemeColor(bg)};
      border: 1.5px solid ${getThemeColor(bg)};
      &:hover {
        background-color: ${getThemeColor(bg)};
        color: ${
					bg === 'light' ? getThemeColor('dark') : getThemeColor('white')
				};
      }
    `;
	}
};

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
	border-radius: ${({ radius }) => radius && getButtonRadius(radius)};
	${({ bg, variant }) => bg && variant && getButtonThemeColors(bg, variant)};
`;
