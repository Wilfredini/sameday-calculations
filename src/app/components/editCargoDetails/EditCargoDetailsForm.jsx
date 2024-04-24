"use client";

import { useFieldArray, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import EditShipmentDetails from "./editShipmentDetails/EditShipmentDetails";

const EditCargoDetailsForm = ({ id, sdl, client, defaultValues }) => {
  const router = useRouter();
  const onSubmit = async (data) => {
    const {
      defaultValues: newDefaultValues,
      sdl: newSdl,
      client: newClient,
    } = data;

    try {
      const res = await fetch(`/api/cargoDetails/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newDefaultValues,
          newSdl,
          newClient,
        }),
      });
      if (res.ok) {
        toast.success("Data uložena");
        router.push("/calculations/activeCalculations");
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
  } = useForm(
    {
      defaultValues: defaultValues,
      client: client,
      sdl: sdl,
    },
    defaultValues
  );

  const { fields, append, remove } = useFieldArray({
    name: "defaultValues",
    control,
  });

  return (
    <div className="w-full">
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
          defaultValues={defaultValues}
        />
      </form>

      <Toaster />
    </div>
  );
};

export default EditCargoDetailsForm;
