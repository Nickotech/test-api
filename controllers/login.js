const helpers = require('../auth/auth');

const handleSignin = (req, res, db, bcrypt) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json('incorrect form submission');
    }

    const user = db.users.find(user => user.email === email);
    if (!user) {
        return res.status(400).json('wrong credentials');
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json('wrong credentials');
    }

    user.token = helpers.signInToken(email, user.name, user.role);
    console.log(db);
    
    return res.json({test_token: user.token})
}

module.exports = {
    handleSignin: handleSignin
};