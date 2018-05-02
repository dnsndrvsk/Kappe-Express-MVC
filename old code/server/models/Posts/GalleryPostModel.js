import mongoose, { Schema } from 'mongoose'
import commentSchema from '../commentSchema'

const galleryPostSchema = new Schema(
  {
    images: {
      type: Array,
      required: true
    },
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
    date: {
      type: Date,
      default: Date.now
    },
    comments: [commentSchema]
  }
)

export default mongoose.model('GalleryPost', galleryPostSchema)