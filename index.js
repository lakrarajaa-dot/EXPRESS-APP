require('dotenv').config({ path: `.env.local`});
const sequelize = require('./config/database');
const express = require('express');
const app = express();
const { swaggerUi, specs } = require('./swagger');

const User = require('./models/user');

sequelize.sync({alter: true})
    .then(() => console.log('Base de données synchronisée'))
    .catch(err => console.error('Erreur de synchronisation de la base de données :', err));

//const app = express();

const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth')

app.use(express.json());

const port = process.env.PORT || 3000;

app.use(express.json());


app.get('/', (req, res) => {
  
  res.send('Welcome to API EXPRESS !');
});

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));


app.listen(port, () => {
  console.log(`Serveur Express en écoute sur http://localhost:${port}`);
});