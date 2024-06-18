"use client";
import { ImBin } from "react-icons/im";
import { useRouter } from "next/navigation";

const RemoveSingleCalculations = ({ id, nestedId, toast, className }) => {
  const router = useRouter();
  const removeCalculations = async () => {
    const confirmed = confirm("Opravdu chcete vymazat tyto data?");
    console.log(nestedId);
    if (confirmed) {
      const res = await fetch(
        `http://localhost:3000/api/cargoDetails?id=${id}&nestedId=${nestedId}`,
        {
          method: "PATCH",
        }
      );
      if (res.ok) {
        toast.success("Data odstraněna");
        router.refresh();
      }
    }
  };
  return <ImBin size={15} onClick={removeCalculations} className={className} />;
};

export default RemoveSingleCalculations;
