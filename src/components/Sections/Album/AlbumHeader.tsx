import React from "react";
import { Link } from "react-router-dom";

interface NavigationLink {
  path: string;
  label: string;
}

const DECORATION_LINKS: NavigationLink[] = [
  { path: "/decoration/birthday", label: "Рожден ден" },
  { path: "/decoration/baptism", label: "Кръщене" },
  { path: "/decoration/wedding", label: "Сватба" },
  { path: "/decoration/prom", label: "Абитуриентски бал" },
  { path: "/decoration/anniversary", label: "Юбилей" },
];

const AlbumHeader: React.FC = () => {
  const AlbumTitle: React.FC = () => {
    return (
      <h3 className="text-clr-brown font-bold">
        ИЗБЕРЕТЕ ОТ НАШИ ГОТОВИ ВИЗИИ
      </h3>
    );
  };

  const AlbumLinkSeparator: React.FC = () => {
    return <div className="border-b border-clr-brown w-full" />;
  };

  const AlbumLinksList: React.FC = () => {
    return (
      <ul className="flex gap-2">
        {DECORATION_LINKS.map(({ path, label }) => (
          <li className="text-nowrap max-sm:text-[.7em]" key={path}>
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    );
  };

  const AlbumLinks: React.FC = () => {
    return (
      <div className="flex justify-center items-center gap-4 text-clr-brown w-full max-sm:flex-col">
        <AlbumLinkSeparator />
        <AlbumLinksList />
        <AlbumLinkSeparator />
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center pb-4">
      <AlbumTitle />
      <AlbumLinks />
    </div>
  );
};

export default AlbumHeader;
