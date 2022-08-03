const express = require('express');
const cors = require('cors');
const multer = require('multer')
const Addpostdata = require('./Controllers/Addpost.controller');
const LoginData = require('./Controllers/Login.controller');
const Registrationdata = require('./Controllers/Registration.controller');
const CheckProfile = require('./Controllers/Profile.controller');
const Serch = require('./Controllers/Serch.controller');
const VerifyToken = require('./middleware/VerifyToken');
const Follow = require('./Controllers/Follow.controller');
const getFollower = require('./Controllers/getFollower.comtroller');
const updateUser = require('./Controllers/updateUser');
const app = express();

app.use('/Controllers/uploads', express.static('Controllers/uploads'))
app.use(express.json());
app.use(cors());

const user = multer({ dest: 'Controllers/uploads/user' })
const post = multer({ dest: 'Controllers/uploads/post' })

app.post('/register', user.single('image'), Registrationdata);
app.post('/follow', Follow);
app.post('/login', LoginData);
app.post('/posts', post.single('image'), VerifyToken, Addpostdata);
app.get('/profile/:id', CheckProfile);
app.get('/serch', Serch);
app.get('/followers', getFollower);
app.post('/update/:id', user.single('image'), updateUser);

app.listen(8080);