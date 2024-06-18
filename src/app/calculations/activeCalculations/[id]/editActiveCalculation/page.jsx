import EditCargoDetailsForm from "@/app/components/editCargoDetails/EditCargoDetailsForm";

const getCalculationById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/cargoDetails/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Chyba načítání dat");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditCargoDetails({ params }) {
  const { id } = params;
  const { cargoDetails } = await getCalculationById(id);
  const {
    defaultValues,
    exwork,
    sdl,
    client,
    price,
    transport,
    menaFrom,
    menaTo,
  } = cargoDetails;
  const { _id } = defaultValues;
  console.log(price);
  return (
    <div className="dark:bg-zinc-800 w-full h-min-dvh flex bg-zinc-100 mx-auto relative">
      <EditCargoDetailsForm
        sdl={sdl}
        client={client}
        price={price}
        defaultValues={defaultValues}
        id={id}
        defaultValuesId={_id}
        transport={transport}
        exwork={exwork}
        menaFrom={menaFrom}
        menaTo={menaTo}
      />
    </div>
  );
}
