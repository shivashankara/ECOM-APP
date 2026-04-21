export async function POST(request: Request) {
  try {
    return Response.json(
      { message: "Logout successful" },
      {
        status: 200,
        headers: {
          "Set-Cookie":
            "refreshToken=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0",
        },
      },
    );
  } catch (error) {
    console.log("Error in logout:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
