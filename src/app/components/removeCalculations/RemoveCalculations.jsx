"use client";

import { ImBin } from "react-icons/im";
import { useRouter } from "next/navigation";

const RemoveCalculations = ({ id, toast }) => {
  const router = useRouter();
  const removeCalculations = async () => {
    const confirmed = confirm("Opravdu chcete vymazat tyto data?");

    if (confirmed) {
      const res = await fetch(
        `http://localhost:3000/api/cargoDetails?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        toast.success("Data odstraněna");
        router.push("/calculations/activeCalculations");
        router.refresh();
      }
    }
  };
  return (
    <ImBin
      size={22}
      onClick={removeCalculations}
      className="text-red-500 cursor-pointer"
    />
  );
};

export default RemoveCalculations;
