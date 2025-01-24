// import "./navigation.css";
import { Logo } from "../../Icons";
import { DropDownMenu } from "./DropDownMenu";
import { NavigationMenu } from "./NavigationMenu";

const Navigation = () => {
  return (
    <nav className="flex justify-around items-center h-28 statis top-0 left-0 z-50 font-medium border-b-[1px] border-clr-brown border-solid">
      <Logo />
      <DropDownMenu />
      <NavigationMenu />
    </nav>
  );
};

export default Navigation;
