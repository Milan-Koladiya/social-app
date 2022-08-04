const db = require('../connection');
const follower = db.follow;
async function Follow(req, res) {
    const { id, senderId, sendername, reciverId, recivername, status } = req.body;
    try {
        console.log(">>>>>>>>>>", id, ">>>>>>>>>>>>>", senderId, ">>>>>>>>>>>", reciverId);
        const data = await follower.create({ id, senderId, sendername, reciverId, recivername, status });
        await data.save();
        res.send({ message: "Successfully Done....!", user: data });
    } catch (error) {
        console.log(error);
        res.send({ error: "Check Your Data Somthing Wrong....!" });
    }
}
module.exports = Follow;

