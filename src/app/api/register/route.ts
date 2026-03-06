import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mangodb";

export async function POST(request: Request) {
  try {
    const { email, name, password } = await request.json();
    if (!email || !name || !password) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    const db = await clientPromise();
    const usersCollection = db.collection("users");
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return Response.json({ error: "User already exists" }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      email,
      name,
      password: hashedPassword,
    };
    const result = await usersCollection.insertOne(newUser);
    return Response.json(
      { message: "User registered successfully", userId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error in POST request:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
