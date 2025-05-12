import { VEECODE_LOGO } from "@/lib/constants";
import Image from "next/image";
import React from "react";

interface VeeCodeLogoProps {
  width?: number;
  height?: number;
}

const VeeCodeLogo: React.FC<VeeCodeLogoProps> = ({ width, height }) => (
  <Image
    src={VEECODE_LOGO}
    alt="VeeCode Logo"
    className="aspect-[3.21] object-contain w-[170px] self-stretch shrink-0 my-auto"
    width={width ?? 170}
    height={height ?? 53.03}
  />
);

export default VeeCodeLogo;
