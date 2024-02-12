import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "tbh/model/user";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { SECRET } from "tbh/constants";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json();
    const user = await createUser(name);

    // Generate JWT token
    console.log(SECRET);

    const token = jwt.sign({ ...user, id: user.id.toString() }, SECRET);

    // Return the user data and token in the response
    return NextResponse.json(
      { user, token },
      {
        status: 200,
        headers: {
          "Set-Cookie": serialize("token", token, {
            httpOnly: true,
            path: "/",
          }),
        },
      },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      {
        status: 500,
      },
    );
  }
}
