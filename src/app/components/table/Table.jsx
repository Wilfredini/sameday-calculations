"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

const TableMap = ({ allCargoDetails, id }) => {
  const [defaultValues, client, sdl, price] = Object.entries(allCargoDetails);
  const router = useRouter();
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  });

  return (
    <div className="flex w-3/4 flex-col gap-3">
      <Table
        color="primary"
        selectionMode="single"
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>KLIENT</TableColumn>
          <TableColumn>SDL#</TableColumn>
          <TableColumn>NÁKLAD</TableColumn>
          <TableColumn>PRODEJKA</TableColumn>
        </TableHeader>
        {allCargoDetails?.map((details, index) => (
          <TableBody key={details._id}>
            {details?.map((detail) => (
              <TableRow
                key={detail._id}
                onClick={() =>
                  router.replace(
                    `/calculations/activeCalculations/${detail._id}`
                  )
                }
                className="cursor-pointer"
              >
                <TableCell>{detail.client}</TableCell>
                <TableCell>{detail.sdl}</TableCell>
                <TableCell>Prodejka</TableCell>
                <TableCell>{formatter.format(detail.price)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        ))}
      </Table>
    </div>
  );
};

export default TableMap;
