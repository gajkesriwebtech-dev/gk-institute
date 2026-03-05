"use client";

import React, { useState } from "react";
import { FALLBACK_COURSE_IMAGE } from "@/lib/cloudinary";

interface MediaImageProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const MediaImage: React.FC<MediaImageProps> = ({
  src,
  alt,
  width = 1200,
  height = 675,
  className = "",
}) => {
  const [failed, setFailed] = useState(false);
  const finalSrc = failed || !src ? FALLBACK_COURSE_IMAGE : src;

  return (
    <img
      src={finalSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
};

export default MediaImage;
