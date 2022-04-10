import React from 'react';
import ReactDOM from 'react-dom';
import Image from '../Image/Image';
import loadingGif from '../../../assets/images/LoadingBlue.gif';
import {
	LoadingWrapper,
	Message,
	StyledOverlay,
} from './LoadingOverlay.styled';
import PropTypes from 'prop-types';

export type LoadingOverlayProps = React.DOMAttributes<HTMLDivElement> &
	React.HTMLAttributes<HTMLDivElement> & {
		/**Message below the wink animation */
		message?: string;
		/**Props passed to message paragraph element */
		messageProps?: React.HTMLAttributes<HTMLParagraphElement>;
		/**Props passed to wrapper div element containing animation and message */
		wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
		/**Props passed to overlay div element */
		overlayProps?: React.HTMLAttributes<HTMLDivElement>;
		/**Make loader fullscreen */
		fullscreen?: boolean;
		/**Adjust opacity of the loader */
		opacity?: number;
	};

const propTypes = {
	message: PropTypes.string,
	messageProps: PropTypes.object,
	wrapperProps: PropTypes.object,
	overlayProps: PropTypes.object,
	fullscreen: PropTypes.bool,
	opacity: PropTypes.number,
};
const defaultProps = {};

const LoadingOverlay: React.FC<LoadingOverlayProps> = React.forwardRef<
	HTMLDivElement,
	LoadingOverlayProps
>(
	(
		{
			message,
			messageProps,
			wrapperProps,
			overlayProps,
			fullscreen: fullScreen,
		},
		ref
	) => {
		const body = document.body;
		const container = document.createElement('div');
		container.setAttribute('id', `loading-overlay-${Date.now()}`);
		body.appendChild(container);

		const content = (
			<StyledOverlay {...overlayProps} fullscreen={fullScreen} ref={ref}>
				<LoadingWrapper {...wrapperProps}>
					<Image src={loadingGif} fluid />
					{message && <Message {...messageProps}>{message}</Message>}
				</LoadingWrapper>
			</StyledOverlay>
		);

		return !fullScreen ? content : ReactDOM.createPortal(content, container);
	}
);

LoadingOverlay.propTypes = propTypes;
LoadingOverlay.defaultProps = defaultProps;
LoadingOverlay.displayName = 'LoadingOverlay';
export default LoadingOverlay;
