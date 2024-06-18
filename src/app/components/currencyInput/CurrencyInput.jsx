import { Select, SelectItem, Input } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa";
import AddCosts from "../addCosts/AddCosts";
let options = [
  { label: "USD", value: "USD" },
  { label: "CZK", value: "CZK" },
  { label: "EUR", value: "EUR" },
];

const CurrencyInput = ({
  fields,
  exwRemove,
  register,
  errors,
  menaFrom,
  menaTo,
  exwork,
  id,
  toast,
}) => {
  return (
    <div className="w-full bg-gray-100 text-center bg-inherit border-t-1 border-b-1 p-5 shadow-2xl">
      <h1 className="my-5">EXW / DAP</h1>
      <div>
        Exwork nebo DAP je v měně{" "}
        <Select
          items={options}
          label="Měna"
          className="w-24"
          name="menaFrom"
          defaultSelectedKeys={[menaFrom]}
          variant="bordered"
          {...register(`menaFrom`, {
            required: {
              value: true,
              message: "Zadej počet",
            },
          })}
          classNames={{
            inputWrapper: "bg-white dark:bg-zinc-700 p-0",
            input: "p-2",
          }}
        >
          {options.map((option) => (
            <SelectItem key={option.value}>{option.value}</SelectItem>
          ))}
        </Select>{" "}
        a měnu chci převéct do{" "}
        <Select
          items={options}
          label="Měna"
          name="menaTo"
          className="w-24"
          variant="bordered"
          defaultSelectedKeys={[menaTo]}
          classNames={{
            inputWrapper: "bg-white dark:bg-zinc-700 p-0",
            input: "p-2",
          }}
          {...register(`menaTo`, {
            required: {
              value: true,
              message: "Zadej počet",
            },
          })}
        >
          {options.map((option) => (
            <SelectItem key={option.value}>{option.value}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex justify-center items-center w-full px-20">
        <div className="flex flex-col w-64 m-5">
          {exwork
            ? exwork.map((field, index) => {
                return (
                  <Input
                    key={field._id}
                    name="cost"
                    placeholder="Cost"
                    label="Cost"
                    variant="faded"
                    defaultValue={[exwork[index].cost || ""]}
                    errorMessage={errors?.exwork?.[index]?.cost && "Zadej cost"}
                    classNames={{
                      inputWrapper: "bg-white dark:bg-zinc-700",
                      label: "my-1",
                    }}
                    endContent={
                      <div>
                        <span className="p-2">cm</span>
                      </div>
                    }
                    isInvalid={errors?.exwork?.[index]?.cost ? true : false}
                    type="number"
                    {...register(`exwork.${index}.cost`, {
                      required: {
                        value: true,
                        message: "Zadej cost",
                      },
                    })}
                  />
                );
              })
            : fields.map((field, index) => {
                return (
                  <Input
                    key={field._id}
                    name="cost"
                    placeholder="Cost"
                    label="Cost"
                    variant="faded"
                    errorMessage={errors?.exwork?.[index]?.cost && "Zadej cost"}
                    classNames={{
                      inputWrapper: "bg-white dark:bg-zinc-700",
                      label: "my-1",
                    }}
                    endContent={
                      <div>
                        <span className="p-2">cm</span>
                      </div>
                    }
                    isInvalid={errors?.exwork?.[index]?.cost ? true : false}
                    type="number"
                    {...register(`exwork.${index}.cost`, {
                      required: {
                        value: true,
                        message: "Zadej cost",
                      },
                    })}
                  />
                );
              })}
        </div>
        <AddCosts id={id} toast={toast} />
      </div>
    </div>
  );
};

export default CurrencyInput;
