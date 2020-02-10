const secret_key = 'djnvbc';
const jwt = require('jsonwebtoken');

function auth(req, res, next) {

    const token = req.header('x-auth-token');

    /** 
     * If there is no token.... 
     * Which means user is not logged in !!
     */
    if (!token)
        return res.status(401).json({ msg: 'Access is denied, please log in first' });

    /**
     * Now we will verify that if user is logged in... then checking wheather the token is 
     * correct or not
     */
    try {

        const decoded = jwt.verify(token, secret_key);

        /**
         * Add user from payload
         */
        req.user = decoded;
        next();
    }
    catch (e) {
        res.status(400).json({ msg: 'Your sessin is expired, Please log in again' });
    }

}

module.exports = auth;