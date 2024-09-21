import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "ํYosita satiman",
    studentId: "660610788",
  });
};
