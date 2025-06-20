const express = require('express')
const mongoose = require('mongoose')
const config = require('./utils/config')
const app = express()
const Blog = require('./models/blog')
const logger = require('./utils/logger')
const mongoUrl = `${config.MONGODB_URI}`

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs)
  })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog.save().then((result) => {
    response.status(201).json(result)
  })
})

const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})