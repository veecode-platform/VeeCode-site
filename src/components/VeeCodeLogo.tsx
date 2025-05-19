import { VEECODE_LOGO } from "@/lib/constants";
import Image from "next/image";
import React from "react";

interface VeeCodeLogoProps {
  width?: number;
  height?: number;
}

const VeeCodeLogo: React.FC<VeeCodeLogoProps> = ({
  width = 170,
  height = 53.03,
}) => (
  <Image
    src={VEECODE_LOGO}
    alt="VeeCode Logo"
    className={`aspect-[3.21] object-contain w-[${width}px] self-stretch shrink-0`}
    width={width}
    height={height}
  />
);

export default VeeCodeLogo;
