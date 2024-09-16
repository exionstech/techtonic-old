import { NextResponse } from "next/server";

export const GET = () => {
  return new NextResponse("Welcome! But go to a valid route");
};
