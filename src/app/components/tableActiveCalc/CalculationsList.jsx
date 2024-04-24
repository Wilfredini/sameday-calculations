import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import RemoveCalculations from "../removeCalculations/RemoveCalculations";

const getCalculations = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/cargoDetails", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Nelze načíst kalkulace");
    }
    return res.json();
  } catch (error) {
    console.log("Chyba v načítání kalkulací");
  }
};

async function CalculationsList() {
  const { allCargoDetails } = await getCalculations();

  return (
    <div className="w-full flex justify-center p-8">
      <table className="w-full text-center border border-separate shadow border-slate-300">
        <thead className="bg-slate-300 text-white">
          <tr>
            <th>KLIENT</th>
            <th>SDL</th>
            <th>NÁKLAD</th>
            <th>PRODEJKA</th>
            <th>AKCE</th>
          </tr>
        </thead>
        {allCargoDetails.map((details) => (
          <tbody key={details._id} className="bg-gray-100">
            <tr>
              <td>{details.client}</td>
              <td>{details.sdl}</td>
              {details.defaultValues.map((detail) => (
                <td key={detail.id}>{detail.count}</td>
              ))}
              {details.defaultValues.map((detail) => (
                <td key={detail.id}>{detail.high}</td>
              ))}
              <td className="flex justify-around">
                <Link href={`/editCalculations/${details._id}`}>
                  <FaEdit className="text-green-300 cursor-pointer" />
                </Link>
                <RemoveCalculations id={details._id} />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
export default CalculationsList;
