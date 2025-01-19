import { PAGE_NAME } from "../../data/consts";

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
