const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      trim: true,
      unique: true,
      required: 'User Name is Required'
    },

    email: {
        type: String,
        unique: true,
        required: 'Email is Required',
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
      },

    thoughts: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
        }
    ],
    friends:  [
        {
        type: Schema.Types.ObjectId,
        ref: 'User'
        }
    ],

    },

    {
    toJSON: {
      virtuals: true
    },
    id: false
    }
  //
);

// Create a virtual property `username` that's computed from the front part of `email` before the `@` symbol.
// YOUR CODE HERE

UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});


const User = model('User', UserSchema);

module.exports = User;