import { DefaultSizes } from '../theme/types/DefaultSizes';

export default function (key: string): key is DefaultSizes {
	return ['xs', 'sm', 'md', 'lg', 'xl'].includes(key);
}
