const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const app = express();
const port = 3000
// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Add after body parser initialization!
require('./data/reddit-db');
require('./controllers/posts.js')(app);
app.use(expressValidator());
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('home')
});
app.get('/posts/new', (req, res) => {
    res.render('posts-new')
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))