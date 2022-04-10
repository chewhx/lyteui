import styled from 'styled-components';
import { ThemeColors } from '../../theme/constants/ThemeColors';
import isThemeColorType from '../../utils/isThemeColorType';
import { AvatarProps } from './Avatar';
import { AvatarSizes, FontSizes, RadiusSizes } from './Avatar.enum';

export const StyledAvatar = styled.div<AvatarProps>`
	font-family: Poppins;
	display: inline-flex;
	width: ${({ size }) => {
		return size ? AvatarSizes[size] : AvatarSizes.md;
	}};
	height: ${({ size }) => {
		return size ? AvatarSizes[size] : AvatarSizes.md;
	}};
	font-size: ${({ size }) => {
		return size ? FontSizes[size] : FontSizes.md;
	}};
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) =>
		theme && isThemeColorType(theme)
			? ThemeColors[theme]
			: ThemeColors.secondary};
	overflow: hidden;
	color: ${({ theme }) =>
		theme === 'dark' ? ThemeColors.light : ThemeColors.dark};
	border-radius: ${({ radius }) => {
		return radius ? RadiusSizes[radius] : '0%';
	}};

	background-image: ${({ img }) => img && `url(${img})`};
`;

export const StyledAvatarImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
