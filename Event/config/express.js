/**
 * Module dependencies.
 */

var express = require('express')
  , flash = require('connect-flash')
  , helpers = require('view-helpers'),
  cookieParser   = require('cookie-parser'),
  session        = require('express-session'),
  errorHandler   = require('errorhandler'),
  responseTime = require('response-time'),
  expressLayouts = require('express-ejs-layouts'),
  bodyParser     = require('body-parser'),
  compress       = require('compression'),
  favicon        = require('static-favicon'),
  path           = require('path'),
  logger        = require('flock-logger');
  methodOverride = require('method-override')

module.exports = function (app, config, passport) {

/**
 * Express configuration.
 */
app.set('port', '9000');
app.set('securePort','9001');
app.set('views', path.join(__dirname, '../app/views'));
app.set('view engine', 'ejs');
app.set('json spaces',0);


app
  .use(compress())
  .use(favicon(__dirname + '/../public/img/favicon.ico'))
  .use(bodyParser())
  .use(methodOverride())
  .use(express.static(__dirname + '/../public', { maxAge: 999999999999 }))
  .use(cookieParser())
  .use(responseTime())
  .use(expressLayouts)
  .set('layout','layouts/layout')
  .enable('view cache');

app.use(flash())

// use passport session
app.use(passport.initialize())
app.use(passport.session())

}
