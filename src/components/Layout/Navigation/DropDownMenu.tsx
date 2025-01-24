import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HamburgerMenu } from "../../Icons";
import { NAV_ITEMS } from "../../../data/constants";

interface DropDownButtonProps {
  isActive: boolean;
  onClick: () => void;
}

const DropDownButton = ({ isActive, onClick }: DropDownButtonProps) => (
  <button
    className="p-4 text-base text-clr-brown cursor-pointer block sm:hidden"
    onClick={onClick}
    aria-expanded={isActive}
    aria-label="Toggle navigation menu"
  >
    <HamburgerMenu size={50} />
  </button>
);

interface DropDownContentProps {
  isActive: boolean;
  onItemClick: () => void;
}

const DropDownContent = ({ isActive, onItemClick }: DropDownContentProps) => {
  if (!isActive) return null;

  return (
    <div className="absolute right-4 rounded-md flex flex-col bg-[#f9f9f9] min-w-[130px] drop-shadow-lg z-10">
      {NAV_ITEMS.filter((item) => item.enabled).map((item) => (
        <NavLink
          key={item.path}
          className={({ isActive }) =>
            `text-clr-brown whitespace-nowrap p-2 transition-colors hover:bg-gray-100 ${
              isActive ? "bg-gray-100" : ""
            }`
          }
          to={item.path}
          onClick={onItemClick}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export const DropDownMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isMenuActive =
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node);
      if (isMenuActive) setIsActive(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsActive(!isActive);
  const closeMenu = () => setIsActive(false);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <DropDownButton isActive={isActive} onClick={toggleMenu} />
      <DropDownContent isActive={isActive} onItemClick={closeMenu} />
    </div>
  );
};
