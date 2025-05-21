import { VEECODE_LOGO_MOBILE } from "@/lib/constants";
import Image from "next/image";
import React from "react";

interface VeeCodeLogoMobileProps {
  width?: number;
  height?: number;
}

const VeeCodeLogoMobile: React.FC<VeeCodeLogoMobileProps> = ({
  width = 70,
  height = 70,
}) => (
  <Image
    src={VEECODE_LOGO_MOBILE}
    alt="VeeCode Logo"
    className={`object-contain w-[${width}px] self-stretch shrink-0`}
    width={width}
    height={height}
    unoptimized
  />
);

export default VeeCodeLogoMobile;
