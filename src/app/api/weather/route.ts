import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const API_KEY = process.env.WEATHER_API_KEY;
    if (!API_KEY) {
      return NextResponse.json({ error: "Missing API key" }, { status: 500 });
    }

    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city") || "London";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`
    );

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch weather data" }, { status: response.status });
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
