const express = require('express');
const router = express.Router();

const User = require('../model/user');

router.use(express.json());

router.get('/', (req, res) => {
    res.send("Usuário!");
});

router.post('/create_user', (req, res) => {
    //OBTENDO AS INFORMAÇÕES QUE FORAM PASSADAS NA REQUISIÇÃO
    const user = req.body;
    //COMANDO SEQUELIZE PARA SALVAR OS DADOS NO BANCO DE DADOS
    User.create(user).then(() => {
        res.status(200).send("Usuário cadastrado com sucesso");
    }).catch((error) => {
        res.status(403).send("Falha ao cadastrar! " + error);
    });
});

//END-POINT CONSULTAR TODOS OS USUÁRIOS CADASTRADOS
router.get('/list_users', (req, res) => {
    //SELECT * FROM user
    //then = try
    //catch
    User.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    }).then((users) => {
        res.send(users);
    }).catch((error) => {
        res.send("Falha ao consultar usuários! Erro: " + error);
    });
});

router.get('/find/:id', (req, res) => {
    const id = req.params.id;
    User.findAll({
        where:
        {
            id_user: id,
        },
        attributes:
        {
            exclude: ['createdAt', 'updatedAt']
        }
    }).then((user) => {
        res.send(user);
    }).catch((error) => {
        res.send("Falha ao consultar Usuário! Erro: " + error);
    });
});

router.put('/update', (req, res) => {
    const user = req.body;
    User.update(user, {
        where:
        {
            id_user: user.id_user,
        }
    }).then(() => {
        res.send("Usuário atualizado com sucesso!");
    }).catch((error) => {
        res.send("Falha ao atualizar o usuário! Erro: " + error);
    });
});

router.put('/inactivate_user/:id', (req, res) => {
    const id = req.params.id;
    User.update({
        active: false
    },{
        where:
        {
            id_user: id,
        }
    }).then(() => {
        res.send("Usuário foi inativado com sucesso!");
    }).catch((error) => {
        res.send("Falha ao inativar o usuário! Erro: " + error);
    });
});

router.delete('/delete_user/:id', (req, res) => {
    User.destroy({
        where:
        {
            id_user: req.params.id,
        }
    }).then(() => {
        res.send("Usuário destruído com sucesso! (HEAD SHOT)");
    }).catch((error) => {
        res.send("Falha ao deletar usuário! Erro: " + error);
    });
});

module.exports = router;