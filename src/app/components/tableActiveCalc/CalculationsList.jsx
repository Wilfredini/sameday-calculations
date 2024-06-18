import TableMap from "../table/Table";
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

async function CalculationsList({ id }) {
  const { allCargoDetails } = await getCalculations();
  const [defaultValues] = allCargoDetails;

  return (
    <div className="w-full flex justify-center p-8">
      <TableMap allCargoDetails={[allCargoDetails]} id={id} />
    </div>
  );
}
export default CalculationsList;
