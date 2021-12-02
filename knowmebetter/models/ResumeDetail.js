const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  fullname: {
    type: String,
  },
  title: {
    type: String,
  },
  github: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  imageURI: {
    type: String,
  },
  email: {
    type: String,
  },
  city: {
    type: String,
  },
  phone: {
    type: Number,
  },
  description: {
    type: String,
  },
  country: {
    type: String,
  },
});
const ResumeDetails =
  mongoose.models.ResumeDetails ||
  mongoose.model("ResumeDetails", ResumeSchema);
export default ResumeDetails;
