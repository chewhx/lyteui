import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';
import { UnstyledButtonProps } from './UnstyledButton/UnstyledButton';
import Spinner from '../Spinner/Spinner';
import { ButtonRadius, ButtonVariant, LoaderPosition } from './Button.types';
import { ThemeColorsType } from '../../theme/colors/ThemeColors.type';
import { ButtonSize } from './UnstyledButton/UnstyledButton.types';

export type ButtonProps = Omit<UnstyledButtonProps, 'color'> & {
	/**Shows a spinner and disables the button */
	isLoading?: boolean;
	/**Disables the button */
	disabled?: boolean;
	/**Position the spinner */
	loaderPosition?: LoaderPosition;
	/**Shown when button is in loading state */
	loadingMessage?: React.ReactNode;
	/**Renders a different variant */
	variant?: ButtonVariant;
	/**Adjusts the border-radius */
	radius?: ButtonRadius;
	/**Color button according to theme colors */
	bg?: ThemeColorsType;
	/**Adjusts overall size */
	size?: ButtonSize;
	/**Displays an icon on the left */
	icon?: React.ReactNode;
	/**Props applied to spinner div */
	loaderWrapperProps?: React.HTMLAttributes<HTMLDivElement>;
	/**Props applied to icon div */
	iconWrapperProps?: React.HTMLAttributes<HTMLDivElement>;
};

const propTypes = {
	isLoading: PropTypes.bool,
	disabled: PropTypes.bool,
	children: PropTypes.any,
	loaderPosition: PropTypes.oneOf<LoaderPosition>([]),
	loadingMessage: PropTypes.string,
	variant: PropTypes.oneOf<ButtonVariant>([]),
	radius: PropTypes.oneOf<ButtonRadius>([]),
	bg: PropTypes.oneOf<ThemeColorsType>([]),
	size: PropTypes.oneOf<ButtonSize>([]),
	icon: PropTypes.node,
	loaderWrapperProps: PropTypes.object,
	iconWrapperProps: PropTypes.object,
};

const defaultProps = {
	loadingMessage: 'Loading...',
	loaderPosition: 'left' as LoaderPosition,
	bg: 'primary' as ThemeColorsType,
	variant: 'filled' as ButtonVariant,
	radius: 'md' as ButtonRadius,
	size: 'md' as ButtonSize,
};

const Button: React.FC<ButtonProps> = React.forwardRef<
	HTMLButtonElement,
	ButtonProps
>(
	(
		{
			isLoading,
			loaderPosition,
			loadingMessage,
			children,
			disabled,
			icon,
			variant,
			bg,
			loaderWrapperProps,
			iconWrapperProps,
			...rest
		},
		ref
	) => {
		const spinnerOnLeft = isLoading && loaderPosition === 'left';
		const spinnerOnRight = isLoading && loaderPosition === 'right';
		const showIcon = !isLoading && icon;

		return (
			<StyledButton
				disabled={isLoading || disabled}
				bg={bg}
				variant={variant}
				{...rest}
				ref={ref}
			>
				{showIcon && (
					<div
						style={{ marginRight: '0.5rem', display: 'inline-block' }}
						{...iconWrapperProps}
					>
						{icon}
					</div>
				)}
				{spinnerOnLeft && (
					<div
						style={{ marginRight: '0.5rem', display: 'inline-block' }}
						{...loaderWrapperProps}
					>
						<Spinner size="sm" color={variant === 'outline' ? bg : 'light'} />
					</div>
				)}
				{isLoading ? loadingMessage : children}
				{spinnerOnRight && (
					<div
						style={{ marginLeft: '0.5rem', display: 'inline-block' }}
						{...loaderWrapperProps}
					>
						<Spinner size="sm" color={variant === 'outline' ? bg : 'light'} />
					</div>
				)}
			</StyledButton>
		);
	}
);

Button.displayName = 'Button';
Button.defaultProps = defaultProps;
Button.propTypes = propTypes;
export default Button;
