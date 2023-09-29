import axios from "axios";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function POST(req, res) {
  const body = await req.json();
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/customers/login`,
      body
    );
    cookies().set({
      name: "Refresh-JWT",
      value: response.data["Refresh-JWT"],
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    cookies().set({
      name: "refresh-token",
      value: response.data["refresh-token"],
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return new NextResponse(response.data.message, { status: response.status });
  } catch (error) {
    return new NextResponse(error.response.data.message, {
      status: error.response.status,
    });
  }
}
