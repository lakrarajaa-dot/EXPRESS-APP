const bcrypt = require("bcrypt");

const User = require("../models/user");

exports.login = async (email, password) => {
    const user = await User.findOne({ where: { email }});
    if (!user) throw new Error("Email non trouvé")

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Mot de passe incorrect");
    return user;
};
