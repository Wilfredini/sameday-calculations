"use client";

import { Button } from "@nextui-org/react";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const color = {
  white: "#fff",
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Nesprávné údaje");
        return;
      }

      router.replace("dashboard");
    } catch {
      console.log(error);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="dark:border dark:border-cyan-300 h-full w-full lg:w-3/4 xl:w-5/6 2xl:w-2/3 border-none md:border-solid flex flex-col justify-around columns-2 items-center gap-2 md:px-28 px-6 py-4  bg-gray-200 dark:bg-black rounded-2xl "
      >
        <h1 className="text-2xl">Login Form</h1>

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
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <AiFillEyeInvisible className="text-2xl text-gray-400 pointer-events-none" />
            ) : (
              <AiFillEye className="text-2xl text-gray-400 pointer-events-none" />
            )}
          </button>
        </div>

        <Button
          type="submit"
          className="p-4 h-14 w-full mt-8 dark:bg-cyan-500 text-white bg-gray-500"
        >
          Přihlásit
        </Button>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </>
  );
};

export default LoginForm;
