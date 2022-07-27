const db = require('../connection');
var bcrypt = require('bcryptjs');
const Login = db.login;
const Register = db.registration;


async function LoginData(req, res) {
    try {
        const { email, password } = req.body;
        const exitEmail = await Register.findOne({ Email: email });
        console.log("exitEmailexitEmailexitEmailexitEmail", exitEmail.dataValues)
        if (exitEmail) {
            const checkPassword = await bcrypt.compareSync(password, exitEmail.dataValues.password);
            if (checkPassword) {
                res.send({ message: "You have successfully logged In!", status: 200, user: exitEmail.dataValues });
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