"use client";

import React from "react";

export interface LogoProps {
  src: string;
  name: string;
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  src,
  name,
  width = 160,
  height = 64,
  className = "",
}) => {
  return (
    <img
      src={src}
      alt={name}
      width={width}
      height={height}
      className={`w-auto h-auto object-contain transition-all duration-300 hover:scale-110 ${className}`.trim()}
      loading="lazy"
    />
  );
};

export default Logo;
