const db = require('../connection');
const post = db.addpost;

async function Checkpost(req, res) {
    try {
        const data = await post.findAll();
        res.send({ message: "Successfully get All Posts", user: data });
    } catch (error) {
        res.send({ error: "Enything Problem to Fatch the Post" });
    }
}
module.exports = Checkpost;