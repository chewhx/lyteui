import React, { DOMAttributes, FC, HTMLAttributes } from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import loadingGif from '../../images/LoadingBlue.gif';

const StyledOverlay = styled.div`
	position: fixed; /* Sit on top of the page content */
	display: block; /* Hidden by default */
	width: 100%; /* Full width (cover the whole page) */
	height: 100%; /* Full height (cover the whole page) */
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	opacity: 1;
	background-color: var(--bs-white); /* Black background with opacity */
	z-index: 900; /* Specify a stack order in case you're using a different order for other elements */
	text-align: center;
`;

const LoadingWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	color: white;
	transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
`;

export type LoadingOverlayProps = DOMAttributes<HTMLDivElement> &
	HTMLAttributes<HTMLDivElement> & {
		loadingMessage: string;
		messageProps: HTMLAttributes<HTMLParagraphElement>;
	};

const defaultProps = {
	loadingMessage: 'Loading...',
	messageProps: {
		style: {
			color: 'var(--bs-blue)',
		},
	},
};

const LoadingOverlay: FC<LoadingOverlayProps> = React.forwardRef<
	HTMLDivElement,
	LoadingOverlayProps
>(({ loadingMessage, messageProps, ...props }, ref) => {
	return (
		<StyledOverlay {...props} ref={ref}>
			<LoadingWrapper>
				<Image src={loadingGif} width={150} />
				<p className="h3 my-3" {...messageProps}>
					{loadingMessage || 'Loading...'}
				</p>
			</LoadingWrapper>
		</StyledOverlay>
	);
});

LoadingOverlay.defaultProps = defaultProps;
LoadingOverlay.displayName = 'LoadingOverlay';
export default LoadingOverlay;