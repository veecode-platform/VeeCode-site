import { CHECK_ICON } from "@/lib/constants";
import Image from "next/image";

const CheckIcon = () => (
  <Image
    src={CHECK_ICON}
    alt=""
    className="aspect-[1] object-contain w-6 shrink-0"
    width={24}
    height={24}
    unoptimized
  />
);

export default CheckIcon;
