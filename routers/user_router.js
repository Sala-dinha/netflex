const jwt = require('jsonwebtoken');

const express = require('express');
const router = express.Router();

const User = require('../model/user');

router.use(express.json());

router.get('/', (req, res) => {
    res.send("Usuário!");
});

router.post('/create', (req, res) => {
    const user = req.body;
    re = /^[\w\.]+[\w]@(?:\w+.)+\.\w+/
    if (!re.test(user.email)) throw "Email inválido"
    User.create(user).then(() => {
        res.status(200).send("Usuário cadastrado com sucesso");
    }).catch((error) => {
        res.status(403).send("Falha ao cadastrar! " + error);
    });
});

router.get('/login', (req, res) => {
    email = req.body.email;
    password = req.body.password;
    User.findOne({
        where: {
            email: email
        }
    }).then((user) => {
        if (!user){
            res.status(404);
            throw('Cadastro não encontrado');
        }
        
        if (user.password != password){
            res.status(401);
            throw('Senha incorreta');
        }

        else{
            let secret = Math.random().toString(36).substring(2,);
            token = jwt.sign({email}, secret, {expiresIn: '24h'})
            user.secret = secret;
            user.save();
            res.cookie('authToken', token, {
                httpOnly: true,
                sameSite: true
            });
            res.status(200).send('Login bem-sucedido')
        }

    }).catch((error) => {
        res.send('Login não pode ser efetuado: ' + error);
    });
});

router.get('/list', (req, res) => {
    User.findAll().then((users) => {
        res.send(users);
    }).catch((error) => {
        res.send("Falha ao consultar usuários! Erro: " + error);
    });
});

router.get('/find/:id', (req, res) => {
    const id = req.params.id;
    User.findOne({
        where:
        {
            id_user: id,
        },
        attributes: {exclude: ['secret', 'password']}
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

router.put('/inactivate/:id', (req, res) => {
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

router.delete('/delete/:id', (req, res) => {
    User.destroy({
        where:
        {
            id_user: req.params.id,
        }
    }).then(() => {
        res.send("Usuário destruído com sucesso!");
    }).catch((error) => {
        res.send("Falha ao deletar usuário! Erro: " + error);
    });
});

module.exports = router;