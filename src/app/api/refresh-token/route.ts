import { verifyRefreshToken, signToken } from "@/lib/jwt";

export async function POST(request: Request) {
  try {
    const { refreshToken } = await request.json();

    if (!refreshToken) {
      return Response.json(
        { error: "Refresh token is required" },
        { status: 400 },
      );
    }

    const payload = verifyRefreshToken(refreshToken);
    if (!payload) {
      return Response.json({ error: "Invalid refresh token" }, { status: 401 });
    }

    const newAccessToken = signToken({
      userId: payload.userId,
      email: payload.email,
      name: payload.name,
    });

    return Response.json(
      {
        message: "Token refreshed successfully",
        accessToken: newAccessToken,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log("Error in refresh token:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
