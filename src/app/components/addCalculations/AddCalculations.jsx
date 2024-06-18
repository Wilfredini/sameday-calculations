import { useRouter } from "next/navigation";
import { AiOutlinePlus } from "react-icons/ai";

const AddCalculations = ({ toast, id }) => {
  const router = useRouter();
  const addCalc = async () => {
    const res = await fetch(`http://localhost:3000/api/cargoDetails?id=${id}`, {
      method: "PUT",
    });
    if (res.ok) {
      toast.success("Přidány detaily");
      router.refresh();
    }
  };

  return (
    <div className="absolute top-3 right-3 cursor-pointer">
      <AiOutlinePlus size={20} onClick={addCalc} />
    </div>
  );
};

export default AddCalculations;
