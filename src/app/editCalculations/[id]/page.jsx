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
  const { defaultValues, sdl, client } = cargoDetails;
  return (
    <div className="dark:bg-zinc-800 w-full h-dvh flex bg-zinc-100 mx-auto p-10">
      {" "}
      <EditCargoDetailsForm
        sdl={sdl}
        client={client}
        defaultValues={defaultValues}
        id={id}
      />
      {JSON.stringify({ cargoDetails })}
    </div>
  );
}
