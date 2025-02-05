const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(express.json())
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
    response.json(persons)
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
    const id = request.params.id;
    const person = persons.find(person => person.id === id)
    if(person){
        response.json(person)
    }else{
        response.status(404).json({error:"id not found"}).end()
    }
})

app.delete('/api/persons/:id',(req,res)=>{
    const id = req.params.id
    persons = persons.filter(person=>person.id !== id)
    res.status(204).end()
})

app.post('/api/persons',(req,res)=>{
    const body = req.body

    if(!body.name ){
        return res.status(400).json({
            error:"name is missing"
        })
    }
    else if(!body.number){
        return res.status(400).json(
            {
                error : "number is missing"
            }
        )
    }

    const existingName = findExistingName(body.name)
    if(existingName){
        return res.status(400).json({
            error: "name must be unique"
        })
    }

    const person={
        id:getRandomId(10000),
        name:body.name,
        number:body.number,
        
    }
    persons = persons.concat(person)
    res.json(person)
     
})

const PORT = 3002
app.listen(PORT,()=>{
    console.log(`App running on port ${PORT}`)
})