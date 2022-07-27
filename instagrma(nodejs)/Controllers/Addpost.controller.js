const db = require('../connection');
const Addpost = db.addpost;

async function Addpostdata(req, res) {
    try {
        const { id, image, description } = req.body;
        console.log("req.body====>", req.body);
        console.log("id>>>>>>>>>>>>>>>>>>>", id);
        console.log("image>>>>>>>>>>>>>>>>>>>", image);
        console.log("descriptionid>>>>>>>>>>>>>>>>>>>", description);
        const data = await Addpost.create({ id, image, description });
        console.log(data);
        await data.save();
        res.send(data);
    } catch (err) {
        console.log(err);
        res.send(data);
    }
}

module.exports = Addpostdata;