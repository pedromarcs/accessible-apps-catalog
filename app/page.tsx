// app/page.tsx
import { link } from 'fs';
import { ArrowRight, Search, User, Heart, Settings } from 'lucide-react';

// --- Dados Mockados para Simular o Conteúdo ---

const navItems = [
  { name: 'Perfil', icon: User, href: '/perfil' },
  { name: 'Favoritos', icon: Heart, href: '/favoritos' },
  { name: 'Configurações', icon: Settings, href: '/configuracoes'},
];

const categorias = [
  { name: 'Aprender', icon: '🧠', href: '#' },
  { name: 'Jogos', icon: '🎮', href: '#' },
  { name: 'Educação', icon: '🎓', href: '#' },
  { name: 'Comunicação', icon: '💻', href: '#' },
  { name: 'Leitura', icon: '📖', href: '#' },
  { name: 'Desenhar', icon: '🎨', href: '#' },
  { name: 'Música', icon: '🎵', href: '#' },
];

const appsPopulares = [
  { name: 'Khan Academy', icon: 'khan.png' }, 
  { name: 'Matematica Simples', icon: 'matematica.png' },
  { name: 'Estuda.com', icon: 'estuda.png' },
  { name: 'Color by Number', icon: 'color.png' },
  { name: 'Jogo da memória', icon: 'memoria.png' },
];

const appsNovos = [
  { name: 'Color Blind Pal', icon: 'colorblind.png' },
  { name: 'Seeing AI', icon: 'seing.png' },
  { name: 'Zotero', icon: 'zotero.png' },
  { name: 'Instapaper', icon: 'insta.png' },
  { name: 'Project Gutenberg', icon: 'project.png' },
];

// --- Componentes Reutilizáveis ---

// Componente Card
const ItemCard = ({
  name,
  icon,
  href,
  isCategory = false
}: {
  name: string;
  icon: any;
  href: string;
  isCategory?: boolean;
}) => (
  <a
    href={href}
    className={`flex flex-col items-center justify-center p-4 rounded-xl transition duration-200
                ${isCategory ? "bg-indigo-700/50 hover:bg-indigo-700/70" : "hover:bg-gray-100"}
                ${isCategory ? "text-white" : "text-gray-800"}`}
  >
    <div className={`text-4xl mb-1 ${isCategory ? "text-white" : "text-indigo-600"}`}>
      {isCategory ? icon : (
        <img
          src={`/images/${icon}`}
          alt={name}
          className="w-12 h-12 rounded-lg object-cover"
        />
      )}
    </div>
    <span
      className={`text-sm font-medium text-center ${
        isCategory ? "text-white" : "text-gray-600"
      }`}
    >
      {name}
    </span>
  </a>
);

// Seção (Populares / Novos)
const AppSection = ({
  title,
  apps
}: {
  title: string;
  apps: typeof appsPopulares;
}) => (
  <section className="bg-white p-6 rounded-2xl shadow-lg mt-8 border border-gray-200">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center">
        <ArrowRight className="w-5 h-5 mr-2 text-indigo-600 rotate-180" />
        {title}
      </h2>
      <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center">
        Ver Todos
        <ArrowRight className="w-4 h-4 ml-1" />
      </a>
    </div>

    <div className="grid grid-cols-5 gap-4">
      {apps.map((app) => (
        <ItemCard
          key={app.name}
          name={app.name}
          icon={app.icon}
          href={`/app/${app.name.toLowerCase().replace(/\s/g, "-")}`}
        />
      ))}
    </div>
  </section>
);

