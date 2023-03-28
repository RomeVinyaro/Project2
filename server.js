const path = require('path');
const express = require("express");
const exphbs = require('express-handlebars');

const routes = require('./routes');
const sequelize = require('./config/connections');
const helpers = require('./utils/helpers');
const user = require('./routes/api/userRoutes');

const app = express()
const PORT = process.env.PORT || 3009;

const hbs = exphbs.create({ helpers });

app.get('/', function(req, res, next) {
    res.send("hey");
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(PORT, () => console.log('Connected to backend'));