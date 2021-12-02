import connect from "../../../utils/dbConnect";
import ResumeDetails from "../../../models/ResumeDetail";

//Get resume details via id
async function getResumeDetail(req, res) {
  //connect to db
  let db = await connect();

  if (db) {
    console.log("connected to db");
  }
  //get resume id
  const { resumeId } = req.query;
  // get resume details via id
  const ResumeDetail = await ResumeDetails.find({
    _id: resumeId,
  });
  // console.log("resume via id", ResumeDetail);
  //Return response
  return res
    .status(200)
    .json({ message: "Item successfully retrieved", resume: ResumeDetail });
}

export default getResumeDetail;
