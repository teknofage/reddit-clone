const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config()
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const expressValidator = require('express-validator');
// const app = express();
<<<<<<< HEAD
const app = express();
const port = 8080;
const mongoose = require('mongoose');


mongoose.Promise = Promise;


// // Connect to Mongo db
// const mongoUri = process.env.MONGODB_URI;
// console.log(process.env.MONGO_URI)
// mongoose.connect(
//   mongoUri,
//   { server: { socketOptions: { keepAlive: 1 } } }
// );
// mongoose.connection.on('error', () => {
//   throw new Error(`unable to connect to database: ${mongoUri}`);
// });
=======
var app = express();
const port = 3000
>>>>>>> e663ab8bc27e0546e21e1164f449b62c8f2f25ff

// Use Body Parser
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
// get data back from db 
const handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(handlebars),
});
app.engine('handlebars', hbs.engine);
// Use handlebars to render
app.set('view engine', 'handlebars');
app.use(expressValidator());
app.use(express.static('public'));


var checkAuth = (req, res, next) => {
	console.log("Checking authentication");
	if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
	  req.user = null;
	} else {
	  var token = req.cookies.nToken;
	  var decodedToken = jwt.decode(token, { complete: true }) || {};
	  req.user = decodedToken.payload;
	}
  
	next();
  };
app.use(checkAuth);

require('./data/reddit-db');
require('./controllers/posts.js')(app);
require('./controllers/comments.js')(app);
require('./controllers/auth.js')(app);
require('./controllers/replies.js')(app);

<<<<<<< HEAD
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));



=======
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
>>>>>>> e663ab8bc27e0546e21e1164f449b62c8f2f25ff
module.exports = app;
