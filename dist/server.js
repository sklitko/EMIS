'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _express2.default;

app.get('/', function (req, res) {
    res.send('Hello API');
});

app.listen(3001, function () {
    return console.log('API app started');
});
//# sourceMappingURL=server.js.map