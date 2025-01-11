import React from "react";
import { PAGE_NAME } from "../../utils/consts";

export default function Title() {
  return (
    <h1 className="text-center text-clr-brown text-4xl md:text-5xl lg:text-[5.5rem] font-bold text-shadow">
      {PAGE_NAME}
    </h1>
  );
}
