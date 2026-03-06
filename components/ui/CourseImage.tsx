"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FALLBACK_COURSE_IMAGE } from "@/lib/cloudinary";

interface CourseImageProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  sizes?: string;
}

export const CourseImage: React.FC<CourseImageProps> = ({
  src,
  alt,
  width = 1200,
  height = 675,
  className = "",
  style,
  sizes,
}) => {
  const [hasError, setHasError] = useState(false);
  const finalSrc = !src || hasError ? FALLBACK_COURSE_IMAGE : src;

  return (
    <Image
      src={finalSrc}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      style={style}
      className={className}
      onError={() => setHasError(true)}
    />
  );
};

export default CourseImage;
