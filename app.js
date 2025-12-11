const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'))

association = require('./association/association')

const user_router = require('./routers/user_router');
app.use('/user', user_router);

const movie_router = require('./routers/movie_router');
app.use('/movie', movie_router);

app.listen(3000);