if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const { connect } = require('./config/mongodb')
const express = require('express')
const router = require('./routes')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', router)

connect().then( async (database) => {
  try {
    console.log('mongodb berhasil terhubung')
  
    app.listen(PORT, () => {
      console.log('this app is running on port', PORT)
    })
  } catch (error) {
    console.log('cant connet to mongodb')
  }
})
