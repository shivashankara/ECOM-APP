import { MongoClient, Db } from "mongodb";

const URI = process.env.MANGODB_URI || "mongodb://localhost:27017";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

async function connectToDatabase(): Promise<Db> {
  // Return cached connection if available
  if (cachedClient && cachedDb) {
    return cachedDb;
  }

  try {
    const client = new MongoClient(URI);
    await client.connect();

    const db = client.db("yourDatabaseName"); // Replace with your database name

    // Cache the client and database
    cachedClient = client;
    cachedDb = db;

    console.log("Connected to MongoDB");
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

export default connectToDatabase;
