const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('landing');
})
