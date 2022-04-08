import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';
import { BootstrapThemeColorsType } from '../../theme/constants/BootstrapThemeColors';
import { UnstyledButtonProps } from './UnstyledButton/UnstyledButton';
import { LyteSizes } from '../../theme/types/LyteSizes';
import Spinner from '../Spinner/Spinner';

type LoaderPosition = 'left' | 'right';

type ButtonVariant = 'outline' | 'filled';

export type LyteButtonProps = UnstyledButtonProps & {
	isLoading?: boolean;
	loaderPosition?: LoaderPosition;
	loadingMessage?: React.ReactNode;
	ref?: React.Ref<HTMLButtonElement>;
	color?: BootstrapThemeColorsType;
	disabled?: boolean;
	variant?: ButtonVariant;
	radius?: LyteSizes | number;
};

const propTypes = {
	children: PropTypes.array,
	isLoading: PropTypes.bool,
	disabled: PropTypes.bool,
};

const defaultProps = {
	isLoading: false,
	loadingMessage: 'Something Loading...',
	loaderPosition: 'left' as LoaderPosition,
	color: 'primary' as BootstrapThemeColorsType,
	variant: 'filled' as ButtonVariant,
	size: 'md' as LyteSizes,
};

const LyteButton: React.FC<LyteButtonProps> = React.forwardRef<
	HTMLButtonElement,
	LyteButtonProps
>(
	(
		{ isLoading, loaderPosition, loadingMessage, children, disabled, ...rest },
		ref
	) => {
		const spinnerOnLeft = isLoading && loaderPosition === 'left';
		const spinnerOnRight = isLoading && loaderPosition === 'right';

		return (
			<StyledButton disabled={isLoading || disabled} {...rest} ref={ref}>
				{spinnerOnLeft && (
					<div style={{ marginRight: '0.5rem', display: 'inline-block' }}>
						<Spinner />
					</div>
				)}
				{isLoading ? loadingMessage : children}
				{spinnerOnRight && (
					<div style={{ marginLeft: '0.5rem', display: 'inline-block' }}>
						<Spinner />
					</div>
				)}
			</StyledButton>
		);
	}
);

LyteButton.displayName = 'Button';
LyteButton.defaultProps = defaultProps;
LyteButton.propTypes = propTypes;
export default LyteButton;
