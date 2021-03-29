const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
  {
    userName: { type: String, required: true },
    avatarImg: {type: String, required:true},
    contents: { type: String, required: true },
    imgURL: { type: String, required: false }
    
  },
  { timestamps: true }
)

module.exports = mongoose.model('post', Post)