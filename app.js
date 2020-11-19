let express = require('express') ;
let app = express () ; 
let index = require('./views/index') ; 
const { db } = require('./models'); 
let morgan = require('morgan') ; 

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.use(express.static('public')) ; 

app.use( morgan('dev') ) ;

app.get('/', (req, res) => {
    res.send( index.layout('') ) ; 
})

app.use( express.urlencoded( {extended: false } ) ) // potential error site 

app.listen(1337 , () => {
    console.log('I am listening') ; 
})