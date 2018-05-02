import mongoose, { Schema } from 'mongoose'

const websitePostSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
)

export default mongoose.model('WebsitePost', websitePostSchema)