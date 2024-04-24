import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import CargoDetails from "../../../../models/cargoDetails";

export async function POST(req) {
  const { defaultValues, client, sdl } = await req.json();
  try {
    await connectMongoDB();
    await CargoDetails.create({
      defaultValues,
      client,
      sdl,
    });
    return NextResponse.json(
      { message: "Detaily uloženy zaaregistrován" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Při ukládání nastala chyba" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectMongoDB();
  const allCargoDetails = await CargoDetails.find();
  return NextResponse.json({ allCargoDetails });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await CargoDetails.findByIdAndDelete(id);
  return NextResponse.json({ message: "Detaily smazány" });
}
