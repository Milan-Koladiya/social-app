const db = require('../connection');
const follower = db.follow;
async function Follow(req, res) {
    const { id, senderId, reciverId } = req.body;
    try {
        console.log(">>>>>>>>>>", id, ">>>>>>>>>>>>>", senderId, ">>>>>>>>>>>", reciverId);
        const data = await follower.create({ id, senderId, reciverId });
        await data.save();
        res.send({ message: "Successfully Done....!", user: data });
    } catch (error) {
        console.log(error);
        res.send({ error: "Check Your Data Somthing Wrong....!" });
    }
}
module.exports = Follow;

