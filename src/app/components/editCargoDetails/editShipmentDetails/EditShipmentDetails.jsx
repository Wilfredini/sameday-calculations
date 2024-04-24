import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { Button } from "@nextui-org/react";

const EditShipmentDetails = ({
  fields,
  append,
  isSubmitting,
  errors,
  register,
  remove,
  client,
  sdl,
  defaultValues,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <div className="flex flex-row justify-around items-center">
          <div className="flex flex-col w-64">
            <label htmlFor="client" className="font-bold dark:text-cyan-300">
              Klient
            </label>
            <input
              placeholder="Jméno klienta"
              name="client"
              defaultValue={client}
              className={`p-2 rounded-lg ${
                errors.client
                  ? "border-red-500 dark:border-red-500"
                  : "dark:border-cyan-300 border-zinc-300"
              } border-2 dark:text-cyan-300 dark:placeholder:text-white`}
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
                errors.sdl
                  ? "border-red-500 dark:border-red-500"
                  : "dark:border-cyan-300 border-zinc-300"
              } border-2 dark:text-cyan-300 dark:placeholder:text-white`}
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
        {fields?.map((field, index) => {
          return (
            <div
              key={index}
              className="relative flex flex-col shadow-lg p-10 pt-0 dark:bg-zinc-900 bg-zinc-300 gap-3 h-fit w-80 rounded-xl"
            >
              <h1 className="text-center text-3xl p-4">Detaily zboží</h1>
              <div className="flex flex-col">
                <label htmlFor="count" className="font-bold dark:text-cyan-300">
                  Počet kusů
                </label>
                <input
                  placeholder="Počet kusů"
                  name="count"
                  defaultValue={defaultValues?.[index].count}
                  className={`p-2 rounded-lg ${
                    errors?.defaultValues?.[index]?.count
                      ? "border-red-500 dark:border-red-500"
                      : "dark:border-cyan-300 border-zinc-300"
                  } border-2 dark:text-cyan-300 dark:placeholder:text-white`}
                  type="number"
                  {...register(`${index}.count`, {
                    required: {
                      value: true,
                      message: "Zadej počet kusů",
                    },
                  })}
                />
                {errors?.defaultValues?.[index]?.count && (
                  <div className="text-red-500">
                    {errors?.defaultValues[index]?.count.message}
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="long"
                    className="font-bold dark:text-cyan-300"
                  >
                    Délka
                  </label>
                  <input
                    placeholder="Délka"
                    name="long"
                    defaultValue={defaultValues?.[index]?.long}
                    className={`p-2 rounded-lg ${
                      errors?.defaultValues?.[index]?.width
                        ? "border-red-500 dark:border-red-500"
                        : "dark:border-cyan-300 border-zinc-300"
                    } border-2 dark:text-cyan-300 dark:placeholder:text-white`}
                    type="number"
                    {...register(`${index}.long`, {
                      required: {
                        value: true,
                        message: "Zadej délku",
                      },
                    })}
                  />
                  {errors?.defaultValues?.[index]?.long && (
                    <div className="text-red-500">
                      {errors?.defaultValues[index]?.long.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="width"
                    className="font-bold dark:text-cyan-300"
                  >
                    Šířka
                  </label>
                  <input
                    placeholder="Šířka"
                    name="width"
                    defaultValue={defaultValues?.[index]?.width}
                    className={`p-2 rounded-lg ${
                      errors?.defaultValues?.[index]?.width
                        ? "border-red-500 dark:border-red-500"
                        : "dark:border-cyan-300 border-zinc-300"
                    } border-2 dark:text-cyan-300 dark:placeholder:text-white`}
                    type="number"
                    {...register(`${index}.width`, {
                      required: {
                        value: true,
                        message: "Zadej Šířku",
                      },
                    })}
                  />
                  {errors?.defaultValues?.[index]?.width && (
                    <div className="text-red-500">
                      {errors?.defaultValues[index]?.width.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="high"
                    className="font-bold dark:text-cyan-300"
                  >
                    Výška
                  </label>
                  <input
                    placeholder="Výška"
                    name="high"
                    defaultValue={defaultValues?.[index]?.high}
                    className={`p-2 rounded-lg ${
                      errors?.defaultValues?.[index]?.width
                        ? "border-red-500 dark:border-red-500"
                        : "dark:border-cyan-300 border-zinc-300"
                    } border-2 dark:text-cyan-300 dark:placeholder:text-white`}
                    type="number"
                    {...register(`${index}.high`, {
                      required: {
                        value: true,
                        message: "Zadej výšku",
                      },
                    })}
                  />
                  {errors?.defaultValues?.[index]?.high && (
                    <div className="text-red-500">
                      {errors?.defaultValues[index]?.high.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="weight"
                    className="font-bold dark:text-cyan-300 "
                  >
                    Váha
                  </label>
                  <input
                    name="weight"
                    placeholder="Váha"
                    defaultValue={defaultValues?.[index]?.weight}
                    className={`p-2 rounded-lg ${
                      errors?.defaultValues?.[index]?.width
                        ? "border-red-500 dark:border-red-500"
                        : "dark:border-cyan-300 border-zinc-300"
                    } border-2 dark:text-cyan-300 dark:placeholder:text-white`}
                    type="number"
                    {...register(`${index}.weight`, {
                      required: {
                        value: true,
                        message: "Zadej váhu",
                      },
                    })}
                  />
                  {errors?.defaultValues?.[index]?.weight && (
                    <div className="text-red-500">
                      {errors?.defaultValues[index]?.weight.message}
                    </div>
                  )}
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
      <div className="w-full flex justify-center items-center gap-5">
        <Button
          isDisabled={isSubmitting}
          type="submit"
          className="dark:text-black dark:hover:text-black dark:hover:bg-cyan-200 dark:bg-cyan-300 mt-4 bg-slate-800 hover:text-white hover:bg-slate-700 text-white w-64 font-bold"
        >
          {isSubmitting ? "Loading" : "Upravit"}
        </Button>

        <Button
          onClick={() =>
            append({
              count: "",
              long: "",
              width: "",
              high: "",
              weight: "",
            })
          }
          className="dark:text-black dark:hover:text-black dark:hover:bg-green-700 dark:bg-green-500 mt-4 bg-green-500 hover:text-white hover:bg-green-700 text-white w-64 font-bold"
        >
          Přidat Detaily
        </Button>
      </div>
    </div>
  );
};

export default EditShipmentDetails;
