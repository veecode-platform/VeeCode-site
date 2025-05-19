import React from "react";
import VeeCodeLogo from "../VeeCodeLogo";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="items-center self-stretch flex w-full flex-col bg-black max-md:max-w-full max-md:px-5 pt-20 pb-10 px-8">
      <div className="w-full max-w-[1204px] max-md:max-w-full">
        <div className="w-full gap-[60px] pb-28 max-md:max-w-full max-md:pb-[100px]">
          <div className="flex flex-col content-center justify-center align-middle md:flex-row text-center md:content-start md:align-top md:justify-start flex-wrap w-full gap-8 max-md:max-w-full">
            <div className="md:min-w-60 flex justify-center items-center md:items-start md:justify-start md:align-top md:mt-[-100px]">
              <VeeCodeLogo width={207} height={85} />
            </div>
            <div className="min-w-40 flex justify-center flex-col text-base text-white flex-1 shrink basis-[0%] gap-4">
              <h3 className="self-stretch md:text-left gap-2 font-bold whitespace-nowrap leading-[1.2]">
                Sobre
              </h3>
              <nav className="flex justify-center flex-col font-medium text-center leading-none gap-2 mt-4">
                <Link
                  href="#how-it-works"
                  className="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  Como funciona
                </Link>
                <Link
                  href="#support"
                  className="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  Suporte
                </Link>
                <Link
                  href="#community"
                  className="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  Junte-se à comunidade
                </Link>
                <Link
                  href="#contact"
                  className="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  Fale Conosco
                </Link>
              </nav>
            </div>
            <div className="min-w-40 justify-center flex flex-col flex-1 shrink basis-[0%] gap-4">
              <h3 className="self-stretch  md:text-left gap-2 text-base text-white font-bold whitespace-nowrap leading-[1.2]">
                Recursos
              </h3>
              <nav className="justify-center flex flex-col gap-2 mt-4">
                <Link
                  href="#documentation"
                  className="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  Documentação
                </Link>
                <Link
                  href="#vkdr"
                  className="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  VKDR
                </Link>
                <Link
                  href="#devportal"
                  className="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  DevPortal
                </Link>
                <Link
                  href="#plugins"
                  className="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  Plugins
                </Link>
              </nav>
            </div>
            <div className="min-w-40 justify-center flex flex-col text-base text-white flex-1 shrink basis-[0%] gap-4">
              <h3 className="self-stretch md:text-left gap-2 font-bold whitespace-nowrap leading-[1.2]">
                Mais
              </h3>
              <nav className="justify-center flex flex-col font-medium text-center leading-none gap-2 mt-4">
                <Link
                  href="#blog"
                  className="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  Blog
                </Link>
                <Link
                  href="#privacy"
                  className="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  Políticas de Privacidade
                </Link>
                <Link
                  href="#terms"
                  className="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  Termos de Serviço
                </Link>
                <Link
                  href="#faq"
                  className="text-neutral-300 hover:text-[rgba(51,255,205,1)] text-center md:text-left"
                >
                  FAQ
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex min-h-px w-full flex-col items-stretch justify-center max-md:max-w-full">
          <div className="border min-h-px w-full bg-[#D2D5E2] border-neutral-700 border-solid max-md:max-w-full" />
        </div>
        <div className="self-stretch w-full content-center flex-wrap gap-[24px_var(--inline-2xl,24px)] text-sm text-white font-normal leading-[1.4] py-[20px] max-md:max-w-full text-center">
          <p>Copyright © 2025 Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
