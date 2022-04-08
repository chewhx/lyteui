import styled, { keyframes } from 'styled-components';

const spinnerBorder = keyframes`
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
`;

export const StyledSpinner = styled.span`
	display: inline-block;
	width: 0.75rem;
	height: 0.75rem;
	vertical-align: -0.125em;
	border: 0.25em solid currentColor;
	border-right-color: transparent;
	border-radius: 50%;
	-webkit-animation: 0.75s linear infinite ${spinnerBorder};
	animation: 0.75s linear infinite ${spinnerBorder};
`;
