const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/home', async (req, res) => {
    const generos = await( await fetch('http://localhost:3000/movie/by_genre')).json();
    for (let genero of generos){
        if (genero.movies.length == 0)
            generos.splice(generos.indexOf(genero), 1);        
    }
    res.render('home', {generos: generos})
});
router.get('/login', (req, res) => {
    res.render('login');
});
router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;