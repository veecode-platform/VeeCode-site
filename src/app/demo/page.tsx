import DemoRequestForm from "@/components/ui/DemoRequestForm";
import Image from "next/image";
import React from "react";

const Demo: React.FC = () => {
  return (
    // <div className="bg-white flex flex-col overflow-hidden items-stretch min-h-screen">
    <main className="flex-grow">
      <section className="bg-gradient-to-r from-[rgba(30,30,30,0.95)] to-[rgba(30,30,30,0.85)] py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experimente o VeeCode Platform
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Veja como nossa plataforma pode transformar o desenvolvimento e
            gerenciamento de APIs da sua empresa com uma demonstração
            personalizada.
          </p>
          <a
            href="#demo-form"
            className="inline-block border border-[rgba(51,255,205,1)] text-white font-bold px-8 py-3 rounded-[10px] hover:bg-[rgba(51,255,205,0.1)] transition-colors"
          >
            Solicitar Demo
          </a>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">
            O que você verá na demonstração
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-[rgba(51,255,205,0.2)] p-3 rounded-full mr-4">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/3f29479865923c61da7e8ecc9503604d6fdb99a7?placeholderIfAbsent=true"
                    alt="API Icon"
                    className="w-8 h-8"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-bold">Catálogo de APIs</h3>
              </div>
              <p className="text-gray-700">
                Veja como centralizar e catalogar suas APIs de maneira
                eficiente, permitindo visualização, testes e gerenciamento em um
                único lugar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-[rgba(51,255,205,0.2)] p-3 rounded-full mr-4">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/6ade1f4ffae2bae5015a03c881668b7769bf852d?placeholderIfAbsent=true"
                    alt="Kong Icon"
                    className="w-8 h-8"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-bold">Kong Service Manager</h3>
              </div>
              <p className="text-gray-700">
                Conheça como gerenciar e administrar informações sobre os
                serviços do Kong, manipular rotas e gerenciar plugins.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-[rgba(51,255,205,0.2)] p-3 rounded-full mr-4">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/5379b002a3a44c83081f944e9c0b84339bc764c6?placeholderIfAbsent=true"
                    alt="Templates Icon"
                    className="w-8 h-8"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-bold">Software Templates</h3>
              </div>
              <p className="text-gray-700">
                Descubra como customizar seu ambiente com templates para
                desenvolvimento e infraestrutura, acelerando o processo de
                desenvolvimento.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-[rgba(51,255,205,0.2)] p-3 rounded-full mr-4">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/8e0fcd085acbe1d3ca271a4fac9e407f9a52a4b9?placeholderIfAbsent=true"
                    alt="RBAC Icon"
                    className="w-8 h-8"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-bold">VeeCode RBAC</h3>
              </div>
              <p className="text-gray-700">
                Entenda como configurar acessos customizados, garantindo que
                cada usuário veja apenas informações pertinentes e relevantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="demo-form" className="py-16 px-4">
        <DemoRequestForm />
      </section>
    </main>
  );
};

export default Demo;
