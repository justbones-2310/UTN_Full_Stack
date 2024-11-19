var createError = require('http-errors');
var express = require('express'); // crean la app de Express
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// usando express.Router "mini aplicación" 2do paso:
var contactoRouter = require('./routes/contacto');

var app = express(); // crean la app de Express

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// usando express.Router "mini aplicación" 1er paso:
app.use('/contacto', contactoRouter);

// definición de ruta que se llamara al recibir la petición HTTP GET con una dirección ('/')
app.get('/hola', function (req, res) {
  res.send('Hola Faceball');
});

app.get('/prueba', function (req, res) {
  res.send('Soy la página de prueba')
});

app.get('/destacados', function (req, res) {
  res.send('Soy la página de Destacados')
});

app.get('/nosotros', function (req, res) {
  res.send('Soy la página de Nosotros')
});


//*ej middleware xra contar las vistas del usuario

app.use(function (req, res, next) {
  if (!req.session.vistas) {
    req.session.vistas = {};
  }
  if (!req.sesion.vistas[req.originalUrl]) {
    req.session.vistas[req.originalUrl] = 1;
  } else {
    req.sesion.vistas[req.originalUrl]++;
  }
  next();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
