const db = require('../connection');
const user = db.registration;
const post = db.addpost;

async function CheckProfile(req, res) {
    try {
        const {id} = req.params;
        const checkProfile = await user.findAll({
            include: [{ model: post }],
            where: { id: id }
        });
        res.send({ message: "Successfully Done!", user: checkProfile })
        console.log(checkProfile);
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}
module.exports = CheckProfile;  