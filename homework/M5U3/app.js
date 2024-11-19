var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var pool = require('./models/bd');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

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

/* EJEMPLOS PARA COMUNICARME CON LA BD
pool.query('select nombre from empleados').then(function (resultados) {
  console.log(resultados)
});

var obj = {
  nombre: 'Salsita',
  actividad: 'Ex Lider de los Guardianes de la Vagancia',
  cumpleaños: ("2013-02-08"),
  edad: 10,
  mail: 'salsita@gorditos.com'
};
pool.query('insert into home set ?', [obj]).then(function (resultados) {
  console.log(resultados)
});

var id = 7;
var obj = {
  id: 4,
};

pool.query('update home set ? where id=?', [obj, id]).then(function (resultados) {
  console.log(resultados);
})

var id = 9;
pool.query('delete from home where id=?', [id]).then(function (resultados) {
  console.log(resultados)
})*/

pool.query('select apellido from empleados').then(function (resultados) {
  console.log(resultados)
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
