import { colord } from 'colord';

export default (color: string, amount: number) =>
	colord(color).darken(amount).toHex();
