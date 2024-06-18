import { useRouter } from "next/navigation";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

const AddCosts = ({ toast, id }) => {
  const router = useRouter();
  const addCost = async () => {
    const res = await fetch(`http://localhost:3000/api/cargoDetails?id=${id}`, {
      method: "PATCH",
    });
    if (res.ok) {
      toast.success("Přidány detaily");
      router.refresh();
    }
  };

  return (
    <div>
      <FaPlus size={20} onClick={addCost} />
    </div>
  );
};

export default AddCosts;
