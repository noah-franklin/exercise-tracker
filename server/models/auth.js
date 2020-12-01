const jwt = require('jsonwebtoken');


module.exports= {
    verifyToken: (authToken) => {
        let token = authToken.headers.authorization.split(' ')
        console.log(token[1])
        let verified = null;
        jwt.verify(token[1], process.env.JWT_SECRET, (err, decoded) => {
            if(err) {
                return err
            }
            verified = JSON.parse(decoded.data)
            //console.log(JSON.parse(decoded.data))
        });
        console.log(verified)
        return verified
    }
}