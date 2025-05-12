import React from "react";
import VeeCodeLogo from "../VeeCodeLogo";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="items-center self-stretch flex w-full flex-col bg-black mt-[88px] max-md:max-w-full max-md:mt-10 max-md:px-5 pt-20 pb-10 px-8">
      <div className="w-full max-w-[1204px] max-md:max-w-full">
        <div className="w-full gap-[60px] pb-28 max-md:max-w-full max-md:pb-[100px]">
          <div className="content-start align-top justify-start flex-wrap flex w-full gap-8 max-md:max-w-full">
            <div className="min-w-60">
              <VeeCodeLogo width={197} height={75} />
            </div>
            <div className="min-w-40 justify-center flex flex-col text-base text-white flex-1 shrink basis-[0%] gap-4">
              <h3 className="self-stretch gap-2 font-bold whitespace-nowrap leading-[1.2]">
                Sobre
              </h3>
              <nav className="justify-center flex flex-col font-medium text-center leading-none gap-2 mt-4">
                <Link
                  href="#how-it-works"
                  className="flex hover:text-[rgba(51,255,205,1)]"
                >
                  <div className="items-center flex gap-1">
                    <span className="self-stretch overflow-hidden my-auto">
                      Como funciona
                    </span>
                  </div>
                </Link>
                <Link
                  href="#support"
                  className="flex whitespace-nowrap mt-2 hover:text-[rgba(51,255,205,1)]"
                >
                  <div className="items-center flex gap-1">
                    <span className="self-stretch overflow-hidden my-auto">
                      Suporte
                    </span>
                  </div>
                </Link>
                <Link
                  href="#community"
                  className="self-stretch flex mt-2 hover:text-[rgba(51,255,205,1)]"
                >
                  <div className="items-center flex gap-1">
                    <span className="self-stretch overflow-hidden my-auto">
                      Junte-se à comunidade
                    </span>
                  </div>
                </Link>
                <Link
                  href="#contact"
                  className="flex mt-2 hover:text-[rgba(51,255,205,1)]"
                >
                  <div className="items-center flex gap-1">
                    <span className="self-stretch overflow-hidden my-auto">
                      Fale Conosco
                    </span>
                  </div>
                </Link>
              </nav>
            </div>
            <div className="min-w-40 justify-center flex flex-col flex-1 shrink basis-[0%] gap-4">
              <h3 className="self-stretch gap-2 text-base text-white font-bold whitespace-nowrap leading-[1.2]">
                Recursos
              </h3>
              <nav className="justify-center flex flex-col gap-2 mt-4">
                <Link
                  href="#documentation"
                  className="flex text-base text-white font-medium whitespace-nowrap text-center leading-none hover:text-[rgba(51,255,205,1)]"
                >
                  <div className="items-center flex gap-1">
                    <span className="self-stretch overflow-hidden my-auto">
                      Documentação
                    </span>
                  </div>
                </Link>
                <Link
                  href="#vkdr"
                  className="flex text-base text-white font-medium whitespace-nowrap text-center leading-none mt-2 hover:text-[rgba(51,255,205,1)]"
                >
                  <div className="items-center flex gap-1">
                    <span className="self-stretch overflow-hidden my-auto">
                      VKDR
                    </span>
                  </div>
                </Link>
                <Link
                  href="#devportal"
                  className="flex text-base text-white font-medium whitespace-nowrap text-center leading-none mt-2 hover:text-[rgba(51,255,205,1)]"
                >
                  <div className="items-center flex gap-1">
                    <span className="self-stretch overflow-hidden my-auto">
                      DevPortal
                    </span>
                  </div>
                </Link>
                <Link
                  href="#plugins"
                  className="flex text-base text-white font-medium whitespace-nowrap text-center leading-none mt-2 hover:text-[rgba(51,255,205,1)]"
                >
                  Plugins
                </Link>
              </nav>
            </div>
            <div className="min-w-40 justify-center flex flex-col text-base text-white flex-1 shrink basis-[0%] gap-4">
              <h3 className="self-stretch gap-2 font-bold whitespace-nowrap leading-[1.2]">
                Mais
              </h3>
              <nav className="justify-center flex flex-col font-medium text-center leading-none gap-2 mt-4">
                <Link
                  href="#blog"
                  className="flex whitespace-nowrap hover:text-[rgba(51,255,205,1)]"
                >
                  <div className="items-center flex gap-1">
                    <span className="self-stretch overflow-hidden my-auto">
                      Blog
                    </span>
                  </div>
                </Link>
                <Link
                  href="#privacy"
                  className="self-stretch flex mt-2 hover:text-[rgba(51,255,205,1)]"
                >
                  <div className="items-center flex gap-1">
                    <span className="self-stretch overflow-hidden my-auto">
                      Políticas de Privacidade
                    </span>
                  </div>
                </Link>
                <Link
                  href="#terms"
                  className="flex mt-2 hover:text-[rgba(51,255,205,1)]"
                >
                  <div className="items-center flex gap-1">
                    <span className="self-stretch overflow-hidden my-auto">
                      Termos de Serviço
                    </span>
                  </div>
                </Link>
                <Link
                  href="#faq"
                  className="flex whitespace-nowrap mt-2 hover:text-[rgba(51,255,205,1)]"
                >
                  <div className="items-center flex gap-1">
                    <span className="self-stretch overflow-hidden my-auto">
                      FAQ
                    </span>
                  </div>
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex min-h-px w-full flex-col items-stretch justify-center max-md:max-w-full">
          <div className="border min-h-px w-full bg-[#D2D5E2] border-[rgba(210,213,226,1)] border-solid max-md:max-w-full" />
        </div>
        <div className="self-stretch w-full content-center flex-wrap gap-[24px_var(--inline-2xl,24px)] text-sm text-white font-normal leading-[1.4] py-[20px] max-md:max-w-full text-center">
          <p>Copyright © 2025 Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
