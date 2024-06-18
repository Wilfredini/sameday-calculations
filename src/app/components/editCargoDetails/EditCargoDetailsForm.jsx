"use client";

import { useFieldArray, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import EditShipmentDetails from "./editShipmentDetails/EditShipmentDetails";

const EditCargoDetailsForm = ({
  id,
  sdl,
  client,
  defaultValues,
  exwork,
  price,
  transport,
  menaFrom,
  menaTo,
}) => {
  const router = useRouter();

  const onSubmit = async (data) => {
    const {
      defaultValues: newDefaultValues,
      exwork: newExwork,
      sdl: newSdl,
      client: newClient,
      price: newPrice,
      transport: newTransport,
      menaFrom: newMenaFrom,
      menaTo: newMenaTo,
    } = data;

    try {
      const res = await fetch(`/api/cargoDetails/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newDefaultValues,
          newExwork,
          newSdl,
          newClient,
          newPrice,
          newTransport,
          newMenaFrom,
          newMenaTo,
        }),
      });
      if (res.ok) {
        router.push("/calculations/activeCalculations");
        toast.success("Data uložena");
      } else {
        toast.error("Uložení dat selhalo");
      }
    } catch (error) {
      toast.error("Při ukládání nastala chyba", error);
    }
  };
  const {
    register,
    handleSubmit,
    control,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    exwork,
    client: client,
    sdl: sdl,
    price: price,
    transport: transport,
    menaFrom: menaFrom,
    menaTo: menaTo,
  });

  const { fields, append, remove } = useFieldArray({
    name: "defaultValues",
    control,
  });

  return (
    <div className="w-full p-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <EditShipmentDetails
          fields={fields}
          append={append}
          errors={errors}
          register={register}
          remove={remove}
          isSubmitting={isSubmitting}
          client={client}
          sdl={sdl}
          price={price}
          defaultValues={defaultValues}
          id={id}
          toast={toast}
          transport={transport}
          exwork={exwork}
          menaFrom={menaFrom}
          menaTo={menaTo}
        />
      </form>

      <Toaster />
    </div>
  );
};

export default EditCargoDetailsForm;
