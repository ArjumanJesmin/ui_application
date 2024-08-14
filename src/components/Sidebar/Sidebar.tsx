import { Settings } from "lucide-react";
// import { ModeToggle } from "../Header/ModeToggle";
// import { menuList } from "../Item/Item";

import UserItem from "./UserItem";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import Link from "next/link";
import { menuList } from "./Item";

export function Sidebar() {
  return (
    <div className="flex flex-col max-w-[300px] w-[300px] rounded-lg border-r p-4 min-h-screen fixed">
      <div className="mb-4">
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.item.map((option: any, optionsKey: number) => (
                  <CommandItem
                    key={optionsKey}
                    className="gap-2 flex cursor-pointer"
                  >
                    {option.icon}
                    {option.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>
        <Link href="/team" className="flex items-center gap-2">
          <Settings />
          <span>Team Settings</span>
        </Link>
      </div>
      {/* <ModeToggle /> */}
    </div>
  );
}
