import mongoose, { Schema } from 'mongoose'

const testimonialSchema = new Schema(
  {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    occupation: {
      type: String,
      required: true
    },
    company: String,
    message: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
)

export default mongoose.model('Testimonial', testimonialSchema)