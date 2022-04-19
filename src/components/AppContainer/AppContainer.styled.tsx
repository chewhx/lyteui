import styled from 'styled-components';
import { SidebarProps } from './AppContainer';

export const StyledAppContainerGrid = styled.div`
	position: relative;
	display: grid;
	grid-template-areas:
		'side top'
		'side main';
	grid-template-columns: auto 1fr;
	grid-template-rows: 85px auto;
	height: 100vh;
`;

export const StyledSidebar = styled.div<SidebarProps>`
	grid-area: side;
	background-color: #fff;
	width: 240px;
	/* z-index: 2; */
	box-shadow: ${({ isBelowBreakpoint }) =>
		isBelowBreakpoint ? 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' : 'none'};
	position: ${({ isBelowBreakpoint }) =>
		isBelowBreakpoint ? 'absolute' : 'relative'};
	height: ${({ isBelowBreakpoint }) => (isBelowBreakpoint ? '100vh' : 'auto')};
	left: ${({ isBelowBreakpoint }) => (isBelowBreakpoint ? '-300px' : '0px')};
`;

export const StyledTopbar = styled.div`
	grid-area: top;
	background-color: #fff;
`;

export const StyledMainContent = styled.div`
	grid-area: main;
	overflow: scroll;
	background-color: #f7f7f7;
`;
