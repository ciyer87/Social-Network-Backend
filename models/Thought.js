const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema({

  thoughtText: {
    type: String,
    required: true,
    trim: true,
    minlength: 1, 
    maxlength: 280
  },
  username: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  }
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
    }

);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;