const db = require('../connection');
const user = db.registration;

async function updateUser(req, res) {
    try {
        const photo = req.body.photo;
        // const getUserData = await user.findOne({ where: { id: req.params.id } });
        // console.log(getUserData.dataValues);
        const data = await user.update({ photo: photo }, { where: { id: req.params.id } })
        console.log(">>>>>>>>>>>>>>>", data);
        res.send({ message: "Successfully Get Data", user: data })

    } catch (error) {
        res.send({ message: "Error To get Data...!" })
    }
}

module.exports = updateUser;