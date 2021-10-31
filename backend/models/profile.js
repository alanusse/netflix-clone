const { Schema, model, SchemaTypes } = require('mongoose')
const CONSTANTS = require('../constants')

const ProfileSchema = new Schema({
  account: {
    type: SchemaTypes.ObjectId,
    ref: 'User'
  },

  name: {
    type: String,
    required: [true, 'Profile name is required.'],
    minlength: [
      CONSTANTS.PROFILE_NAME_MINIMUM_LENGTH,
      `Profile name minimum length is ${CONSTANTS.PROFILE_NAME_MINIMUM_LENGTH}`
    ]
  },

  avatar: {
    type: String,
    required: [true, 'Avatar URL is required.']
  },

  kidProfile: {
    type: Boolean,
    required: [true, 'KidProfile field is required.']
  },

  myList: [{
    id: {
      type: String,
      required: [true, 'Movie ID is required.']
    },
    createdAt: {
      type: Date,
      default: new Date()
    }
  }],

  liked: [{
    id: {
      type: String,
      required: [true, 'Movie ID is required.']
    }
  }]
}, {
  timestamps: true
})

module.exports = model('Profile', ProfileSchema)
