export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","nothing.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-562341fd.js","imports":["start-562341fd.js","chunks/index-97917cf1.js","chunks/preload-helper-60cab3ee.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "+layout",
				pattern: /^\/\+layout\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/_layout.js')
			},
			{
				type: 'page',
				id: "bylaws",
				pattern: /^\/bylaws\/?$/,
				names: [],
				types: [],
				path: "/bylaws",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "calendar",
				pattern: /^\/calendar\/?$/,
				names: [],
				types: [],
				path: "/calendar",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "officers",
				pattern: /^\/officers\/?$/,
				names: [],
				types: [],
				path: "/officers",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "positions",
				pattern: /^\/positions\/?$/,
				names: [],
				types: [],
				path: "/positions",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "testing",
				pattern: /^\/testing\/?$/,
				names: [],
				types: [],
				path: "/testing",
				shadow: null,
				a: [0,7],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
