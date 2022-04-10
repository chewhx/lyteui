import { useContext } from 'react';
import { NotificationContext } from '../components/NotificationsProvider/NotificationsProvider';

export default function useNotifications() {
	return useContext(NotificationContext).notifications;
}
