import { useContext } from 'react';
import { NotificationContext } from '../providers/NotificationsProvider/NotificationsProvider';

export default function useNotifications() {
	return useContext(NotificationContext).notifications;
}
