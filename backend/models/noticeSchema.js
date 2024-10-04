const mongoose = require("mongoose");

const noticeSchema = mongoose.Schema({
  heading: {
    type: String,
    required: [true, "Enter valid message heading"],
  },
  noticeBody: {
    type: String,
    required: [true, "Enter valid notice body"],
  },
  projectId: {
    type: String, // format - {year}${department}${name}
    required: [true, "Enter valid projhect name"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Notice = mongoose.model("Notice", noticeSchema);

module.exports = Notice;
