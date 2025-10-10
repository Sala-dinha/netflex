//IMPORTANDO A BIBLIOTECA SEQUELIZE
const Sequelize = require('sequelize');

//CRIANDO UMA VARIÁVEL QUE IRÁ IMPLEMENTAR TODA A COMUNICAÇÃO COM O BANCO
const sequelize = new Sequelize(
    'Netflex',
    'root',
    '',
    //INSERINDO A INFORMAÇÃO DO BANCO (ONDE ESTÁ E QUAL É O BANCO QUE SERÁ UTILIZADO)
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

/*sequelize.authenticate().then(function(){
    console.log("Conexão efetuada com sucesso!");
}).catch((error)=>{
    console.log("Falha ao se conectar: " + error);
});
*/

module.exports = {
    Sequelize,
    sequelize
}
