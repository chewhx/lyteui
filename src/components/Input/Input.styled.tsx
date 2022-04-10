import styled, { css } from 'styled-components';
import { FormRadiusSizes } from '../../theme/constants/RadiusSizes';
import { InputProps } from './Input';

const cssBorderRadius = css<InputProps>`
	${({ radius }) => (radius ? FormRadiusSizes[radius] : FormRadiusSizes.md)};
`;

const cssPadding = css<InputProps>`
	${({ inputSize }) =>
		inputSize === 'lg'
			? `0.75rem 1.15rem`
			: inputSize === 'md'
			? `0.5rem 0.85rem`
			: inputSize === 'sm'
			? `0.35rem 0.55rem`
			: `0.5rem 0.85rem`}
`;

const cssFontSize = css<InputProps>`
	${({ inputSize }) =>
		inputSize === 'lg'
			? `1.25rem`
			: inputSize === 'md'
			? `1rem`
			: inputSize === 'sm'
			? `0.875rem`
			: `1rem`}
`;

const cssIsValid = css`
	border-color: #198754;
	padding-right: 1.75em;
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
	background-repeat: no-repeat;
	background-position: right calc(0.375em + 0.1875rem) center;
	background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
	&:focus {
		border-color: #198754;
	}
`;

const cssIsInvalid = css`
	border-color: #dc3545;
	padding-right: 1.75em;
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
	background-repeat: no-repeat;
	background-position: right calc(0.375em + 0.1875rem) center;
	background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);

	&:focus {
		border-color: #dc3545;
	}
`;

export const StyledInput = styled.input<InputProps>`
	font-family: Poppins;
	display: block;
	width: ${({ fullWidth }) => (fullWidth ? '100%' : '200px')};
	padding: ${cssPadding};
	height: auto;
	font-size: ${cssFontSize};
	font-weight: 400;
	line-height: 1.5;
	color: #212529;
	background-color: #fff;
	background-clip: padding-box;
	border: 2px solid #ced4da;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border-radius: ${cssBorderRadius};
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	margin: auto;

	border: ${({ plaintext }) => plaintext && `solid transparent`};

	&[type='file'] {
		overflow: hidden;
	}
	&[type='file']:not(:disabled):not([readonly]) {
		cursor: pointer;
	}
	&:focus {
		color: #212529;
		background-color: #fff;
		border-color: #86b7fe;
		outline: 0;
		/* box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); */
	}
	&::-webkit-date-and-time-value {
		height: 1.5em;
	}
	&::-moz-placeholder {
		color: #6c757d;
		opacity: 1;
	}
	&::placeholder {
		color: #6c757d;
		opacity: 1;
	}
	&:disabled,
	&[readonly] {
		background-color: #e9ecef;
		opacity: 1;
	}
	&::-webkit-file-upload-button {
		display: none;
		padding: 0.375rem 0.75rem;
		margin: -0.375rem -0.75rem;
		-webkit-margin-end: 0.75rem;
		margin-inline-end: 0.75rem;
		color: #212529;
		background-color: #e9ecef;
		pointer-events: none;
		border-color: inherit;
		border-style: solid;
		border-width: 0;
		border-inline-end-width: 1px;
		border-radius: 0;
		-webkit-transition: color 0.15s ease-in-out,
			background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
			box-shadow 0.15s ease-in-out;
		transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
			border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	}
	&::file-selector-button {
		display: none;
		padding: 0.375rem 0.75rem;

		margin: -0.375rem -0.75rem;
		-webkit-margin-end: 0.75rem;
		margin-inline-end: 0.75rem;
		color: #212529;
		background-color: #e9ecef;
		pointer-events: none;
		border-color: inherit;
		border-style: solid;
		border-width: 0;
		border-inline-end-width: 1px;
		border-radius: ${cssBorderRadius};
		transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
			border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	}

	&:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
		background-color: #dde0e3;
	}
	&:hover:not(:disabled):not([readonly])::file-selector-button {
		background-color: #dde0e3;
	}
	&::-webkit-file-upload-button {
		padding: 0.375rem 0.75rem;
		margin: -0.375rem -0.75rem;
		-webkit-margin-end: 0.75rem;
		margin-inline-end: 0.75rem;
		color: #212529;
		background-color: #e9ecef;
		pointer-events: none;
		border-color: inherit;
		border-style: solid;
		border-width: 0;
		border-inline-end-width: 1px;
		border-radius: 0;
		-webkit-transition: color 0.15s ease-in-out,
			background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
			box-shadow 0.15s ease-in-out;
		transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
			border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	}

	&:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
		background-color: #dde0e3;
	}

	&::-webkit-color-swatch {
		width: 3rem;
		height: 0.85rem;
	}

	&::-moz-color-swatch {
		width: 3rem;
		height: 0.85rem;
	}

	${({ isValid }) => isValid && cssIsValid}
	${({ isInvalid }) => isInvalid && cssIsInvalid}
`;
