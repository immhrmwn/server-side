const { getDataBase } = require('../config/mongodb')
const { ObjectId } = require('mongodb')
const { hashPassword } = require('../helpers/bcrypt')

class User {
  static find () {
    return getDataBase().collection('Users').find().toArray()
  }

  static register (newUsers) {
    newUsers.password = hashPassword(newUsers.password)
    return getDataBase().collection('Users').insertOne(newUsers)
  }

  static findOne (email) {
    return getDataBase().collection('Users').findOne({email})
  }

  static remove (id) {
    const query = {"_id": ObjectId(id)}
    return getDataBase().collection('Users').deleteOne(query)
  }

  // static delete (id, payload) {
  //   const query = {"_id": ObjectId(id)}
  //   const updateDoc = { $set: payload }
  //   return getDataBase().collection('Movies').updateOne(query, updateDoc)
  // }
}

module.exports = User
