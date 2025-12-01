import React from "react";

// Tela refeita para ficar o mais fiel possível à imagem enviada
// Next.js + TailwindCSS

export default function FavoritesScreen() {
  return (
    <div className="min-h-screen bg-[#e7f2ff] flex flex-col items-center">
      {/* Top blue bar */}
      <header className="w-full bg-[#1e6df8] text-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-5 relative">
          {/* Back button */}
          <button className="flex items-center gap-3 text-white/95 hover:opacity-90 w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-sm">Voltar ao catálogo</span>
          </button>

          {/* Title */}
          <div className="pl-1 mt-1">
            <h1 className="text-xl font-semibold">Meus favoritos</h1>
            <p className="text-sm text-white/90">4 apps favoritos</p>
          </div>

          {/* Icon top-right */}
          <div className="absolute right-6 top-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xs">AcessiAp</div>
          </div>
        </div>
      </header>

      {/* Main box */}
      <main className="w-full flex justify-center mt-10">
        <div className="bg-[#2d8bff] w-[90%] max-w-6xl rounded-3xl p-10 shadow-lg min-h-[350px] flex flex-col items-center">
          <h2 className="text-white text-lg font-semibold self-start ml-4">favoritos</h2>

          {/* App grid */}
          <div className="mt-10 grid grid-cols-5 gap-10 w-full place-items-center">
            {/* Khan */}
            <div className="flex flex-col items-center gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Khan_Academy_logo.svg/1200px-Khan_Academy_logo.svg.png"
                className="w-20 h-20 object-contain bg-white rounded shadow"
              />
              <p className="text-white text-sm">Khan Academy</p>
            </div>

            {/* Instapaper */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 bg-white rounded shadow flex items-center justify-center">
                <span className="text-5xl font-serif text-black">I</span>
              </div>
              <p className="text-white text-sm">Instapaper</p>
            </div>

            {/* Color by Number */}
            <div className="flex flex-col items-center gap-3">
              <img
                src="https://play-lh.googleusercontent.com/8d2Jt_0uwZQzQ_EimeIS9oR8G5Hh5MIXPzOBBmvN6mx99TMnSwN_1pgLzXfhpSUs2A=w240-h480-rw"
                className="w-20 h-20 object-cover rounded shadow"
              />
              <p className="text-white text-sm">Color by Number</p>
            </div>

            {/* Estuda.com */}
            <div className="flex flex-col items-center gap-3">
              <img
                src="https://play-lh.googleusercontent.com/KkE-VPqjLKYj1WFJsbgx5-pX5lHObbIVdQydb9h9NP7VDaRao7IhiHBpjz2uVH54Hg=w240-h480-rw"
                className="w-20 h-20 bg-white rounded shadow object-contain"
              />
              <p className="text-white text-sm">Estuda.com</p>
            </div>

            {/* Add button */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full border-4 border-black bg-transparent flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <p className="text-white text-sm">adicionar</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}