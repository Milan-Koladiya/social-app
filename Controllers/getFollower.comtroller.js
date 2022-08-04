const db = require('../connection');
const follower = db.follow;

async function getFollower(req, res) {
    try {
        const getFollowerData = await follower.findAll();
        res.send({ message: "Successfully Get Data", user: getFollowerData })

    } catch (error) {
        res.send({ message: "Error To get Data...!" })
    }
}

module.exports = getFollower;