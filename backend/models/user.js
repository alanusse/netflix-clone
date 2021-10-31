const { Schema, model, SchemaTypes } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const validator = require('validator')
const passwordMethods = require('../utils/passwordMethods')
const constants = require('../constants')

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is a required field.'],
    validate: [validator.isEmail, 'Email is invalid.']
  },

  password: {
    type: String,
    required: [true, 'Password is a required field.'],
    minlength: [
      constants.PASSWORD_MINIMUM_LENGTH,
      `Password minimum length is ${constants.PASSWORD_MINIMUM_LENGTH}`
    ]
  },

  profiles: [{ type: SchemaTypes.ObjectId, ref: 'Profile' }]
}, {
  timestamps: true
})

UserSchema.plugin(uniqueValidator, {
  message: 'An account with this {PATH} already exists.'
})

// before of user creation, the password will be replaced by a hashed password
UserSchema.pre('save', function (next) {
  const hashedPassword = passwordMethods.createHash(this.password)
  this.password = hashedPassword
  next()
})

UserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = document._id.toString()
    delete returnedObject._id
    delete returnedObject.password
    delete returnedObject.__v
  }
})

module.exports = model('User', UserSchema)
