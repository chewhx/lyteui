import React, { FC } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// import '../../scss/index.scss';
import NotificationsProvider from '../NotificationsProvider/NotificationsProvider';
import Button from '../Button/Button';
import useNotify from '../../hooks/useNotify';
import useNotifications from '../../hooks/useNotifications';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default {
	title: 'Feedback/Notifications',
	component: NotificationsProvider,
} as ComponentMeta<typeof NotificationsProvider>;

const Basic = () => {
	const notify = useNotify();
	const notifications = useNotifications();
	return (
		<div>
			<Button
				variant="warning"
				className="ms-5"
				onClick={() =>
					notify.append({
						type: 'warning',
						message:
							'Fusce id.Fusce id.Fusce id.Nulla vitae nulla at nisi tincidunt vestibulum nec eget nisi. Donec congue nunc et facilisis ultrices. Pellentesque ac lectus quis massa eleifend porta id sed mauris. Mauris accumsan lectus a tincidunt maximus.',
					})
				}
			>
				Warning
			</Button>
			<Button
				variant="success"
				className="ms-5"
				onClick={() =>
					notify.append({
						type: 'success',
						message:
							'Fusce id.Fusce id.Fusce id.Nulla vitae nulla at nisi tincidunt vestibulum nec eget nisi. Donec congue nunc et facilisis ultrices. Pellentesque ac lectus quis massa eleifend porta id sed mauris. Mauris accumsan lectus a tincidunt maximus.',
					})
				}
			>
				Success
			</Button>
			<Button
				variant="danger"
				className="ms-5"
				onClick={() =>
					notify.append({
						type: 'error',
						title: 'Erroron',
						isAutoClose: false,
						message: 'Morbi pellentesque.Fusce id.',
					})
				}
			>
				Error
			</Button>
			<Button
				variant="info"
				className="ms-5"
				onClick={() =>
					notify.append({
						type: 'info',
						message: 'Morbi pellentesque.Morbi pellentesque.',
						isAutoClose: false,
					})
				}
			>
				Info
			</Button>
			<Button
				variant="primary"
				className="ms-5"
				onClick={() =>
					notify.append({
						message: 'Morbi pellentesque.Morbi pellentesque.',
						isAutoClose: false,
						icon: <FaIcon icon={faUser} />,
					})
				}
			>
				Icon
			</Button>
			<pre>{JSON.stringify(notifications, null, 2)}</pre>
		</div>
	);
};

export const Provider = () => (
	<NotificationsProvider>
		<Basic />
	</NotificationsProvider>
);
