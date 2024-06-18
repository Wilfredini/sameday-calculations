import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../lib/mongodb";
import CargoDetails from "../../../../../models/cargoDetails";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newDefaultValues: defaultValues,
    newExwork: exwork,
    newClient: client,
    newSdl: sdl,
    newTransport: transport,
    newMenaFrom: menaFrom,
    newMenaTo: menaTo,
  } = await request.json();

  await connectMongoDB();
  await CargoDetails.findByIdAndUpdate(id, {
    defaultValues,
    exwork,
    client,
    sdl,
    transport,
    menaFrom,
    menaTo,
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

export async function DELETE(request) {
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

export async function PATCH(request) {
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
