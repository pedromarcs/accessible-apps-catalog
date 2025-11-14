// app/page.tsx

/**
 * Este é o componente da Página Inicial (Home Page).
 * Acessível em: http://localhost:3000/
 */
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <header className="py-6">
        <h1 className="text-4xl font-bold text-indigo-600">
          Catálogo de Apps Acessíveis
        </h1>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 p-4 text-center">
        <p className="text-xl mb-6 max-w-lg">
          Bem-vindo! Este é o seu ponto de partida para explorar aplicativos
          focados em acessibilidade.
        </p>

        <section className="mt-8">
          <a
            href="/login"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 mr-4"
          >
            Entrar
          </a>
          <a
            href="/cadastro"
            className="bg-white text-indigo-600 border border-indigo-600 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            Cadastrar
          </a>
        </section>
      </main>

      <footer className="py-4 text-sm text-gray-500">
        © 2025 Catálogo Acessível. Todos os direitos reservados.
      </footer>
    </div>
  );
}