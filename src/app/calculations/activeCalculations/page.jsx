import { Button, Link } from "@nextui-org/react";

import CalculationsList from "@/app/components/tableActiveCalc/CalculationsList";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-100">
      <CalculationsList />
      <Button as={Link} href="/calculations">
        Vytvořit kalkulaci
      </Button>
    </div>
  );
};

export default page;
