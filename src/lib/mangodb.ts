import { MongoClient } from "mongodb";

const URI = process.env.MANGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(URI);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("yourDatabaseName"); // Replace with your database name
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

export default connectToDatabase;