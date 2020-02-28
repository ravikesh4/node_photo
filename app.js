const express = require('express');
const app = express();
var expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);
app.use(express.static(__dirname + '/public/'));
// Set html as templating engine 
app.set('view engine', 'ejs'); 
// res.render('page', { layout: 'mylayout' })


app.get('/', (req, res) => { res.render('index' , { title : 'Home', template:'index' })});
app.get('/about', (req, res) => { res.render('about', { title : 'About', template:'about' })});
app.get('/contact', (req, res) => { res.render('contact', { title : 'Contact', template:'contact' })});
app.get('/gallery', (req, res) => { res.render('gallery', { title : 'Gallery', template:'gallery' })});
app.get('/services', (req, res) => { res.render('services', { title : 'Services', template:'services' })});




app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});