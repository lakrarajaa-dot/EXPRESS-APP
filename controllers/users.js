const userService = require('../services/users');

const getAll = async () => {
    return await userService.all();
}

const insertOne = async (email, password) => {
    if (typeof email == 'undefined' || typeof password == 'undefined') {
        throw new Error("Vous devez renseigner tous champs obligatoire !");
    }
    try{
        return await userService.insertOne(email, password);
    }
    catch (error){
        throw error;
        
    }
}
module.exports = {
    getAll,
    insertOne
}