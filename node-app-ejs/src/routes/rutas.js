const { Router } = require('express');
const router = Router();

/*------------ paginas ------------*/

router.get('/', (req, res) => {
  res.render('index.ejs', {title: 'Home'});
});

router.get('/acerca', (req, res) => {
  res.render('acerca.ejs', {title: 'Acerca'});
});

router.get('/contacto', (req, res) => {
  res.render('contacto.ejs', {title: 'Contacto'});
});

/*------------ fin paginas ------------*/

module.exports = router;