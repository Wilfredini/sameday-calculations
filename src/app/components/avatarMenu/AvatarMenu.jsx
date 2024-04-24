import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

import {
  DropdownMenu,
  Dropdown,
  DropdownItem,
  User,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";

export default function AvatarMenu() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <NavbarItem className="rounded-full cursor-pointer hover:scale-105">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <User
              isBordered
              as="button"
              className="transition-transform flex flex-col"
              color="primary"
              name={session?.user?.name}
              size="sm"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-bold">{session?.user?.name}</p>
            </DropdownItem>
            <DropdownItem key="settings" href="/mysettings">
              Můj Profil
            </DropdownItem>
            <DropdownItem key="configurations" href="/configurations">
              Konfigurace
            </DropdownItem>
            <DropdownItem onClick={() => signOut()} key="logout" color="danger">
              Odhlásit
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarItem>
    );
  }
}
