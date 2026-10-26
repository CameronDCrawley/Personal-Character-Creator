require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
//const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 3000
const Character = require('./models/character')


const uri = process.env.MONGODB_URI;


mongoose.connect(uri)
.then(data => {
    console.log('connected to the database')


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
    })
})
app.use(cors())
//parses incoming data from the form in my ejs
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine', 'ejs'); // set up ejs for templating
app.use((req,res,next)=>{
    next()
})

app.get('/', (request, response)=>{
    Character.find()
    .then(characters => {
        response.render('index.ejs',{characters:characters})
    })
})
app.get('/api/Character', (request, response)=>{
Character.find()
.then(characters => {
    console.log(characters)
    response.json(characters)

})    
})

app.get('/api/:ninjaName', (request, response)=>{
    let input = request.params.ninjaName.toLowerCase()
    //console.log(JSON.stringify(input))
Character.find()
.then(characters => {
    console.log(characters)
    let searchN = characters.find(search => search.name.toLowerCase().includes(input))
    if (searchN){
    response.json(searchN)
    } else {
      response.json({ 
  "name":"Unknown",
  "age":"Unknown",
  "signatureAbility":"Unknown",
  "village":"Unknown",
  "image":"No image found"

}) 
        }
})
})


app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})
app.get('/style.css', (request, response)=>{
    response.sendFile(__dirname + '/style.css')
})

app.get('/cloud.jpg', (request, response)=>{
    response.sendFile(__dirname + '/cloud.jpg')
})

app.post('/makeCharacter', (req, res) => {
  Character.create(
{
    name: req.body.name, 
    signatureAbility:req.body.signatureAbility,
    age: req.body.age,
    village: req.body.village,
})
.then(result => {
    console.log('saved in the database')
    res.redirect('/')
})
.catch(error => {
    console.error(error)
    res.status(500).send('Erro saving character')
})
})


app.put('/addImage', async(req, res) => {
    //const searchName = req.body.name ? req.body.name.trim() : '';
 const result = await Character.findOneAndUpdate(
    {name: req.body.name},
    {$set: { image:req.body.image }},

         {
            returnDocument:'after', 

            collation:{
                    locale:'en',
                    //case sensitivity
                    strength:2,
                    //handles the whitespace
                    alternate:'shifted',
                    //ignores spaces
                    maxVariable:'space'
            }


        },

  );
  console.log(result)
    res.json('image added')
  })


app.delete('/deleteCharacter', (req, res) => {
    let deleteName = req.body.name ? req.body.name.trim() : '';

    Character.findOneAndDelete(
        {name:deleteName},
        {

            collation:{
                    locale:'en',
                    //case sensitivity
                    strength:2,
                    //handles the whitespace
                    alternate:'shifted',
                    //ignores spaces
                    maxVariable:'space'
            }


        }
    // signatureAbility:req.body.signatureAbility,
    // age: req.body.age,
    // village: req.body.village,
)
      .then(result => {
        console.log(result)
    console.log('put him on tshirt')
    res.json('put him on tshirt')
})
.catch(error => {
    console.error(error)
    res.status(500).send('Error saving character')
})
})



