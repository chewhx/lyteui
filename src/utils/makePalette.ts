import { colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';

extend([mixPlugin]);

export default function (mainColor: string) {
	if (!colord(mainColor).isValid) {
		throw Error(`${mainColor} is not a valid color value`);
	}

	return {
		100: colord(mainColor).mix('#ffffff', 0.8).toHex(),
		200: colord(mainColor).mix('#ffffff', 0.6).toHex(),
		300: colord(mainColor).mix('#ffffff', 0.4).toHex(),
		400: colord(mainColor).mix('#ffffff', 0.2).toHex(),
		500: colord(mainColor).toHex(),
		600: colord(mainColor).mix('#000000', 0.2).toHex(),
		700: colord(mainColor).mix('#000000', 0.4).toHex(),
		800: colord(mainColor).mix('#000000', 0.6).toHex(),
		900: colord(mainColor).mix('#000000', 0.8).toHex(),
	};
}
