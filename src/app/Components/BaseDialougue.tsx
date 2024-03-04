"use client";

import * as React from "react";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function CommandDialogDemo({
  open,
  setOpen,
  children
}: {
  open: boolean;
  setOpen: any;
  children: React.ReactNode;
}) {
  return (
    <>
      <CommandDialog  open={open} onOpenChange={setOpen}>
        {children}
      </CommandDialog>
    </>
  );
}
