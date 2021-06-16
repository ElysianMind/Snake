const core = require('./game/core');
core.start();

// this will enforce webpack to hot reload.
module.hot.accept();
