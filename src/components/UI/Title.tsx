import React from "react";
import { PAGE_NAME } from "../../utils/consts";

export interface TitleProps {
  className?: string;
}

export default function Title({ className }: TitleProps) {
  return (
    <h1
      className={`${className} text-center text-clr-brown font-bold text-shadow`}
    >
      {PAGE_NAME}
    </h1>
  );
}
