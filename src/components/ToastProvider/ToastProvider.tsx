import React from 'react';
import { Toaster, ToasterProps, ToastPosition } from 'react-hot-toast';
import Toast from '../Toast/Toast';

export type ToastProviderProps = Omit<ToasterProps, 'children'>;

const defaultProps = {
	position: 'top-right' as ToastPosition,
};

const ToastProvider: React.FC<ToastProviderProps> = ({ children, ...rest }) => {
	return (
		<>
			{children}
			<Toaster {...rest}>{(t) => <Toast toast={t} />}</Toaster>
		</>
	);
};

ToastProvider.defaultProps = defaultProps;
export default ToastProvider;
