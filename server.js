const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

const port = 8080
const hbs = exphbs.create({defaultLayout:'home'})
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})