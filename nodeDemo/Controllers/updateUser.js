const db = require('../connection');
const user = db.registration;
var bcrypt = require('bcryptjs');


async function updateUser(req, res) {
    // let photo = req.file.filename;
    // console.log(req.file);
    const { email, username, password } = req.body;
    console.log(email);
    console.log(username);
    console.log(password);
    const { id } = req.params;
    // const password = bcrypt.hashSync(req.body.password, 8)
    try {
        const data = await user.update({ email, password, photo, username }, { where: { id: id } });
        console.log(data);

    } catch (error) {
        res.send({ message: "Error To get Data...!" })
        console.log(error);
    }
}

module.exports = updateUser;