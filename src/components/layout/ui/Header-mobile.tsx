"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import clsx from "clsx";

const MenuMobile = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="2xl:hidden p-2.5 cursor-pointer hover:text-color-primary"
      >
        <RxHamburgerMenu size={30} />
      </button>

      {open && (
        <div
          className={clsx(
            "fixed top-[94px] left-0 z-[9999] transition-all duration-500 ease-in w-full h-full bg-neutral-800 md:w-[70%]",
            open
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-start justify-start gap-8 my-15 text-xl">
            <Link
              href="product"
              className="text-neutral-50 self-stretch my-auto hover:text-[rgba(51,255,205,1)] p-4 hover:bg-neutral-700"
            >
              Produto
            </Link>
            <Link
              href="solutions"
              className="text-neutral-50 self-stretch my-auto hover:text-[rgba(51,255,205,1)] p-4 hover:bg-neutral-700"
            >
              Soluções
            </Link>
            <Link
              href="resources"
              className="text-neutral-50 self-stretch gap-2.5 whitespace-nowrap my-auto hover:text-[rgba(51,255,205,1)] p-4 hover:bg-neutral-700"
            >
              Recursos
            </Link>
            <Link
              href="comparison"
              className="text-neutral-50 self-stretch my-auto hover:text-[rgba(51,255,205,1)] p-4 hover:bg-neutral-700"
            >
              Veecode vs. Backstage
            </Link>
            <div className="p-4">
              <Button variant="secondary" size="default">
                Acesse a Demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default MenuMobile;
