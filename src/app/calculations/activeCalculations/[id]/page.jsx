import RemoveCalculations from "@/app/components/removeCalculations/RemoveCalculations";
import RemoveSingleCalculations from "@/app/components/removeSingleCalcElement/RemoveCalcElement";
import { Link } from "@nextui-org/react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

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

export async function page({ params }) {
  const { id } = params;
  const { cargoDetails } = await getCalculationById(id);
  const { defaultValues, sdl, client, transport } = cargoDetails;
  const grossWeight = defaultValues?.map((detail) => detail.weight);

  const totalGrossweight = grossWeight?.reduce(
    (total, currentItem) =>
      (total = Number(total) + Number(currentItem) || 0).toFixed(0),
    0
  );

  const summary = defaultValues?.map(
    (detail) => (detail.long * detail.width * detail.high * detail.count) / 6000
  );
  const total = summary?.reduce(
    (total, currentItem) =>
      (total = Number(total) + Number(currentItem) || 0).toFixed(0),
    0
  );

  const chargeableWeight =
    Number(total) > Number(totalGrossweight) ? total : totalGrossweight;

  return (
    <div className="relative dark:bg-zinc-800 flex gap-5 justify-center items-center h-dvh px-4 bg-gray-100">
      <Link
        href="/calculations/activeCalculations"
        className="absolute left-3 top-3 text-gray-700"
      >
        <FaArrowLeft className="text-xl hover:text-2xl" />
      </Link>
      <div className="p-5 w-3/4 shadow-2xl bg-white dark:bg-gray-700 rounded-xl flex flex-col">
        <div className="flex justify-between items-center border-b-1 pb-5">
          <Link
            href={`/calculations/activeCalculations/${id}/editActiveCalculation`}
          >
            <FaEdit
              size={25}
              className="text-gray-700 dark:text-white cursor-pointer"
            />
          </Link>
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={100}
            className="dark:hidden"
          />
          <Image
            src="/brand-light.png"
            alt="logo"
            width={200}
            height={100}
            className="hidden dark:block"
          />
          <RemoveCalculations id={id} toast={toast} />
        </div>
        <div className="pt-5 border-b-1">
          <div className="relative">
            <div className="text-center m-5">
              <h1 className="text-3xl font-bold text-gray-600 dark:text-gray-400 flex flex-col">
                {client}
              </h1>
              <span className="dark:text-gray-500 text-gray-400">{sdl}</span>
            </div>
          </div>
          {defaultValues?.map((value) => {
            return (
              <ul
                key={value._id}
                className="flex justify-between items-center gap-5 p-5 dark:text-gray-300 m-5"
              >
                <li>
                  <strong>Počet kusů: </strong>
                  {value.count}
                </li>
                <li>
                  <strong>Délka: </strong>
                  {value.long}
                </li>
                <li>
                  <strong>Výška: </strong>
                  {value.high}
                </li>
                <li>
                  <strong>Šířka: </strong>
                  {value.width}
                </li>
                <li>
                  <strong>Váha: </strong>
                  {value.weight}
                </li>
                <RemoveSingleCalculations
                  id={id}
                  nestedId={value._id}
                  toast={toast}
                  className={
                    "text-red-500 cursor-pointer flex justify-center items-center"
                  }
                />
              </ul>
            );
          })}
          <div className="flex justify-around py-5">
            <div className=" left-10 top-0 text-blue-900 font-bold border border-blue-700 p-3">
              <strong className="text-green-700">Účtovaná váha: </strong>
              {chargeableWeight} kg
            </div>
            <div className=" right-10 top-0 text-blue-900 font-bold border border-blue-700 p-3">
              <strong className="text-green-700">Celková váha: </strong>
              {totalGrossweight} kg
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default page;
