import connect from "../../utils/dbConnect";
import ResumeDetails from "../../models/ResumeDetail";

//upload resume details to mongo db
async function uploadResumeDetails(req, res) {
  //connect to db
  let db = await connect();

  if (db) {
    console.log("connected to db");
  }

  //upload to db
  const body = JSON.parse(req.body);
  const resume = new ResumeDetails(body.resumeData);
  await resume.save();

  //return response
  return res
    .status(200)
    .json({ message: "Item successfully created", resume: resume });
}

export default uploadResumeDetails;
