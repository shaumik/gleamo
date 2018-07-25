const express = require('express');
const ejs = require('ejs');
const app = express();

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/public');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.get('/', (req, res) => {
    res.render('landing.html');
})
