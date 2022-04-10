import styled from 'styled-components';
import { LoadingOverlayProps } from './LoadingOverlay';

export const StyledOverlay = styled.div<LoadingOverlayProps>`
	position: ${({ fullscreen }) => (fullscreen ? 'fixed' : 'relative')};
	display: flex; /* Hidden by default 
	width: 100%; /* Full width (cover the whole page) */
	height: 100%; /* Full height (cover the whole page) */
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	opacity: ${({ opacity }) => (opacity ? opacity : 1)};
	background-color: white;
	z-index: 900;
	text-align: center;
	justify-content: center;
	align-items: center;
`;

export const LoadingWrapper = styled.div<LoadingOverlayProps>`
	max-width: 200px;
	min-width: 50px;
	width: 30%;
`;

export const Message = styled.p`
	font-family: Poppins;
	font-weight: 700;
	letter-spacing: 0.02rem;
`;
