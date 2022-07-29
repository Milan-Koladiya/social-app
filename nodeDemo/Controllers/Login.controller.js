const db = require('../connection');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtKey = 'instagram';
const Register = db.registration;


async function LoginData(req, res) {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        const exitEmail = await Register.findOne({ where: { email: email } });
        if (exitEmail) {
            const checkPassword = await bcrypt.compareSync(password, exitEmail.dataValues.password);
            if (checkPassword) {
                jwt.sign({ checkPassword }, jwtKey, { expiresIn: '1h' }, (err, token) => {
                    if (err) {
                        res.send({ error: "Anything went wrong,Plese try after some time....!" });
                    }
                    res.send({ message: "You have successfully logged In!", status: 200, user: exitEmail.dataValues, auth: token })
                })
            }
            else {
                res.send({ message: "Password is Incorrect", status: 400 })
            }
        }
        else {
            res.send({ error: "Email Does not exit!", status: 404 });
        }
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

module.exports = LoginData;