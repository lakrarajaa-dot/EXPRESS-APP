const User = require("../models/user")

const getAll = async () => {
    return await User.create(user);
}

const insertOne = async (user) => {
    if(user.password.length <= 6) {
        throw new Execption("mot de passe trop court !");
    }

    return await User.create(user);
}

module.exports = {
    getAll,
    insertOne
}