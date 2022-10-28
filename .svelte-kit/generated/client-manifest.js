export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\runtime\\components\\layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\bylaws.svelte"),
	() => import("..\\..\\src\\routes\\calendar.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\officers.svelte"),
	() => import("..\\..\\src\\routes\\positions.svelte"),
	() => import("..\\..\\src\\routes\\testing.svelte")
];

export const dictionary = {
	"": [[0, 4], [1]],
	"bylaws": [[0, 2], [1]],
	"calendar": [[0, 3], [1]],
	"officers": [[0, 5], [1]],
	"positions": [[0, 6], [1]],
	"testing": [[0, 7], [1]]
};