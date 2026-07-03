"use client";

import { useState } from "react";

export function useCommandSearch() {

  const [open, setOpen] = useState(false);

  return {

    open,

    setOpen,

  };

}