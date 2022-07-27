const express = require('express');
const cors = require('cors')
const Addpostdata = require('./Controllers/Addpost.controller');
const LoginData = require('./Controllers/Login.controller');
const Registrationdata = require('./Controllers/Registration.controller');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/register', Registrationdata);
app.post('/login', LoginData);
app.post('/post', Addpostdata);

app.listen(8080);