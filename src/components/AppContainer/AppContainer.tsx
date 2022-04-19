import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import {
	StyledAppContainerGrid,
	StyledMainContent,
	StyledSidebar,
	StyledTopbar,
} from './AppContainer.styled';
import { Transition, TransitionStatus } from 'react-transition-group';
import useOnClickOutside, { Handler } from '../../hooks/useOnClickOutside';

export type SidebarProps = React.HTMLAttributes<HTMLDivElement> & {
	breakpoint?: number;
	isBelowBreakpoint?: boolean;
	show: boolean;
	close: Handler;
};

const Sidebar: React.FC<SidebarProps> = ({
	breakpoint = 768,
	show,
	close,
	children,
	...rest
}) => {
	const isBelowBreakpoint = useMediaQuery(`(max-width:${breakpoint}px)`);

	const duration = 150;

	const defaultStyles = {
		transition: `left ${duration}ms ease-out`,
		opacity: 1,
	};

	const transitionStyles: Record<
		TransitionStatus,
		{ opacity?: number; left?: string }
	> = {
		entering: { opacity: 0.95, left: '-240px' },
		entered: { opacity: 0.95, left: '0px' },
		exiting: { opacity: 1 },
		exited: { opacity: 1 },
		unmounted: {},
	};

	const _thisRef = React.createRef<HTMLDivElement>();
	useOnClickOutside(_thisRef, close);
	return (
		<Transition in={show} timeout={duration}>
			{(state: TransitionStatus) => (
				<StyledSidebar
					ref={_thisRef}
					close={close}
					show={show}
					isBelowBreakpoint={isBelowBreakpoint}
					style={{
						...defaultStyles,
						...transitionStyles[state as TransitionStatus],
					}}
					{...rest}
				>
					{children}
				</StyledSidebar>
			)}
		</Transition>
	);
};

const Topbar: React.FC = ({ children }) => {
	return <StyledTopbar>{children}</StyledTopbar>;
};

export type AppContainerProps = React.HTMLAttributes<HTMLDivElement> & {
	breakpoint?: number;
};

const defaultProps = {};

const AppContainer: React.FC<AppContainerProps> = () => {
	const [show, setShow] = React.useState<boolean>(false);

	const close = () => setShow((p) => p === true && false);

	return (
		<StyledAppContainerGrid>
			<Sidebar show={show} close={close}>
				SideBar
			</Sidebar>
			<Topbar>
				<button onClick={() => setShow(true)}>toggle</button>
				<p>TopBar</p>
			</Topbar>
			<StyledMainContent>
				<p>AppContainer</p>
			</StyledMainContent>
		</StyledAppContainerGrid>
	);
};

AppContainer.defaultProps = defaultProps;

export default AppContainer;
