const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    intro: {
      type: String,
      required: true,
    },
    picURL: {
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
  }
)

// create mongoose Model
const AboutUs = mongoose.model('AboutUS', AboutSchema)

// export the model so other modules can import it
module.exports = {
  AboutUs,
}