require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./db');
const pies = require('./controllers/piecontroller');
const user = require('./controllers/usercontroller');

sequelize.sync();
// sequelize.sync({force: true});

app.use(express.json());
app.use(require('./middleware/headers'));

// app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

// app.get('/', (req, res) => res.render('index'));

// app.get('/pies', (req, res) => res.send('I love pie!'));
app.use('/pies', pies);
app.use('/auth', user);

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));