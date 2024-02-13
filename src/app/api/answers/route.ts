import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "tbh/model/user";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { SECRET } from "tbh/constants";
import { NextRequest, NextResponse } from "next/server";
import { createAnswers } from "tbh/model/answers";

export async function POST(req: NextRequest) {
  try {
    const {
      userId,
      formData,
    }: { userId: number; formData: Record<number, number> } = await req.json();
    const dbRes = await createAnswers(
      Object.entries(formData).map(([id, val]) => ({
        question_id: id as unknown as number,
        user_id: userId,
        answer: val,
      })),
    );

    // Return the user data and token in the response
    return NextResponse.json(
      { dbRes },
      {
        status: 200,
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
