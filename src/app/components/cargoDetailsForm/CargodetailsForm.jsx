"use client";

import { useFieldArray, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import ShipmentDetails from "./shipmentDetails/ShipmentDetails";

const CargodetailsForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,

    formState: { errors, isSubmitting, isSubmitted },
  } = useForm({
    defaultValues: [
      {
        count: "",
        long: "",
        width: "",
        high: "",
        weight: "",
      },
    ],
    transport: "",
    client: "",
    sdl: "",
    price: "",
    exwork: [{ cost: "" }],
    menaFrom: "",
    menaTo: "",
  });

  const { fields, append, remove } = useFieldArray({
    name: "defaultValues",
    control,
  });

  const {
    fields: exwFields,
    append: exwAppend,
    remove: exwRemove,
  } = useFieldArray({
    name: "exwork",
    control,
  });

  const onSubmit = async (data) => {
    const {
      defaultValues,
      sdl,
      client,
      price,
      transport,
      menaFrom,
      menaTo,
      exwork,
    } = data;
    console.log(data);
    try {
      const res = await fetch("api/cargoDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          defaultValues,
          exwork,
          menaFrom,
          menaTo,
          sdl,
          client,
          price,
          transport,
        }),
      });
      if (res.ok) {
        toast.success("Data uložena");
        router.replace("/calculations/activeCalculations");
      } else {
        toast.error("Uložení dat selhalo");
      }
    } catch (error) {
      toast.error("Při ukládání nastala chyba", error);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <ShipmentDetails
          fields={fields}
          append={append}
          errors={errors}
          register={register}
          remove={remove}
          isSubmitted={isSubmitted}
          isSubmitting={isSubmitting}
          exwRemove={exwRemove}
          exwFields={exwFields}
          exwAppend={exwAppend}
        />
      </form>

      <Toaster />
    </div>
  );
};

export default CargodetailsForm;
