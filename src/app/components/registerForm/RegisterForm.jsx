"use client";

import { Button } from "@nextui-org/react";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [isVisible, setIsVisible] = useState(false);
  const togglevisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name && !email && !password) {
      setError("Musíš vyplnit všechna pole");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("Uživatel již existuje");
        return;
      }
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("Registrace uživatele selhala");
      }
    } catch (error) {
      console.log("Při registraci nastala chyba", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="dark:border dark:border-cyan-300 h-2/3 md:w-1/2 border-none md:border-solid flex flex-col justify-around columns-2 items-center gap-2 md:px-28 px-6 py-4 w-full bg-gray-200 dark:bg-black rounded-2xl "
      >
        <h1 className="text-2xl">Register Form</h1>
        <input
          type="text"
          placeholder="Jméno"
          label="Jméno"
          className="w-full p-4 border dark:border-cyan-400 rounded-xl px-5 placeholder:dark:text-cyan-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          label="Email"
          className="w-full p-4 border rounded-xl dark:border-cyan-400 placeholder:dark:text-cyan-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="w-full flex justify-center relative">
          <input
            type={isVisible ? "text" : "password"}
            label="Password"
            placeholder="Enter your password"
            className="w-full p-4 border rounded-xl dark:border-cyan-400 placeholder:dark:text-cyan-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="focus:outline-none absolute right-4 top-4"
            type="button"
            onClick={togglevisibility}
          >
            {isVisible ? (
              <AiFillEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <AiFillEye className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        </div>

        <Button
          type="submit"
          className="p-4 h-14 w-3/4 mt-8 dark:bg-cyan-500 text-white bg-gray-500"
        >
          Zaregistrovat
        </Button>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </>
  );
};

export default RegisterForm;
