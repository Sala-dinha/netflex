const express = require('express');

const app = express();

const user_router = require('./routers/user_router');
app.use('/user', user_router);

const movie_router = require('./routers/movie_router');
app.use('/movie', movie_router);

app.listen(3000);