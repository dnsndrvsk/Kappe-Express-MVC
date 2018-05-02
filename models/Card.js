import mongoose, { Schema } from 'mongoose'
import commentSchema from './schemas/commentSchema'


const cardSchema = new Schema(
  {
    source: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['web design', 'illustration', 'photography', 'wallpapers', 'brochures'],
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    comments: [commentSchema]
  }
)


export default mongoose.model('Card', cardSchema)
