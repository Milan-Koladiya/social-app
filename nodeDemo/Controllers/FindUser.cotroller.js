const db = require('../connection');
const user = db.registration;

async function findUser(req, res) {
    try {
        const getUserData = await user.findAll();
        res.send({ message: "Successfully Get Data", user: getUserData })

    } catch (error) {
        res.send({ message: "Error To get Data...!" })
    }
}

module.exports = findUser;