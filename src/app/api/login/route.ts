import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mangodb";
import { signToken, signRefreshToken } from "@/lib/jwt";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return Response.json(
        { error: "Email and password are required" },
        { status: 400 },
      );
    }

    const db = await clientPromise();
    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne({ email });
    if (!user) {
      return Response.json(
        { error: "Invalid email or password" },
        { status: 401 },
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return Response.json(
        { error: "Invalid email or password" },
        { status: 401 },
      );
    }

    const userId = user._id.toString();

    // Generate JWT tokens
    const accessToken = signToken({
      userId,
      email: user.email,
      name: user.name,
    });

    const refreshToken = signRefreshToken({
      userId,
      email: user.email,
      name: user.name,
    });

    return Response.json(
      {
        message: "Login successful",
        accessToken,
        refreshToken,
        user: {
          userId,
          name: user.name,
          email: user.email,
        },
      },
      {
        status: 200,
        headers: {
          "Set-Cookie": `refreshToken=${refreshToken}; Path=/; HttpOnly; SameSite=Strict`,
        },
      },
    );
  } catch (error) {
    console.error("Error in login:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return Response.json({ error: errorMessage }, { status: 500 });
  }
  }
}
