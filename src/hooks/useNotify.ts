import { useContext } from 'react';
import { NotificationContext } from '../components/NotificationsProvider/NotificationsProvider';

export default function useNotify() {
	return useContext(NotificationContext).notify;
}
