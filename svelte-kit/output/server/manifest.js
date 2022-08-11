export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-e868b15b.js","imports":["start-e868b15b.js","chunks/index-9337fb22.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js')
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
				id: "callback",
				pattern: /^\/callback\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/callback.js')
			},
			{
				type: 'page',
				id: "Navbar",
				pattern: /^\/Navbar\/?$/,
				names: [],
				types: [],
				path: "/Navbar",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				path: "/login",
				shadow: () => import('./entries/endpoints/login.js'),
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "menu",
				pattern: /^\/menu\/?$/,
				names: [],
				types: [],
				path: "/menu",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "quickscan",
				pattern: /^\/quickscan\/?$/,
				names: [],
				types: [],
				path: "/quickscan",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "vendor-finder",
				pattern: /^\/vendor-finder\/?$/,
				names: [],
				types: [],
				path: "/vendor-finder",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "welcome",
				pattern: /^\/welcome\/?$/,
				names: [],
				types: [],
				path: "/welcome",
				shadow: null,
				a: [0,8],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
