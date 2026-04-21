import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mangodb";
import { signToken, signRefreshToken } from "@/lib/jwt";

export async function POST(request: Request) {
  try {
    const { email, name, password } = await request.json();
    if (!email || !name || !password) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 },
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
      createdAt: new Date(),
    };
    const result = await usersCollection.insertOne(newUser);
    const userId = result.insertedId.toString();

    // Generate JWT tokens
    const accessToken = signToken({
      userId,
      email,
      name,
    });
    const refreshToken = signRefreshToken({
      userId,
      email,
      name,
    });

    return Response.json(
      {
        message: "User registered successfully",
        userId,
        accessToken,
        refreshToken,
        user: { name, email },
      },
      {
        status: 201,
        headers: {
          "Set-Cookie": `refreshToken=${refreshToken}; Path=/; HttpOnly; SameSite=Strict`,
        },
      },
    );
  } catch (error) {
    console.error("Error in register POST request:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}
