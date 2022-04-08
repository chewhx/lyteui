import { AvatarProps } from './Avatar';
import styled from 'styled-components';
import { AvatarSizes, FontSizes, RadiusSizes } from './Avatar.enum';
import { BootstrapThemeColors } from '../../theme/constants/BootstrapThemeColors';

export const StyledAvatar = styled.div<AvatarProps>`
	display: inline-flex;
	width: ${({ avatarSize }) => {
		return avatarSize ? AvatarSizes[avatarSize] : AvatarSizes.md;
	}};
	height: ${({ avatarSize }) => {
		return avatarSize ? AvatarSizes[avatarSize] : AvatarSizes.md;
	}};
	font-size: ${({ avatarSize }) => {
		return avatarSize ? FontSizes[avatarSize] : FontSizes.md;
	}};
	justify-content: center;
	align-items: center;
	background-color: ${({ variant }) =>
		variant ? BootstrapThemeColors[variant] : BootstrapThemeColors.secondary};
	overflow: hidden;
	color: ${({ variant }) =>
		variant === 'dark'
			? BootstrapThemeColors.light
			: BootstrapThemeColors.dark};
	border-radius: ${({ radiusSize }) => {
		return radiusSize ? RadiusSizes[radiusSize] : '0%';
	}};

	background-image: ${({ img }) => img && `url(${img})`};
`;

export const StyledAvatarImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
