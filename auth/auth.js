const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const { authorization } = req.headers;
    
    if (authorization && isVerifiedToken(authorization)) {
        return next();
    }
    return res.status(401).json('Unauthorized');
}

const signInToken = (email, name, role) => {
    const jwtPayload = { email, name, role };
    return jwt.sign(jwtPayload, 'some_secret', { expiresIn: '1h'});
}

const isVerifiedToken = (token) => {
    return jwt.verify(token, 'some_secret', (error, decoded) => error ? false : true);
}

module.exports = {
    requireAuth: requireAuth,
    signInToken: signInToken
}