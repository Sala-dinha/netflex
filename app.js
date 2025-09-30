const express = require('express');
//TRAGO O OBJETO PARA SER UTILIZADO NAS MINHAS REQUISIÇÕES

const Movie = require('./model/movie')
const { where } = require('sequelize');

//SERVIDOR DE APLICAÇÃO
const app = express();

//INFORMO QUE AS REQUISIÇÕES QUE FOREM FEITAS, ESTARÃO NO FORMATO JSON

const user_router = require('./routers/user_router')
app.use('/user', user_router)








app.listen(3000);