// Make the NodeCG API available to our Javascript files.  Copied from GDQ layouts.
'use strict';

let context;
module.exports = {
	get() {
		return context;
	},
	set(ctx) {
		context = ctx;
	}
};
