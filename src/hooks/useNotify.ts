import { useContext } from 'react';
import { NotificationContext } from '../providers/NotificationsProvider/NotificationsProvider';

export default function useNotify() {
	return useContext(NotificationContext).notify;
}
