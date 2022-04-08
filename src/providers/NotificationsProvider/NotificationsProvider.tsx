import React, { createContext, FC, ReactNode, useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import { ToastPosition } from 'react-bootstrap/esm/ToastContainer';
import { Optional } from '../../utils/types';
import Notification from '../../components/Notification/Notification';

export type NotificationItem = {
	id: number | string;
	type: 'success' | 'error' | 'warning' | 'info' | string;
	title: string;
	message: string;
	isVisible: boolean;
	isAutoClose: boolean;
	timeout: number;
	createdAt: Date;
	icon: ReactNode;
};

type NotificationsProviderProps = {
	defaultTimeout: number;
	position: ToastPosition;
};

const defaultProps = {
	defaultTimeout: 5000,
	position: 'bottom-end' as ToastPosition,
};
const propTypes = {};

export type NotificationContextType = {
	notify: {
		append: (
			opts: Optional<
				Omit<NotificationItem, 'id'>,
				| 'title'
				| 'timeout'
				| 'isVisible'
				| 'isAutoClose'
				| 'type'
				| 'createdAt'
				| 'icon'
			>
		) => void;
		remove: (id: number | string) => void;
		pop: () => void;
	};
	notifications: NotificationItem[];
};

export const NotificationContext = createContext<NotificationContextType>({
	notify: {
		append: () => {
			return;
		},
		remove: () => {
			return;
		},
		pop: () => {
			return;
		},
	},
	notifications: [],
});

const NotificationsProvider: FC<NotificationsProviderProps> = ({
	children,
	defaultTimeout,
	position,
}) => {
	const [notifications, setNotifications] = useState<NotificationItem[]>([]);

	const notify = {
		append: (
			opts: Optional<
				Omit<NotificationItem, 'id'>,
				| 'title'
				| 'timeout'
				| 'isVisible'
				| 'isAutoClose'
				| 'type'
				| 'createdAt'
				| 'icon'
			>
		) => {
			const notificationItem: NotificationItem = {
				id: Date.now(),
				type: opts.type || 'info',
				title: opts.title || '',
				message: opts.message,
				isAutoClose: opts.isAutoClose === undefined ? true : opts.isAutoClose,
				isVisible: true,
				timeout: opts.timeout || defaultTimeout,
				createdAt: new Date(),
				icon: opts.icon || null,
			};
			setNotifications((p) => [notificationItem, ...p]);
		},
		remove: (id: number | string) => {
			setNotifications((p) => (!p.length ? [] : p.filter((e) => e.id !== id)));
		},
		pop: () => {
			setNotifications((p) => (p.length ? p.slice(0, -1) : []));
		},
	};

	const value: NotificationContextType = { notifications, notify };

	return (
		<NotificationContext.Provider value={value}>
			{children}
			<ToastContainer position={position}>
				{notifications.map((e) => (
					<Notification key={e.id} {...e} remove={notify.remove} />
				))}
			</ToastContainer>
		</NotificationContext.Provider>
	);
};

NotificationsProvider.defaultProps = defaultProps;
NotificationsProvider.propTypes = propTypes;

export default NotificationsProvider;
