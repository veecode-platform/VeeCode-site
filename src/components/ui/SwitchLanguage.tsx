"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { IoLanguageOutline } from "react-icons/io5";
import { usePathname, useRouter } from "@/i18n/routing";

const SwitchLanguage = () => {
  const [dropdownShow, setDropdownShow] = React.useState<boolean>(false);
  const t = useTranslations("localeSwitcher");

  const pathName = usePathname();
  const router = useRouter();

  const handleToggleDropdown = () => setDropdownShow(!dropdownShow);

  const handleChooseLanguage = (lgn: string) => {
    handleToggleDropdown();
    console.log("lgn", lgn); // TODO remove this log
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    router.push(pathName as any, { locale: lgn });
  };

  return (
    <div className="relative flex items-center justify-center">
      <button
        aria-label="menu-language"
        className="text-2xl text-gray-300 hover:text-[#33ffce] cursor-pointer rounded-md w-[50px] h-[50px] border-[0.5px] border-[#ffffff2e] flex items-center justify-center "
        onClick={handleToggleDropdown}
      >
        <IoLanguageOutline />
      </button>

      {dropdownShow && (
        <div className="absolute top-[101%] left-[55%] p-0.3 bg-[rgba(30,30,30,0.90)]  border-[0.5px] border-[#ffffff2e] rounded-sm">
          <ul className="w-full flex flex-col items-start justify-center gap-0.5">
            <li
              className="p-1 text-lg text-gray-300 rounded-sm cursor-pointer w-[100%] h-8 flex items-center justify-center"
              onClick={() => handleChooseLanguage("pt")}
            >
              {t.rich("pt", {
                p: (chunks) => <p>{chunks}</p>,
                span: (chunks) => <span>{chunks}</span>,
              })}
            </li>
            <li
              className="py-1 px-2 text-lg text-gray-300 rounded-sm cursor-pointer w-[100%] h-8 flex items-center justify-center"
              onClick={() => handleChooseLanguage("en")}
            >
              {t.rich("en", {
                p: (chunks) => <p>{chunks}</p>,
                span: (chunks) => <span>{chunks}</span>,
              })}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SwitchLanguage;
