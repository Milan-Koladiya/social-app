const db = require('../connection');
var bcrypt = require('bcryptjs');
const Register = db.registration;

async function Registrationdata(req, res) {
    try {
        const { id, firstname, lastname, email, photo, username, dob } = req.body;
        const password = bcrypt.hashSync(req.body.password, 8)
        if (email) {
            if (password) {
                const getRegistration = await Register.create({ id, firstname, lastname, email, password, photo, username, dob });
                await getRegistration.save();
                res.send({ message: "Successfully Registeration Done!", status: 200, user: getRegistration })
            } else {
                res.send({ error: "Please Enter Your Password.!" })
            }
        } else {
            res.send({ error: "Please Enter Your Email.!" });
        }

    } catch (err) {
        res.send(err);
        console.log(err);
    }
};

module.exports = Registrationdata;
