import getInputBorderRadius from '../Input/functions/getInputBorderRadius';
import getInputFontSize from '../Input/functions/getInputFontSize';
import getInputPadding from '../Input/functions/getInputPadding';
import styled, { css } from 'styled-components';
import { SelectInputProps } from './SelectInput';

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

export const StyledSelect = styled.select<
	Pick<
		SelectInputProps,
		'inputSize' | 'radius' | 'fullWidth' | 'isInvalid' | 'isValid'
	>
>`
	font-family: Poppins;
	display: block;
	width: ${({ fullWidth }) => (fullWidth ? '100%' : '200px')};
	padding: ${({ inputSize }) => inputSize && getInputPadding(inputSize)};
	height: auto;
	font-size: ${({ inputSize }) => inputSize && getInputFontSize(inputSize)};
	font-weight: 400;
	line-height: 1.5;
	color: #212529;
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
	background-repeat: no-repeat;
	background-position: right 0.75rem center;
	background-size: 16px 12px;
	background-color: #fff;
	background-clip: padding-box;
	border: 1.5px solid #ced4da;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border-radius: ${({ radius }) => radius && getInputBorderRadius(radius)};
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	&:focus {
		color: #212529;
		background-color: #fff;
		border-color: #86b7fe;
		outline: 0;
		/* box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); */
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

	${({ isValid }) => isValid && cssIsValid}
	${({ isInvalid }) => isInvalid && cssIsInvalid}
`;
