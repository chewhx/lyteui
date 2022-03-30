import React, { DOMAttributes, FC, HTMLAttributes, ReactNode } from 'react';
import {
	Button as BootstrapButton,
	ButtonProps as BootstrapButtonProps,
	Spinner,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

type LoaderPosition = 'left' | 'right';

export type LyteButtonProps = Omit<BootstrapButtonProps, 'children'> &
	DOMAttributes<HTMLButtonElement> &
	HTMLAttributes<HTMLButtonElement> & {
		isLoading?: boolean;
		loaderPosition?: LoaderPosition;
		loadingMessage?: ReactNode;
		ref?: React.Ref<HTMLButtonElement>;
	};

const propTypes = {
	children: PropTypes.any,
	isLoading: PropTypes.bool,
	disabled: PropTypes.bool,
};

const defaultProps = {
	children: 'Lyte Button',
	isLoading: false,
	loadingMessage: 'Something Loading...',
	loaderPosition: 'left' as LoaderPosition,
};

const LyteButton: FC<LyteButtonProps> = React.forwardRef<
	HTMLButtonElement,
	LyteButtonProps
>(({ isLoading, loaderPosition, loadingMessage, children, ...props }, ref) => {
	const spinnerOnLeft = isLoading && loaderPosition === 'left';
	const spinnerOnRight = isLoading && loaderPosition === 'right';

	return (
		<BootstrapButton
			disabled={isLoading || props.disabled}
			{...props}
			ref={ref}
		>
			{spinnerOnLeft && (
				<Spinner
					animation="border"
					size="sm"
					className="me-2"
					title="left-spinner"
				/>
			)}
			{isLoading ? loadingMessage : children}
			{spinnerOnRight && (
				<Spinner
					animation="border"
					size="sm"
					className="ms-2"
					title="right-spinner"
				/>
			)}
		</BootstrapButton>
	);
});

LyteButton.displayName = 'Button';
LyteButton.defaultProps = defaultProps;
LyteButton.propTypes = propTypes;
export default LyteButton;
