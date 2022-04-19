import React, { FC } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// import '../../scss/index.scss';
import NotificationsProvider from '../NotificationsProvider/NotificationsProvider';
import Button from '../Button/Button';
import useNotify from '../../hooks/useNotify';
import useNotifications from '../../hooks/useNotifications';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from '../../theme';
import toast, { Toaster, useToaster } from 'react-hot-toast';
import Toast from '../Toast/Toast';
import ToastProvider from '../ToastProvider/ToastProvider';

export default {
	title: 'Feedback/Notifications',
	component: NotificationsProvider,
} as ComponentMeta<typeof NotificationsProvider>;

const Basic = () => {
	return (
		<div>
			<Button
				theme="success"
				className="ms-5"
				onClick={() => toast.success('hello')}
			>
				Success
			</Button>
			<Button
				theme="danger"
				className="ms-5"
				onClick={() => toast.error('hello')}
			>
				Error
			</Button>
			<Button
				theme="info"
				className="ms-5"
				onClick={() =>
					toast.promise(
						(async (n: number) => {
							const awaitTimeout = (delay: number) =>
								new Promise((resolve) => setTimeout(resolve, delay));
							await awaitTimeout(2000);
							if (n > 100) {
								return true;
							} else {
								throw Error();
							}
						})(155),
						{
							loading: 'running...',
							success: 'Got it',
							error: 'Fail',
						}
					)
				}
			>
				Info
			</Button>
			{/* <pre>{JSON.stringify(notifications, null, 2)}</pre> */}
		</div>
	);
};

export const Provider = () => {
	return (
		<ThemeProvider>
			<ToastProvider toastOptions={{ duration: 10000 }}>
				<Basic />
			</ToastProvider>
		</ThemeProvider>
	);
};
