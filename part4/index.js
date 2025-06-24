const express = require('express')
const mongoose = require('mongoose')
const config = require('./utils/config')
const app = express()
const Blog = require('./models/blog')
const logger = require('./utils/logger')
const mongoUrl = `${config.MONGODB_URI}`
const blogsRouter = require('./routes/blogs')
// app.use('/api/blogs', blogsRouter)
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(express.json())

app.use('/api/blogs', blogsRouter)

const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = app