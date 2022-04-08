import { colord } from 'colord';

export default function (color: string) {
	return colord(color).isValid();
}
