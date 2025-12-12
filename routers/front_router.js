const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/home', async (req, res) => {
    const generos = await( await fetch('http://localhost:3000/movie/by_genre')).json();
    console.log(generos);
    res.render('home', {generos: generos})
});
router.get('/login', (req, res) => {
    res.render('login');
});
router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;