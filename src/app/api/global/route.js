import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axiosInstance from "@/services/axiosInstance";
export async function PUT(req, res) {
  const Refresh_JWT = cookies().get("Refresh-JWT");
  const body = await req.json();
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  try {
    const response = await axiosInstance.put(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/${url}`,
      body,
      {
        headers: {
          Authorization: `Bearer ${Refresh_JWT.value}`,
        },
      }
    );
    return new NextResponse(response.data, { status: response.status });
  } catch (error) {
    console.log(error);
    return new NextResponse(error.response.data.message, {
      status: error.response.status,
    });
  }
}
