const express = require('express');
const router = express.Router();

const Movie = require('../model/movie');
const Genre = require('../model/genre');

router.use(express.json());

router.get('/', (req, res) => {
    res.send("Filmes!");
});

router.post('/create', (req, res) => {
    const {genres, ...data} = req.body;
    Movie.create(data).then((movie) => {

        if (genres && genres.length > 0){
            movie.setGenres(genres);
        }
        res.status(200).send("Filme cadastrado com sucesso");
    }).catch((error) => {
        res.status(403).send("Falha ao cadastrar! " + error);
    });
});

// Listagem dos filmes, sem sinopse.
router.get('/list', (req, res) => {
    Movie.findAll({
        attributes: {
            exclude: ['sinopse']
        }}
    ).then((movies) => {
        res.send(movies);
    }).catch((error) => {
        res.send("Falha ao consultar filmes! Erro: " + error);
    });
});

// Listagem dos filmes por gênero.
router.get('/list/:id', (req, res) => {
    // Movie.findAll({
    //     where: {
    //         id_genero: req.params.id
    //     },
    //     attributes: {
    //         exclude: ['sinopse']
    //     }}
    // ).then((movies) => {
    //     res.send(movies);
    // }).catch((error) => {
    //     res.send("Falha ao consultar filmes! Erro: " + error);
    // });
    Genre.findOne({
        where: {
            genreIDGenre: req.params.id
        },
        include: Movie
    }).then( (result) =>
        res.send(result)
    )
});

router.get('/by_genre', (req, res) => {
    Genre.findAll({
        include: Movie
    }).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send("Falha ao consultar filmes! Erro: " + error);
    })
});

// Recupera os dados de um filme pelo ID
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

// Recupera somente a sinopse de um filme.
router.get('/sinopsis/:id', (req, res) => {
    const id = req.params.id;
    Movie.findOne({
        where:
        {
            id_movie: id,
        },
        attributes: ['sinopse']        
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