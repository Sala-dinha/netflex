const express = require('express');
const router = express.Router();

const Movie = require('../model/movie');

router.use(express.json());

router.get('/', (req, res) => {
    res.send("Filmes!");
});

router.post('/create', (req, res) => {
    const new_movie = req.body;
    Movie.create(new_movie).then(() => {
        res.status(200).send("Filme cadastrado com sucesso");
    }).catch((error) => {
        res.status(403).send("Falha ao cadastrar! " + error);
    });
});

router.get('/list', (req, res) => {
    Movie.findAll().then((movies) => {
        res.send(movies);
    }).catch((error) => {
        res.send("Falha ao consultar filmes! Erro: " + error);
    });
});

router.get('/find/:id', (req, res) => {
    const id = req.params.id;
    Movie.findAll({
        where:
        {
            id_movie: id,
        }
    }).then((movie) => {
        res.send(movie);
    }).catch((error) => {
        res.send("Falha ao consultar Filme! Erro: " + error);
    });
});


router.put('/update', (req, res) => {
    const upd_movie = req.body;
    Movie.update(user, {
        where:
        {
            id_movie: upd_movie.id_movie,
        }
    }).then(() => {
        res.send("Filme atualizado com sucesso!");
    }).catch((error) => {
        res.send("Falha ao atualizar o Filme! Erro: " + error);
    });
});

router.delete('/delete/:id', (req, res) => {
    Movie.destroy({
        where:
        {
            id_movie: req.params.id,
        }
    }).then(() => {
        res.send("Filme excluído com sucesso!");
    }).catch((error) => {
        res.send("Falha ao deletar filme! Erro: " + error);
    });
});

module.exports = router;