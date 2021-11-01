const { Schema, model, SchemaTypes } = require('mongoose')
const CONSTANTS = require('../constants')

const ProfileSchema = new Schema({
  account: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
    required: [true, 'Account id is required.']
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

  isKidProfile: {
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

ProfileSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = document._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = model('Profile', ProfileSchema)
