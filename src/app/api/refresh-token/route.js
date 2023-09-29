import axios from "axios";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function POST() {
  const refresh_token = cookies().get("refresh-token");
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/customers/refresh-token`,
      refresh_token
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
    if (error.response.status === 401) {
      cookies().delete("Refresh-JWT");
      cookies().delete("refresh-token");
    }
    return new NextResponse(error.response.data.message, {
      status: error.response.status,
    });
  }
}
