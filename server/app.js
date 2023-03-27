// Helps to handle http errors
import createError from 'http-errors';
// Import the Express Library
import express from 'express';
// Is a Core-Node library to manage system paths
import path from 'path';
// Helps to parse client cookies
import cookieParser from 'cookie-parser';
// Library to log http communication
import logger from 'morgan'

// Importing subroutes
import indexRouter from '@server/routes/index' 
import usersRouter from '@server/routes/users';
import apiRouter from '@server/routes/api'; 
// setting webpack modles  

import webpack from 'webpack'; 
import WebpavkDevMiddleare from'webpack-dev-middleware'; 
import WebpackHotMiddleare from'webpack-hot-middleware';


// We are creating the express instance
const app = express(); 
//Get execution mode  
const nodeEnviroment = process.env.NODE_env || 'production' 
//Decciding if we all webpack siddleware or not  
if (nodeEnviroment === 'develoment') {
  //start Webpack dev server 
  console.log("🎶Ejecutando en modo desarrollo");
  //adding the key mode with its value "develomet" 
  webpackConfig.mode = nodeEnviroment; 
  //setting the port 
  webpackConfig.devServer.port = process.env.PORT;
  //setting up the hmr (hot mudula replacement ) 
  webpackConfig. entry = [ 
    "webpack-hot-middleware/client?reloand=true&timeout=1000",
     webpackConfig.entry]; 
     //creatingthe bundler 
     const bundler = webpack(webpackConfig); 
     //Enabling the webpaack middleware 
     app.use(WebpackDevMiddleware(bundler, {
      publicPhat: webpackConfig.output.path
     }) );
//Enabling the web pack Hm 
app.use(WebpackHotMiddleare(bundle)); 
    }else{  
      console.log("|| ejectando en modo produccion ||");

    }


// view engine setup
// We are delcaring the localization of the views
app.set('views', path.join(__dirname, 'views'));
// Setting up the template engine
app.set('view engine', 'hbs');

// Registering middlewares
// Log all received requests
app.use(logger('dev'));
// Parse request data into json
app.use(express.json());
// Decode url info
app.use(express.urlencoded({ extended: false }));
// Parse client cookies into json
app.use(cookieParser());
// Set up the static file server
app.use(express.static(path.join(__dirname, 'public')));

// Registering routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api',apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;