const helpers = require('../auth/auth');

const handleRegister = (req, res, db, bcrypt) => {
    const { email, name, password, role } = req.body; 

    if (!email || !name || !password || !role) {
        return res.status(400).json('incorrect form submission');
    }

    const exists = db.users.some(user => user.email === email);
    if (exists) {
        return res.status(400).json('user already exists');
    } 

    const hash = bcrypt.hashSync(password, 10);
    const token = helpers.signInToken(email, name, role);

    db.users.push({
        name,
        email,
        password: hash,
        role,
        token
    });

    console.log(db);
    
    return res.json({test_token: token})
   
}

module.exports = {
    handleRegister: handleRegister
}