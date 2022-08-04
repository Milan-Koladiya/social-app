const db = require('../connection');
const user = db.registration;
var bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');



async function updateUser(req, res) {
    const { email, username } = req.body;
    const { id } = req.params;
    const password = bcrypt.hashSync(req.body.password, 8)
    try {
        let photo = req.file.filename;
        if (photo) {
            const getData = await user.findOne({ where: { id: id } })
            const filePath = path.join(__dirname, `uploads/user/${getData.photo}`)
            fs.unlink(filePath, deletImage);
            function deletImage(err) {
                if (!err) {
                    console.log("Success");
                } else {
                    console.log(err);
                }
            }
            const data = await user.update({ email, password, photo, username }, { where: { id: id } });
            res.send({ message: "Successfully update Recorde", user: data })

        } else {
            console.log("Else");
            const getData = await user.findOne({ where: { id: id } })
            const photo = getData.photo
            const data = await user.update({ email, password, photo, username }, { where: { id: id } });
            res.send({ message: "Successfully update Recorde", user: data })

        }
    } catch (error) {
        res.send({ message: "Anything Problem in Your Data,Please Check Your Data.....!" })
        console.log(error);
    }
}

module.exports = updateUser;