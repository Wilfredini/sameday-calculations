import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { Button, Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import CurrencyInput from "../../currencyInput/CurrencyInput";

const ShipmentDetails = ({
  fields,
  append,
  isSubmitting,
  errors,
  register,
  remove,
  exwFields,
  exwAppend,
  exwRemove,
}) => {
  let options = [
    { label: "Export", value: "Export" },
    { label: "Import", value: "Import" },
  ];
  const [shadow, setShadow] = useState("d-none");
  console.log(fields);
  return (
    <div className="flex flex-col w-full gap-5">
      <div className="shadow-2xl my-10 p-10">
        <div className="flex justify-center">
          <Select
            items={options}
            label="Druh přepravy"
            placeholder="Vyberte druh přepravy"
            className="max-w-xs"
            variant="bordered"
            isInvalid={errors.transport ? true : false}
            errorMessage={errors.client && "Vyber druh přepravy"}
            classNames={{
              inputWrapper: "bg-white dark:bg-zinc-700 p-0",
              input: "p-2",
            }}
            {...register(`transport`, {
              required: {
                value: true,
              },
            })}
          >
            {options.map((option) => (
              <SelectItem key={option.value}>{option.value}</SelectItem>
            ))}
          </Select>
        </div>
        <div className="flex flex-row justify-around items-center">
          <div className="flex flex-col w-64 m-5">
            <Input
              size="sm"
              name="client"
              label="Klient"
              isInvalid={errors.sdl ? true : false}
              errorMessage={errors.client && "Zadej jméno klienta"}
              variant="bordered"
              className="w-64 p-0"
              classNames={{
                inputWrapper: "bg-white dark:bg-zinc-700",
              }}
              type="text"
              {...register(`client`, {
                required: {
                  value: true,
                  message: "zadej jméno klienta",
                },
              })}
            />
          </div>
          <div className="flex flex-col w-64">
            <Input
              size="sm"
              name="sdl"
              label="SDL"
              isInvalid={errors.sdl ? true : false}
              errorMessage={errors.sdl && "Zadej SDL referenci"}
              variant="bordered"
              className="w-64"
              classNames={{
                inputWrapper: "bg-white dark:bg-zinc-700",
              }}
              type="text"
              {...register(`sdl`, {
                required: {
                  value: true,
                  message: "zadej SDL referenci",
                },
              })}
            />
          </div>
        </div>
      </div>
      <div className={`flex flex-wrap gap-6 ${shadow}`}>
        {fields?.map((field, index) => {
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
                  variant="faded"
                  errorMessage={
                    errors?.defaultValues?.[index]?.count && "Zadej počet"
                  }
                  classNames={{
                    inputWrapper:
                      "bg-white dark:bg-zinc-700 p-0 w-full overflow-hidden",
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
              <AiOutlinePlus
                onClick={() =>
                  append({
                    count: "",
                    long: "",
                    width: "",
                    high: "",
                    weight: "",
                  })
                }
                className="absolute top-2 right-2 text-3xl cursor-pointer text-zinc-800 dark:text-green-500"
              />
              {index > 0 && (
                <BiMinus
                  onClick={() => remove(index)}
                  className="absolute top-2 left-2 text-3xl cursor-pointer text-red-500"
                />
              )}
            </div>
          );
        })}
      </div>
      <CurrencyInput
        fields={exwFields}
        exwAppend={exwAppend}
        register={register}
        errors={errors}
      />
      <div className="flex flex-col justify-center items-center w-full">
        <Input
          name="price"
          label="Price"
          errorMessage={errors?.price && "Zadej prodejní cenu"}
          isInvalid={errors.price ? true : false}
          variant="bordered"
          size="sm"
          endContent={
            <div>
              <span>€</span>
            </div>
          }
          className="w-64"
          classNames={{
            inputWrapper: "bg-white dark:bg-zinc-700 ",
          }}
          type="number"
          {...register(`price`, {
            required: {
              value: true,
              message: "Zadej cenu přepravy",
            },
          })}
        />
      </div>
      <div className="w-full flex justify-center items-center gap-5">
        <Button
          isDisabled={isSubmitting}
          type="submit"
          className="dark:text-black dark:hover:text-black dark:hover:bg-gray-300 dark:bg-gray-200 mt-4 bg-slate-800 hover:text-white hover:bg-slate-700 text-white w-64 font-bold"
        >
          {isSubmitting ? "Loading" : "Potvrdit"}
        </Button>

        <Button
          onClick={() =>
            append(
              {
                count: "",
                long: "",
                width: "",
                high: "",
                weight: "",
              },
              setShadow("d-block p-10 my-10 shadow-2xl")
            )
          }
          className="dark:text-black dark:hover:text-black dark:hover:bg-green-400 dark:bg-green-500 mt-4 bg-green-500 hover:text-white hover:bg-green-400 text-white w-64 font-bold"
        >
          Přidat Detaily
        </Button>
      </div>
    </div>
  );
};

export default ShipmentDetails;
