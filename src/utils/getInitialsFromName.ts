import voca from 'voca';

export default function (name: string) {
	const words: string[] = voca(name).chain().words().value();
	if (words.length > 1) {
		return `${words[0][0]}${words[1][0]}`.toUpperCase();
	}
	return `${words[0][0]}${words[0][1]}`.toUpperCase();
}
