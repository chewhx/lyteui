import styled from 'styled-components';
import getThemeColor from '../../theme/colors/getThemeColor';

export const StyledInputWrapper = styled.div`
	font-family: Poppins;
	width: 100%;
`;

export const StyledLabel = styled.label``;

export const StyledHelperText = styled.div`
	font-size: 0.85rem;
	margin: 0.2rem 0;
	color: ${getThemeColor('secondary')};
`;

export const StyledErrorMessage = styled.small`
  
`;