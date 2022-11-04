import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: false
		})
	}
	// kit: {
	// 	// default options are shown
	// 	adapter: adapter({
	// 		// if true, will create a Netlify Edge Function rather
	// 		// than using standard Node-based functions
	// 		edge: false,
	//
	// 		// if true, will split your app into multiple functions
	// 		// instead of creating a single one for the entire app.
	// 		// if `edge` is true, this option cannot be used
	// 		split: false
	// 	})
	// }
};

export default config;
