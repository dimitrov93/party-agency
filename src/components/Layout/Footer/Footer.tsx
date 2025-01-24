import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NAV_ITEMS, SOCIAL_MEDIA } from "../../../data/constants";

interface SocialLink {
  icon: React.ReactElement;
  url: string;
  label: string;
}

const FooterNavigation: React.FC = () => (
  <nav aria-label="Footer Navigation">
    <ul className="flex sm:flex-row flex-col gap-4">
      {NAV_ITEMS.filter((item) => item.enabled).map((item) => (
        <li key={item.path} className="hover:text-clr-ligter-brown">
          <Link to={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

const SocialLinks: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: <FaFacebookF />, url: SOCIAL_MEDIA.FACEBOOK, label: "Facebook" },
    { icon: <FaInstagram />, url: SOCIAL_MEDIA.INSTAGRAM, label: "Instagram" },
    { icon: <FaLinkedinIn />, url: SOCIAL_MEDIA.LINKEDIN, label: "LinkedIn" },
  ];

  return (
    <div className="flex flex-row gap-8 p-4 text-3xl">
      {socialLinks.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${link.label} page`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

const Copyright: React.FC = () => (
  <div className="mb-4">
    <small className="text-clr-brown">
      &copy; {new Date().getFullYear()} Fairy Tale. All rights reserved.
    </small>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto flex p-4 gap-2 flex-col items-center justify-center text-center border-t-[1px] border-clr-brown text-clr-brown text-base">
      <FooterNavigation />
      <SocialLinks />
      <Copyright />
    </footer>
  );
};

export default Footer;
