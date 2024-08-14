"use client";

import { BellIcon } from "lucide-react";
import { Button } from "../ui/button";
import { CommandData } from "./CommandData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Header = () => {
  const [notification, setNotification] = useState<any>([
    {
      text: "This is a notification",
      date: "02/01/2012",
      read: false,
    },
    {
      text: "This is another notification",
      date: "02/01/2012",
      read: false,
    },
  ]);
  return (
    <div className="grid grid-cols-2 gap-4 p-4 border-b">
      <CommandData />
      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="relative" variant="outline" size="icon">
              <div
                className={` absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${
                  notification.find((x: any) => x.read === true)
                    ? "bg-green-500"
                    : "bg-neutral-200"
                }`}
              ></div>
              <BellIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notification.map((item: any, key: number) => (
              <DropdownMenuLabel
                key={key}
                className="cursor-pointer p-1 hover:bg-neutral-50
              transition flex items-start gap-2"
              >
                <div>
                  <div
                    className={`h-3 w-3 rounded-full my-1 ${
                      !item.read ? "bg-green-500" : "bg-neutral-200"
                    }`}
                  ></div>
                  <p> {item.text}</p>
                  <p> {item.date}</p>
                </div>
              </DropdownMenuLabel>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
