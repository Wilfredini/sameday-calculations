import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import RemoveCalcElement from "../../removeSingleCalcElement/RemoveCalcElement";
import AddCalculations from "../../addCalculations/AddCalculations";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import uuid from "react-uuid";
import CurrencyInput from "../../currencyInput/CurrencyInput";

const EditShipmentDetails = ({
  isSubmitting,
  errors,
  register,
  client,
  sdl,
  price,
  defaultValues,
  id,
  toast,
  transport,
  exwork,
  menaFrom,
  menaTo,
}) => {
  let options = [
    { label: "Export", value: "Export" },
    { label: "Import", value: "Import" },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <div className="flex justify-center">
          <Select
            items={options}
            label="Druh přepravy"
            placeholder="Vyberte druh přepravy"
            className="max-w-xs"
            defaultSelectedKeys={[transport]}
            {...register(`transport`, {
              required: {
                value: true,
                message: "Zadej název klienta",
              },
            })}
          >
            {(option) => (
              <SelectItem key={option.value}>{option.label}</SelectItem>
            )}
          </Select>
        </div>
        <div className="flex flex-row justify-around items-center">
          <Link
            href={`/calculations/activeCalculations/${id}`}
            className="absolute left-3 top-3 text-gray-700"
          >
            <FaArrowLeft className="text-xl hover:text-2xl" />
          </Link>

          <div className="flex flex-col w-64">
            <label htmlFor="client" className="font-bold dark:text-cyan-300">
              Klient
            </label>
            <input
              placeholder="Jméno klienta"
              name="client"
              defaultValue={client}
              className={`p-2 rounded-lg ${
                errors.price
                  ? "border-red-500 dark:border-red-500"
                  : "dark:border-cyan-300 border-zinc-300"
              } border-2 dark:text-cyan-300 dark:placeholder:text-white w-64`}
              type="text"
              {...register(`client`, {
                required: {
                  value: true,
                  message: "Zadej název klienta",
                },
              })}
            />
            {errors.client && (
              <div className="text-red-500">{errors.client.message}</div>
            )}
          </div>
          <div className="flex flex-col w-64">
            <label htmlFor="sdl" className="font-bold dark:text-cyan-300">
              SDL#
            </label>
            <input
              placeholder="SDL"
              name="sdl"
              defaultValue={sdl}
              className={`p-2 rounded-lg ${
                errors.price
                  ? "border-red-500 dark:border-red-500"
                  : "dark:border-cyan-300 border-zinc-300"
              } border-2 dark:text-cyan-300 dark:placeholder:text-white w-64`}
              type="text"
              {...register(`sdl`, {
                required: {
                  value: true,
                  message: "Zadej SDL referenci",
                },
              })}
            />
            {errors.sdl && (
              <div className="text-red-500">{errors.sdl.message}</div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-6">
        {defaultValues?.map((field, index) => {
          return (
            <div
              key={field._id}
              className="relative flex flex-col shadow-lg p-10 pt-0 dark:bg-zinc-950 bg-zinc-300 gap-3 h-full w-96 rounded-xl"
            >
              <h1 className="text-center text-3xl p-4">Detaily zboží</h1>
              <div className="flex flex-col">
                <Input
                  name="count"
                  placeholder="Počet"
                  label="Počet"
                  labelPlacement="outside"
                  defaultValue={defaultValues[index].count || ""}
                  variant="bordered"
                  errorMessage={
                    errors?.defaultValues?.[index]?.count && "Zadej počet"
                  }
                  classNames={{
                    inputWrapper: "bg-white dark:bg-zinc-700 p-0",
                    input: "p-2",
                  }}
                  isInvalid={
                    errors?.defaultValues?.[index]?.count ? true : false
                  }
                  type="number"
                  {...register(`defaultValues.${index}.count`, {
                    required: {
                      value: true,
                      message: "Zadej počet",
                    },
                  })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <Input
                    name="long"
                    placeholder="Délka"
                    label="Délka"
                    labelPlacement="outside"
                    defaultValue={defaultValues[index].long || ""}
                    variant="bordered"
                    errorMessage={
                      errors?.defaultValues?.[index]?.long && "Zadej délku"
                    }
                    classNames={{
                      inputWrapper: "bg-white dark:bg-zinc-700 p-0",
                      input: "p-2",
                    }}
                    endContent={
                      <div>
                        <span className="p-2">cm</span>
                      </div>
                    }
                    isInvalid={
                      errors?.defaultValues?.[index]?.long ? true : false
                    }
                    type="number"
                    {...register(`defaultValues.${index}.long`, {
                      required: {
                        value: true,
                        message: "Zadej délku",
                      },
                    })}
                  />
                </div>
                <div className="flex flex-col">
                  <Input
                    name="width"
                    placeholder="Šířka"
                    label="Šířka"
                    labelPlacement="outside"
                    defaultValue={defaultValues[index].width || ""}
                    variant="bordered"
                    errorMessage={
                      errors?.defaultValues?.[index]?.width && "Zadej šířku"
                    }
                    classNames={{
                      inputWrapper: "bg-white dark:bg-zinc-700 p-0",
                      input: "p-2",
                    }}
                    endContent={
                      <div>
                        <span className="p-2">cm</span>
                      </div>
                    }
                    isInvalid={
                      errors?.defaultValues?.[index]?.width ? true : false
                    }
                    type="number"
                    {...register(`defaultValues.${index}.width`, {
                      required: {
                        value: true,
                        message: "Zadej šířku",
                      },
                    })}
                  />
                </div>
                <div className="flex flex-col">
                  <Input
                    name="high"
                    placeholder="Výška"
                    label="Výška"
                    labelPlacement="outside"
                    defaultValue={defaultValues[index].high || ""}
                    variant="bordered"
                    errorMessage={
                      errors?.defaultValues?.[index]?.high && "Zadej výšku"
                    }
                    classNames={{
                      inputWrapper: "bg-white dark:bg-zinc-700 p-0",
                      input: "p-2",
                    }}
                    endContent={
                      <div>
                        <span className="p-2">cm</span>
                      </div>
                    }
                    isInvalid={
                      errors?.defaultValues?.[index]?.high ? true : false
                    }
                    type="number"
                    {...register(`defaultValues.${index}.high`, {
                      required: {
                        value: true,
                        message: "Zadej výšku",
                      },
                    })}
                  />
                </div>
                <div className="flex flex-col">
                  <Input
                    name="weight"
                    placeholder="Váha"
                    label="Váha"
                    labelPlacement="outside"
                    defaultValue={defaultValues[index].weight || ""}
                    variant="bordered"
                    errorMessage={
                      errors?.defaultValues?.[index]?.width && "Zadej váhu"
                    }
                    classNames={{
                      inputWrapper: "bg-white dark:bg-zinc-700 p-0",
                      input: "p-4",
                    }}
                    endContent={
                      <div>
                        <span className="p-2">kg</span>
                      </div>
                    }
                    isInvalid={
                      errors?.defaultValues?.[index]?.width ? true : false
                    }
                    type="number"
                    {...register(`defaultValues.${index}.weight`, {
                      required: {
                        value: true,
                        message: "Zadej váhu",
                      },
                    })}
                  />
                </div>
              </div>
              <div>
                <RemoveCalcElement
                  id={id}
                  nestedId={field._id}
                  toast={toast}
                  className={
                    "absolute top-3 left-3 text-red-500 cursor-pointer flex justify-center items-center"
                  }
                />
              </div>
              <div>
                <AddCalculations toast={toast} id={id} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col justify-center items-center w-full">
        <label htmlFor="price" className="font-bold dark:text-cyan-300">
          Price
        </label>
        <input
          placeholder="Price"
          name="price"
          defaultValue={price}
          className={`p-2 rounded-lg ${
            errors.price
              ? "border-red-500 dark:border-red-500"
              : "dark:border-cyan-300 border-zinc-300"
          } border-2 dark:text-cyan-300 dark:placeholder:text-white w-64`}
          type="number"
          {...register(`price`, {
            required: {
              value: true,
              message: "Zadej cenu přepravy",
            },
          })}
        />

        {errors.price && (
          <div className="text-red-500">{errors.price.message}</div>
        )}
      </div>
      <CurrencyInput
        toast={toast}
        id={id}
        register={register}
        exwork={exwork}
        menaFrom={menaFrom}
        menaTo={menaTo}
      />
      <div className="w-full flex justify-center items-center gap-5">
        <Button
          isDisabled={isSubmitting}
          type="submit"
          className="dark:text-black dark:hover:text-black dark:hover:bg-cyan-200 dark:bg-cyan-300 mt-4 bg-slate-800 hover:text-white hover:bg-slate-700 text-white w-64 font-bold"
        >
          {isSubmitting ? "Loading" : "Upravit"}
        </Button>

        <Button className="dark:text-black dark:hover:text-black dark:hover:bg-green-700 dark:bg-green-500 mt-4 bg-green-500 hover:text-white hover:bg-green-700 text-white w-64 font-bold">
          Přidat Detaily
        </Button>
      </div>
    </div>
  );
};

export default EditShipmentDetails;
