const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.header.authorization; 
    if (!authHeader) return res.status(401).send("Token manquant");

    const token = authHeader.split(" ")[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        next();
    }catch (err) {
        return res.status(403).send("Token invalide");
    }
}