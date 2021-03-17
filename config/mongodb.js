const { MongoClient } = require('mongodb')

let db = null
const MONGO_URI= process.env.MONGO_URI

async function connect () {
  try {
    const uri = MONGO_URI
    const client = new MongoClient(uri, { useUnifiedTopology: true })
    
    await client.connect()

    const database = client.db('sprout')
    db = database
    
    return database
  } catch (error) {
    console.log(error)
  }
}

function getDataBase () {
  return db
}

module.exports = {
  connect,
  getDataBase
}