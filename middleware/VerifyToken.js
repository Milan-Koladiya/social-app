const jwt = require('jsonwebtoken');
const jwtKey = 'instagram';

function VerifyToken(req, res, next) {
    const Token = req.headers.authorization;
    if (Token) {
        jwt.verify(Token, jwtKey, (err, valid) => {
            if (err) {
                res.send({ err: "Please Currect your Token....!" })
            } else {
                next();
            }
        })
    } else {
        res.send({ err: "Please Add authorization in headers....! " })
    }
}
module.exports = VerifyToken;