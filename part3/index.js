const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const app = express()
app.use(express.static('dist'))
app.use(express.json())
app.use(cors())
const Person = require('./models/person')
const e = require('express')
dotenv.config({
    path: './.env'
  
})
// app.use(morgan('tiny'))
morgan.token("body",(req)=>{
    return req.method === "POST" ? JSON.stringify(req.body) : " "
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

const getRandomId=(max)=>{
    return Math.floor(Math.random() * max)
}

const findExistingName = (newName)=>{
    return persons?.some(person=> person.name === newName) || false;
}

app.get('/api/persons',(request,response)=>{
    Person.find({}).then((persons) =>{
        response.json(persons)
    })
})

app.get("/info", (req, res) => {
    const now = new Date();
    const formattedDate = now.toString(); // Example: "Sat Jan 22 2022 22:27:20 GMT+0200 (Eastern European Standard Time)"
    const personsLength=persons.length
    console.log(personsLength)
    res.send(`<p>
            Phonebook has info for ${personsLength} people <br />
            ${formattedDate}
        </p>`);
});

app.get('/api/persons/:id',(request,response)=>{
    Person.findById(request.params.id).then(person => {
        response.json(person)
      }).catch(error=>{
        response.status(404).json({error: `person with ${request.params.id} not found`})
      })
})

app.delete('/api/persons/:id',(req,res)=>{
    const id = req.params.id
    Person.findByIdAndDelete(id).then((person) =>{
        if(!person){
            return res.status(404).json({error: `person with ${id} not found`})
        }
        console.log(`Person with id ${id} deleted`)
        res.status(204).end()
      }).catch(error=>{
        console.error("Delete Error:",error)
        res.status(500).json({error: `person with ${id} not deleted`})
    })
})

app.post('/api/persons', (req, res) => {
    const { name, number } = req.body;

    if (!name) {
        return res.status(400).json({ error: "Name is missing" });
    }
    if (!number) {
        return res.status(400).json({ error: "Number is missing" });
    }
    
    Person.findOne({ name })
        .then(existingPerson => {
            if (existingPerson) {
                return res.status(409).json({ error: "Person already exists" });
            }
            const person = new Person({ name, number });
            return person.save();
        })
        .then(savedPerson => {
            if (savedPerson) {
                res.status(201).json(savedPerson);
            }
        })
        .catch(error => {
            console.error("Error:", error);
            if (!res.headersSent) { // Prevent double response
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
});




app.put('/api/persons/:id', (req, res) => {
    const id = req.params.id;
    const { name, number } = req.body;

    if (!name || !number) {
        return res.status(400).json({ error: "Name and number are required" });
    }

    Person.findByIdAndUpdate(
        id,
        { name, number },
        { new: true, runValidators: true }
    )
    .then(updatedPerson => {
        if (!updatedPerson) {
            return res.status(404).json({ error: "Person not found" });
        }
        res.status(200).json(updatedPerson);
    })
    .catch(error => {
        console.error("Update error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    });
});


const PORT = process.env.PORT || 3001
app.listen(PORT,()=>{
    console.log(`App running on port ${PORT}`)
})