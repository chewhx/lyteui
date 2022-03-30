import React, { DOMAttributes, FC } from 'react';
import {
	Badge as BootstrapBadge,
	BadgeProps as BootstrapBadgeProps,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export type LyteBadgeProps = Omit<BootstrapBadgeProps, 'children'> & {
	size?: 'md' | 'lg';
};

const propTypes = {
	children: PropTypes.any,
};

const defaultProps = {
	children: 'Badge',
};

const LyteBadge: FC<LyteBadgeProps & DOMAttributes<HTMLSpanElement>> =
	React.forwardRef<HTMLSpanElement, LyteBadgeProps>(
		({ size, ...props }, ref) => {
			return <BootstrapBadge size={size} {...props} ref={ref} />;
		}
	);

const StyledLyteBadge = styled(LyteBadge)`
	letter-spacing: 0.03rem;
	padding: ${({ size }) =>
		size === 'md' ? '1.05em 1.95em' : size === 'lg' ? '1.25em 2.25em' : ''};
	font-size: ${({ size }) =>
		size === 'md' ? '0.85em' : size === 'lg' ? '1em' : ''};
`;

LyteBadge.displayName = 'span';
LyteBadge.defaultProps = defaultProps;
LyteBadge.propTypes = propTypes;
export default StyledLyteBadge;
