
import LogoSvg from "../assets/logo.svg?react";

function Logo({ variant = "primary", className = "" }) {
  const colors = {
    primary: "text-primary",
    white: "text-white",
  };

  return (
    <LogoSvg
      className={`h-11 w-[253px] max-w-full ${colors[variant]} ${className}`}      role="img"
      aria-label="Digital Store"
    />
  );
}

export default Logo;
