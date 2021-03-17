const { checkToken } = require('../helpers/jwt')
const User = require('../models/user')

function authenticate(req, res, next) {
  try {
    let decoded = checkToken(req.headers.access_token)
    User.findOne(decoded.email)
    .then(find => {
      if (!find) {
        throw { Error: 'please login first'}
      } else {
        req.user = find
        next()
      }
    }).catch(err => {
      res.status(401).json(err)
    })
  }
  catch(err) {
    res.status(401).json({ Error: 'please login first'})
  }
}

module.exports = {
  authenticate
}