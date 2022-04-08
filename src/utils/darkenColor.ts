import { colord } from 'colord';

export default function (color: string, amount: number) {
	return colord(color).darken(amount).toHex();
}
