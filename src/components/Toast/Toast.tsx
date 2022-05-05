import React from 'react';
import { toast as _toast, ToastBar, Toast } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export type _ToastProps = {
	toast: Toast;
};

const _Toast: React.FC<_ToastProps> = ({ toast, ...rest }) => {
	return (
		<ToastBar toast={toast} {...rest} style={{ width: '350px' }}>
			{({ icon, message }) => (
				<>
					{icon}
					{message}
					{toast.type !== 'loading' && (
						<FontAwesomeIcon
							icon={faTimes}
							fontSize="1.5rem"
							style={{
								cursor: 'pointer',
							}}
							onClick={() => _toast.dismiss(toast.id)}
						/>
					)}
				</>
			)}
		</ToastBar>
	);
};

_Toast.displayName = 'Toast';
export default _Toast;
