import React from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import VeeCodeLogo from "../VeeCodeLogo";

const Header: React.FC = () => {
  return (
    <header className="justify-between items-center self-stretch flex min-h-[94px] w-full gap-[40px_100px] flex-wrap bg-[rgba(30,30,30,0.90)] px-10 py-5 max-md:max-w-full max-md:px-5">
      <Link href="/">
        <VeeCodeLogo />
      </Link>
      <nav className="self-stretch flex min-w-60 items-center gap-[40px_70px] text-xl text-neutral-50 font-normal flex-wrap my-auto max-md:max-w-full">
        <Link
          href="product"
          className="text-neutral-50 self-stretch my-auto hover:text-[rgba(51,255,205,1)]"
        >
          Produto
        </Link>
        <Link
          href="solutions"
          className="text-neutral-50 self-stretch my-auto hover:text-[rgba(51,255,205,1)]"
        >
          Soluções
        </Link>
        <Link
          href="resources"
          className="text-neutral-50 self-stretch gap-2.5 whitespace-nowrap my-auto p-2.5 hover:text-[rgba(51,255,205,1)]"
        >
          Recursos
        </Link>
        <Link
          href="comparison"
          className="text-neutral-50 self-stretch my-auto hover:text-[rgba(51,255,205,1)]"
        >
          Veecode vs. Backstage
        </Link>
      </nav>
      <Button variant="secondary" size="default">
        Acesse a Demo
      </Button>
    </header>
  );
};

export default Header;
