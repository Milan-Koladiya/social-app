const express = require('express');
const cors = require('cors');
const multer = require('multer')
const Addpostdata = require('./Controllers/Addpost.controller');
const LoginData = require('./Controllers/Login.controller');
const Registrationdata = require('./Controllers/Registration.controller');
const CheckProfile = require('./Controllers/Profile.controller');
const Serch = require('./Controllers/Serch.controller');
const VerifyToken = require('./middleware/VerifyToken')
const app = express();

app.use('/uploads', express.static('uploads'))
app.use(express.json());
app.use(cors());

const user = multer({ dest: 'uploads/user' })
const post = multer({ dest: 'uploads/post' })

app.post('/register', user.single('image'), Registrationdata);
app.post('/login', LoginData);
app.post('/posts', post.single('image'), VerifyToken, Addpostdata);
app.get('/profile/:id', CheckProfile);
app.get('/serch', Serch);

app.listen(8080);