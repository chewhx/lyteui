import React from 'react';
import styled from 'styled-components';
import { toast as _toast, ToastBar, Toast } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const StyledToastBar = styled.div`
	width: 350px;
	max-width: 100%;
	font-size: 0.875rem;
	pointer-events: auto;
	background-color: rgba(255, 255, 9, 0.85);
	/* background-color: rgba(255, 255, 255, 0.85); */
	background-clip: padding-box;
	border: 1px solid rgba(0, 0, 0, 0.1);
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	border-radius: 0.25rem;
`;

export type _ToastProps = Toast;

const _Toast = ({ toast, ...rest }: { toast: Toast }) => {
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

export default _Toast;
