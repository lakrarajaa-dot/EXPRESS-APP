const express = require('express');
const router = express.Router();
exports.router = router;

const userCtrl = require('../controllers/users');

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Récupère une liste d'éléments
 *     responses:
 *       200:
 *         description: Liste des éléments
 */
router.get('/', async (req, res) => {
    let users = await userCtrl.getAll();
    res.status(200).send(users);

});

 /**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Créé un user 
 *     consumes:
 *       - application/json
 *     requestBody:
 *       description: Optional description in *Markdown*
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                type: string
 *               password:
 *                 type: string  
 *     responses:
 *       200:
 *         description: Liste des éléments
 */ 
router.post('/', async (req, res) => {
    console.log(req.body);
    const {email, password} = req.body;

    if(typeof email == 'undefined' || typeof password == 'undefind') {
        return res.status(500).send({
            error: 'vous devez renseigner tous les champs obligatoire !'
        });
    }
    try {
        await userCtrl.insertOne(email, password);
        return res.status(200).send("User bien créé !");
    
    }catch (error) {
        return res.status(500).json({error: error.message});
    }
    
});
module.exports = router;
