const db = require('../connection');
var bcrypt = require('bcryptjs');
const Register = db.registration;

async function Registrationdata(req, res) {
    try {
        const { id, firstname, lastname, email, photo, username, dob } = req.body;
        const password = bcrypt.hashSync(req.body.password, 8);
        const data = await Register.create({ id, firstname, lastname, email, password, photo, username, dob });
        await data.save();
        res.send(data);
    } catch (err) {
        res.send(err);
        console.log(err);
    }
};

module.exports = Registrationdata;