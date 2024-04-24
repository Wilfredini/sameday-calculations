import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../lib/mongodb";
import CargoDetails from "../../../../../models/cargoDetails";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newDefaultValues: defaultValues,
    newClient: client,
    newSdl: sdl,
  } = await request.json();

  await connectMongoDB();
  await CargoDetails.findByIdAndUpdate(id, {
    defaultValues,
    client,
    sdl,
  });
  return NextResponse.json({ message: "Data upravena" }, { status: 200 });
}
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const cargoDetails = await CargoDetails.findOne({
    _id: id,
  });
  return NextResponse.json(
    {
      cargoDetails,
    },
    { status: 200 }
  );
}
