import mongoose, { Schema } from 'mongoose'

const quotePostSchema = new Schema(
  {
    quote: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
)

export default mongoose.model('QuotePost', quotePostSchema)