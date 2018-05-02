import mongoose, { Schema } from 'mongoose'

const commentSchema = new Schema(
  {
    author: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    email: {
      type: String
    },
    website: {
      type: String
    }
  }
)

 export default commentSchema