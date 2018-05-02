import mongoose, { Schema } from 'mongoose'
import commentSchema from '../commentSchema'

const videoPostSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    comments: [commentSchema]
  }
)

export default mongoose.model('VideoPost', videoPostSchema)