import mongoose, { Schema } from 'mongoose'

const asidePostSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
)

export default mongoose.model('AsidePost', asidePostSchema)