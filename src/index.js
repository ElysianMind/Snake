const core = require('./game/Core');
core.start();

// this will enforce webpack to hot reload.
module && module.hot && module.hot.accept();
