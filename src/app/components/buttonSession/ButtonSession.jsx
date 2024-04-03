"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function ButtonSession() {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    return (
      <Button
        className="bg-gray-500  hover:text-black hover:bg-transparent text-white md:flex dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white "
        as={Link}
        href="/login"
        variant="faded"
      >
        Přihlásit
      </Button>
    );
  }
}