// --- Componente Principal ---

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* 1. Navbar */}
      <header className="bg-indigo-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="/login"
              className="bg-white/20 hover:bg-white/30 text-white font-semibold py-1 px-4 rounded-full text-sm mr-6"
            >
              Login
            </a>

            <span className="text-xl font-extrabold">AcessiAp</span>
          </div>
        </div>
      </header>

      {/* CONTEÚDO */}
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-12">

        {/* 2. Busca e Nav */}
        <section className="bg-white p-4 rounded-xl shadow-md border flex items-center justify-between">
          <div className="flex items-center bg-gray-100 p-2 rounded-full flex-grow mr-8">
            <Search className="w-5 h-5 text-gray-500 ml-2" />
            <input
              type="text"
              placeholder="Pesquisar Apps, categorias..."
              className="bg-transparent text-black p-2 w-full focus:outline-none"
            />
          </div>
          <nav className="flex space-x-6 text-gray-700">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex flex-col items-center hover:text-indigo-600"
                >
                  <IconComponent className="w-6 h-6" />
                  <span className="text-xs">{item.name}</span>
                </a>
              );
            })}
          </nav>
        </section>

        {/* 3. Categorias */}
        <section className="bg-indigo-600 p-6 rounded-2xl shadow-xl mt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Categorias</h2>

          <div className="grid grid-cols-7 gap-4">
            {categorias.map((cat) => (
              <ItemCard key={cat.name} name={cat.name} icon={cat.icon} href="#" isCategory />
            ))}
          </div>
        </section>

        {/* 4. Populares */}
        <AppSection title="Populares" apps={appsPopulares} />

        {/* 5. Novos */}
        <AppSection title="Novos" apps={appsNovos} />

        {/* 6. NOVA ABA: Avaliação + Contato */}
        <section className="grid grid-cols-2 gap-6 mt-12">

          {/* AVALIE NOSSO SITE */}
          <div className="bg-[#1f1f1f] rounded-3xl p-8 shadow-xl text-white">
            <h2 className="text-2xl font-bold mb-4">Avalie Nosso Site</h2>
            <p className="text-gray-300 mb-6">
              Seu feedback é usado para melhorar o AcessiAp 🔍
            </p>

            <div className="flex justify-between text-center">
              <div>
                <span className="text-4xl">😕</span>
                <p className="text-sm mt-2">precisa melhorar</p>
              </div>
              <div>
                <span className="text-4xl">🙂</span>
                <p className="text-sm mt-2">bom</p>
              </div>
              <div>
                <span className="text-4xl">😄</span>
                <p className="text-sm mt-2">ótimo</p>
              </div>
              <div>
                <span className="text-4xl">🤩</span>
                <p className="text-sm mt-2">sensacional</p>
              </div>
            </div>
          </div>

          {/* CONTATO */}
          <div className="bg-[#1f1f1f] rounded-3xl p-8 shadow-xl text-white">
            <h2 className="text-2xl font-bold text-center mb-6">
              Se Expresse Melhor Entrando Em Contato Conosco
            </h2>

            <div className="space-y-4">

              <div className="bg-gray-700 p-3 rounded-full flex items-center space-x-3">
                <img src="gmail.png" className="w-7" />
                <span className="text-sm">AcessiAp@Gmail.com</span>
              </div>

              <div className="bg-gray-700 p-3 rounded-full flex items-center space-x-3">
                <img src="whats.png" className="w-7" />
                <span className="text-sm">81 9999-9999</span>
              </div>
            </div>

            <div className="text-center mt-8">
              <img src="acessi.png" className="mx-auto w-16 opacity-80" />
              <p className="mt-2 text-sm text-gray-300">AcessiAp</p>
            </div>
          </div>

        </section>
        {/* 7. FAVORITOS — MESMO ESTILO DAS OUTRAS SEÇÕES */}
<section className="bg-white p-6 rounded-2xl shadow-lg mt-8 border border-gray-200">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-bold text-gray-800 flex items-center">
      <ArrowRight className="w-5 h-5 mr-2 text-indigo-600 rotate-180" />
      Favoritos
    </h2>

    <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center">
      Ver Todos
      <ArrowRight className="w-4 h-4 ml-1" />
    </a>
  </div>

  <div className="grid grid-cols-5 gap-4">

    {/* Item 1 */}
    <a className="flex flex-col items-center hover:bg-gray-100 p-4 rounded-xl transition">
      <img src="/images/khan.png" className="w-14 h-14 rounded-lg object-cover mb-2" />
      <span className="text-sm text-gray-700 font-medium text-center">Khan Academy</span>
    </a>

    {/* Item 2 */}
    <a className="flex flex-col items-center hover:bg-gray-100 p-4 rounded-xl transition">
      <img src="/images/insta.png" className="w-14 h-14 rounded-lg object-cover mb-2" />
      <span className="text-sm text-gray-700 font-medium text-center">Instapaper</span>
    </a>

    {/* Item 3 */}
    <a className="flex flex-col items-center hover:bg-gray-100 p-4 rounded-xl transition">
      <img src="/images/color.png" className="w-14 h-14 rounded-lg object-cover mb-2" />
      <span className="text-sm text-gray-700 font-medium text-center">Color by Number</span>
    </a>

    {/* Item 4 */}
    <a className="flex flex-col items-center hover:bg-gray-100 p-4 rounded-xl transition">
      <img src="/images/estuda.png" className="w-14 h-14 rounded-lg object-cover mb-2" />
      <span className="text-sm text-gray-700 font-medium text-center">Estuda.com</span>
    </a>

    {/* Botão Adicionar */}
    <button className="flex flex-col items-center hover:bg-gray-100 p-4 rounded-xl transition">
      <div className="w-14 h-14 rounded-full border-4 border-gray-700 flex items-center justify-center">
        <span className="text-3xl font-bold text-gray-700">+</span>
      </div>
      <span className="text-sm text-gray-700 font-medium mt-2 text-center">Adicionar</span>
    </button>

  </div>
</section>


      </div>
    </div>
  );
}
