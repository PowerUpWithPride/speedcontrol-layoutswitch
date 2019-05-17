'use strict';
let nodecgAPIContext = require('./utils/nodecg-api-context');

module.exports = function(nodecg) {
    // Store a reference to this NodeCG API context in a place where other libs can easily access it.
    // This must be done before any other files are `require`d.
    nodecgAPIContext.set(nodecg);

    // Other extension files we need to load.
    require('./layouts');
};
