import styled from 'styled-components';
import { AvatarProps } from './Avatar';
import getAvatarFontSizes from './functions/getAvatarFontSizes';
import getAvatarRadius from './functions/getAvatarRadius';
import getAvatarSizes from './functions/getAvatarSizes';
import getAvatarThemeColors from './functions/getAvatarThemeColors';

export const StyledAvatar = styled.div<AvatarProps>`
	/* Background and Color */
	${({ bg }) => bg && getAvatarThemeColors(bg)}

	/* Height and Width */
	${({ size }) => size && getAvatarSizes(size)}
  
	font-size: ${({ size }) => size && getAvatarFontSizes(size)};

	border-radius: ${({ radius }) => radius && getAvatarRadius(radius)};

	font-family: Poppins;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	background-image: ${({ img }) => img && `url(${img})`};
`;

export const StyledAvatarImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
