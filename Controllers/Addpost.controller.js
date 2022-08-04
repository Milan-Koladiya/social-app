const db = require('../connection');
const Addpost = db.addpost;

async function Addpostdata(req, res) {
    try {
        let image = req.file.filename;
        console.log(image);
        const { id, UserId, description } = req.body;
        if (image) {
            const exitPost = await Addpost.create({ id, UserId, image, description });
            await exitPost.dataValues.save();
            res.send({ message: "Successfully Post Added", status: 200, user: exitPost.dataValues });
        } else {
            res.send({ error: "Please Select Image", status: 404 })
        }

    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

module.exports = Addpostdata;