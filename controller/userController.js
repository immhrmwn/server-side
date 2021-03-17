const User = require('../models/user')
const { checkPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
  static async find (req, res) {
    try {
      const users = await User.find()
      res.status(200).json(users)
    } catch (err) {
      console.log(err)
    }
  }

  static async deleteUser (req, res) {
    try {
      const { id } = req.params
      console.log(id, '<<<<id')
      const result = await User.remove(id)
      if(result.result.n === 0) throw { Error: 'data not found'}
      res.status(200).json({ messages: 'the account was successfully deleted'})
    } catch (err) {
      console.log(err, '<<<err')
      res.status(404).json(err)
    }
  }

  static async register (req, res) {
    try {
      const user = await User.register(req.body)
      console.log(user)
      res.status(201).json(user.ops)
    } catch (err) {
      console.log(err)
    }
  }

  static async login (req, res) {
    try {
      const { email, password } = req.body
      const result = await User.findOne(email)
      if (!result) throw { Error: 'invalid email or password'}
      const match = checkPassword(password, result.password)
      if (!match) throw { Error: 'invalid email or password'}
      const payload = {
        _id: result._id,
        name: result.name,
        email: result.email,
        phone_number: result.phone_number
      }
      const access_token = generateToken(payload)
      res.status(200).json({
        access_token,
        payload
      })
    } catch (err) {
      console.log(err, '<<<err')
      res.send(err)
    }
  }
}

module.exports = UserController