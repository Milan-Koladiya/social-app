const db = require('../connection');
const user = db.registration;
async function Serch(req, res) {
    const findUser = await user.findAll();
    res.send({ message: "Suucessfully send..!", user: findUser })
}
module.exports = Serch;