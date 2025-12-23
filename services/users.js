const User = require("../models/user")

const getAll = async () => {
    return await User.create(user);
}

const insertOne = async (email, password) => {
    if(password.length <= 6) {
        throw new Error("mot de passe trop court !");
    }

    const hash = await bcrypt.hash(password, 10);

    return await User.create({email, password: hash});
}

module.exports = {
    getAll,
    insertOne
}