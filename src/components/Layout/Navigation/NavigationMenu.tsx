import React from "react";
import { NAV_ITEMS } from "../../../data/constants";
import { useAuthContext } from "../../../context/AuthContext";
import { NavLink } from "react-router-dom";
import { UserIcon } from "../../Icons";

export const NavigationMenu: React.FC = () => {
  const { user } = useAuthContext();

  return (
    <div className="sm:block hidden">
      <ul className="flex flex-row ">
        {NAV_ITEMS.filter((item) => item.enabled).map((item) => (
          <li
            key={item.path}
            className=" font-neucha uppercase track text-clr-brown px-4 py-2 font-bold text-xl last-of-type:ml-12 last-of-type:border-l-[1px] last-of-type:border-solid last-of-type:border-clr-brown hover:text-clr-ligter-brown"
          >
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-clr-ligter-brown" : ""}`
              }
              to={item.path}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
        {user?.email && (
          <li>
            <NavLink to="/api/logout">
              <UserIcon />
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};
