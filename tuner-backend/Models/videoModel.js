const mongoose = require("mongoose");

const VideoModel = new mongoose.Schema(
  {
    userid: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: true,
    },
    visibility: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Video = new mongoose.model("video", VideoModel);
module.exports = Video;