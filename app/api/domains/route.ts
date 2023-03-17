import { NextResponse } from "next/server";
import data from "@root/assets/data/dataset.json"

export async function GET(request: Request) {
  return NextResponse.json(data);
}
