const express = require('express');
const router = express.Router();

const userCtrl = require("../controllers/users");
const authCtrl = require("../controllers/auth");

// Route d'inscription
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        await userCtrl.insertOne(email, password);
        return res.status(200).send("User bien créé !");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: permet de se connecter
 *     tags:
 *      - auth
 *     consumes:
 *       - application/json
 *     requestBody:
 *         description: optinal description in *Markdown*
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string  
 *     responses:
 *       200:
 *         description: Liste des éléments
 */
// Route de connexion
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authCtrl.login(email, password);
        return res.status(200).json({ token });
    } catch (error) {
        return res.status(401).json({ error: error.message });
    }
});

module.exports = router;
