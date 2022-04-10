import React, { FC } from 'react';
import { useState } from 'react';
import { Toast } from 'react-bootstrap';
import dayjs from 'dayjs';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import {
	faCheckCircle,
	faTimesCircle,
	faCircleExclamation,
	faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import { NotificationItem } from '../NotificationsProvider/NotificationsProvider';

type NotificationProps = NotificationItem & {
	remove: (id: number | string) => void;
};

const defaultProps = {};

const propTypes = {};

const getBgType = (type: string) => {
	switch (type) {
		case 'success':
			return 'success';
		case 'error':
			return 'danger';
		case 'warning':
			return 'warning';
		case 'info':
			return 'info';
		default:
			return type;
	}
};

const getIconByType = (type: string) => {
	switch (type) {
		case 'success':
			return (
				<FaIcon icon={faCheckCircle} className="text-success" fontSize="1rem" />
			);
		case 'error':
			return (
				<FaIcon icon={faTimesCircle} className="text-danger" fontSize="1rem" />
			);
		case 'warning':
			return (
				<FaIcon
					icon={faCircleExclamation}
					className="text-warning"
					fontSize="1rem"
				/>
			);
		case 'info':
			return (
				<FaIcon icon={faCircleInfo} className="text-info" fontSize="1rem" />
			);
		default:
			return;
	}
};

const Notification: FC<NotificationProps> = ({
	id,
	title,
	message,
	type,
	isVisible,
	isAutoClose,
	timeout,
	createdAt,
	icon,
	remove,
}) => {
	const [show, setShow] = useState<boolean>(isVisible);
	return (
		<Toast
			show={show}
			delay={timeout}
			// bg={getBgType(type)}
			autohide={isAutoClose}
			onClose={() => {
				setShow(false);
				remove &&
					setTimeout(() => {
						remove(id);
					}, 1000);
			}}
		>
			<Toast.Header>
				<div className="me-2">{icon || getIconByType(type)}</div>
				<strong className="me-auto">{title || type}</strong>
				<small>{dayjs(createdAt).format('DD MMM YYYY, HH:MM')}</small>
			</Toast.Header>
			<Toast.Body>{message}</Toast.Body>
		</Toast>
	);
};

Notification.defaultProps = defaultProps;
Notification.propTypes = propTypes;
export default Notification;
