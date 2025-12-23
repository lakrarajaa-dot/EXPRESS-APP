const jwt = require("jsonwebtoken");

const authService = require("../services/auth");

const login = async (email, password) => {
     if(typeof email == 'undefined' || typeof password == 'undefind') {
        throw new error("vous devez renseigner tous les champs obligatoire !");
    
    }
    try {
        const user = authService.login(email.async, password);
        return Jwt.sign(user, process.env.JWT_SECRET, { expresIn: '1h'});
    }catch (error) {
         throw error;
    }
}

module.exports = {
    login
}