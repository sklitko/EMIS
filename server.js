var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

var auth = [
    {

        login: 'admin',
        password: 'admin'
    }
];

var users = [
    {
        login: 'user1',
        password: 'password',
        role: 'user',
        name: 'KLITKO',
        surname: 'SERGEY'
    },
    {
        login: 'user2',
        password: 'password2',
        role: 'user',
        name: 'KLITKO',
        surname: 'SERGEY'
    }
];


app.get('/api/auth', function (req, res) {
    res.send(auth);
});

app.get('/api/users', function (req, res) {
    res.send(users);
});

app.get('/api/users/:login', function (req, res) {
    var user = users.find(function (user) {
        return user.login === req.params.login;
    });

    res.send(user);
});

app.get('/', function (req, res) {
    res.send('Hello API')
});

app.post('/api/users', function (req, res) {

});

app.listen(3001, function () {
    console.log('API app started');
});