var echo = require('../laravel-echo/index.js');

var options = require('./config.json');

echo.run(options).then(echo => {
    echo.stop();
});
