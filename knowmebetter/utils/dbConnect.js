// Import Package
import mongoose from "mongoose";

// Connecting to Database
async function connect() {
  // MongoDB URI
  const dbURI = process.env.DB_URL;

  try {
    // Connect to Database
    await mongoose.connect(dbURI);
    console.log("MongoDB Atlas Connected");
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

// Exports
export default connect;
