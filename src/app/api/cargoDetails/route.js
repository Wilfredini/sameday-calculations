import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import CargoDetails from "../../../../models/cargoDetails";

export async function POST(req) {
  const {
    defaultValues,
    client,
    sdl,
    price,
    transport,
    exwork,
    menaFrom,
    menaTo,
  } = await req.json();
  try {
    await connectMongoDB();
    await CargoDetails.create({
      defaultValues,
      exwork,
      client,
      sdl,
      price,
      transport,
      menaFrom,
      menaTo,
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
export async function PATCH(request) {
  const id = request.nextUrl.searchParams.get("id");
  const nestedId = request.nextUrl.searchParams.get("nestedId");
  console.log(id);
  const result = await CargoDetails.findByIdAndUpdate(
    { _id: id },
    {
      $pull: {
        defaultValues: { _id: nestedId },
      },
    },
    { new: true }
  );

  return NextResponse.json({ result }, { status: 200 });
}

export async function PUT(request) {
  const id = request.nextUrl.searchParams.get("id");
  const result = await CargoDetails.findOneAndUpdate(
    {
      $and: [{ _id: id }],
    },
    {
      $push: {
        defaultValues: { count: "", long: "", width: "", weight: "", high: "" },
      },
    },
    { new: true }
  );

  return NextResponse.json({ result }, { status: 200 });
}
