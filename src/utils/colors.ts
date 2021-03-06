import { Color, SortType } from './types';

interface HslSortObject {
	color: Color;
	index: number;
}

type RgbSorter = { [key in SortType]?: (color1: Color, color2: Color) => number };
type HslSorter = { [key in SortType]?: (color1: HslSortObject, color2: HslSortObject) => number };

// Generate rgb values
// 256 is not a valid rgb value
// Will be resolved to 255 by the browser
export function getRgbValues(start: number = 8, increment: number = 8, limit: number = 256): Color[] {
	let colors: Color[] = [];

	for (let red = start; red <= limit; red += increment) {
		for (let blue = start; blue <= limit; blue += increment) {
			for (let green = start; green <= limit; green += increment) {
				const rgb: Color = [ red, green, blue ];
				colors.push(rgb);
			}
		}
	}
	return colors;
}

// Source: https://stackoverflow.com/a/11923973/807838
export function rgbToHsl(color: Color): Color {
	const [ r, g, b ] = color.map((c) => (c /= 256));

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);

	let [ h, s, l ]: Color = Array(3).fill((max + min) / 2);

	if (max === min) {
		h = s = 0; // achromatic
	} else {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}

		h /= 6;
	}

	return [ h, s, l ];
}

// Source: https://stackoverflow.com/a/596243/807838
function rgbToLuminance([ red, green, blue ]: Color): number {
	return Math.sqrt(0.299 * Math.pow(red, 2) + 0.587 * Math.pow(green, 2) + 0.114 * Math.pow(blue, 2));
}

const rgbSorter: RgbSorter = {
	shuffle() {
		return Math.random() - 0.5;
	},
	luminance(c1, c2) {
		return rgbToLuminance(c1) - rgbToLuminance(c2);
	}
};

const hslSorter: HslSorter = {
	hue(c1, c2) {
		if (c1.color[0] > c2.color[0]) return 1;
		if (c1.color[0] < c2.color[0]) return -1;
		return 0;
	},
	sat(c1, c2) {
		if (c1.color[1] > c2.color[1]) return 1;
		if (c1.color[1] < c2.color[1]) return -1;
		return 0;
	},
	lightness(c1, c2) {
		if (c1.color[2] > c2.color[2]) return 1;
		if (c1.color[2] < c2.color[2]) return -1;
		return 0;
	}
};

export function sortColors(sortType: SortType, colors: Color[]) {
	switch (sortType) {
		case 'luminance':
		case 'shuffle':
			return [ ...colors ].sort(rgbSorter[sortType]);

		case 'hue':
		case 'sat':
		case 'lightness':
			return colors
				.map((c, i) => ({ color: rgbToHsl(c), index: i })) // track index for after sort
				.sort(hslSorter[sortType])
				.map((c) => colors[c.index]);

		default:
			return colors;
	}
}
