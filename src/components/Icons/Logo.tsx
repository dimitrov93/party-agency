import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/logo.png";

interface LogoProps {
  className?: string;
}

const LOGO_DIMENSIONS = {
  default: 'w-[110px]',
  xl: 'xl:max-w-full',
  lg: 'lg:max-w-[80%]',
  sm: 'sm:max-w-[70%]',
  xs: 'max-w-[60%]',
  xxs: 'max-[300px]:aspect-square',
} as const;

export const Logo: React.FC<LogoProps> = ({ className }) => {
  const logoClasses = [
    LOGO_DIMENSIONS.default,
    LOGO_DIMENSIONS.xl,
    LOGO_DIMENSIONS.lg,
    LOGO_DIMENSIONS.sm,
    LOGO_DIMENSIONS.xs,
    LOGO_DIMENSIONS.xxs,
    className,
  ].filter(Boolean).join(' ');

  return (
    <NavLink to="/" aria-label="Home">
      <img
        src={logo}
        alt="Fairy logo"
        className={logoClasses}
        loading="eager"
        width={110}
        height={110}
      />
    </NavLink>
  );
};

export default Logo;
