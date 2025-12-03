import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FavoritesScreen() {
  return (
    <div className="min-h-screen bg-[#e7f2ff] flex flex-col items-center">

      {/* Barra azul superior */}
      <header className="w-full bg-[#1e6df8] text-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* Botão de voltar */}
          <Link
            href="/catalogo"
            className="flex items-center text-sm font-medium hover:text-indigo-200 transition"
          >
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
            Voltar ao catálogo
          </Link>

        </div>
      </header>

      {/* Caixa principal */}
      <main className="w-full flex justify-center mt-10">
        <div className="bg-[#2d8bff] w-[90%] max-w-6xl rounded-3xl p-10 shadow-lg min-h-[350px] flex flex-col items-center">
          
          <h2 className="text-white text-lg font-semibold self-start ml-4">
            Favoritos
          </h2>

          {/* Grid de apps */}
          <div className="mt-10 grid grid-cols-5 gap-10 w-full place-items-center">

            {/* Khan Academy */}
            <div className="flex flex-col items-center gap-3">
              <img
                src="images/khan.png"
                alt="Logo do Khan Academy"
                className="w-20 h-20 object-contain bg-white rounded shadow"
              />
              <p className="text-white text-sm">Khan Academy</p>
            </div>

            {/* Instapaper */}
            <div className="flex flex-col items-center gap-3">
              <img
                src="images/insta.png"
                alt="Logo do Instapaper"
                className="w-20 h-20 object-contain bg-white rounded shadow"
              />
              <p className="text-white text-sm">Instapaper</p>
            </div>

            {/* Color by Number */}
            <div className="flex flex-col items-center gap-3">
              <img
                src="images/colorblind.png"
                alt="Logo do Color by Number"
                className="w-20 h-20 object-contain bg-white rounded shadow"
              />
              <p className="text-white text-sm">Color by Number</p>
            </div>

            {/* Estuda.com */}
            <div className="flex flex-col items-center gap-3">
              <img
                src="images/estuda.png"
                alt="Logo do Estuda.com"
                className="w-20 h-20 object-contain bg-white rounded shadow"
              />
              <p className="text-white text-sm">Estuda.com</p>
            </div>

            {/* Botão adicionar */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full border-4 border-black bg-transparent flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <p className="text-white text-sm">Adicionar</p>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}
