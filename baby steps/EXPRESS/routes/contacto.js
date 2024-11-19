// usando express.Router "mini aplicación" 1er paso:
var express = require('express');
var router = express.Router();

/* GET contacto page. */
router.get('/', function (req, res, next) {
    res.render('contacto', {
        titulo: 'Cosmo Amigos',
        lista: ['Salsita', 'Faceball', 'Pomelo'],
        activado: true,
        cantidad: 10
    }); //va a ser un archivo view/contacto.hbs
    // rta usando la plantilla contacto
});

module.exports = router;
