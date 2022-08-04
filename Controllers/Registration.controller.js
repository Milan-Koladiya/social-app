const db = require('../connection');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtKey = 'instagram';
const Register = db.registration;

async function Registrationdata(req, res) {
    let photo = req.file.filename;
    const { id, email, username } = req.body;
    const password = bcrypt.hashSync(req.body.password, 8)
    try {
        if (email) {
            if (password) {
                const getRegistration = await Register.create({ id, email, password, photo, username });
                await getRegistration.save();
                jwt.sign({ getRegistration }, jwtKey, (err, token) => {
                    if (err) {
                        res.send({ error: "Anything went wrong,Plese try after some time....!" });
                    }
                    res.send({ message: "Successfully Registeration Done!", status: 200, user: getRegistration, auth: token })
                })
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

