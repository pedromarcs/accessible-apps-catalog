// app/page.tsx
import { ArrowRight, Search, User, Heart, Settings } from 'lucide-react';

// --- Dados Mockados para Simular o Conteúdo ---

const navItems = [
  { name: 'Perfil', icon: User, href: '/perfil' },
  { name: 'Favoritos', icon: Heart, href: '/favoritos' },
  { name: 'Configurações', icon: Settings, href: '/configuracoes' },
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
  { name: 'Khan Academy', icon: 'popular-1.png' },
  { name: 'Matematica Simples', icon: 'popular-2.png' },
  { name: 'Estuda.com', icon: 'popular-3.png' },
  { name: 'Color by Number', icon: 'popular-4.png' },
  { name: 'Jogo da memória', icon: 'popular-5.png' },
];

const appsNovos = [
  { name: 'Color Blind Pal', icon: 'novo-1.png' },
  { name: 'Seeing AI', icon: 'novo-2.png' },
  { name: 'Zotero', icon: 'novo-3.png' },
  { name: 'Instapaper', icon: 'novo-4.png' },
  { name: 'Project Gutenberg', icon: 'novo-5.png' },
];

// --- Componentes Reutilizáveis ---

// Componente Card de Item (Usado em Categorias, Populares e Novos)
const ItemCard = ({ name, icon, href, isCategory = false }: { name: string, icon: any, href: string, isCategory?: boolean }) => (
  <a 
    href={href} 
    className={`flex flex-col items-center justify-center p-4 rounded-xl transition duration-200 
                ${isCategory ? 'bg-indigo-700/50 hover:bg-indigo-700/70' : 'hover:bg-gray-100'} 
                ${isCategory ? 'text-white' : 'text-gray-800'}`}
  >
    <div className={`text-4xl mb-1 ${isCategory ? 'text-white' : 'text-indigo-600'}`}>
      {isCategory ? icon : <img src={`/images/${icon}`} alt={name} className="w-12 h-12 rounded-lg" />}
    </div>
    <span className={`text-sm font-medium text-center ${isCategory ? 'text-white' : 'text-gray-600'}`}>{name}</span>
  </a>
);

// Componente Seção de Apps (Populares/Novos)
const AppSection = ({ title, apps }: { title: string, apps: typeof appsPopulares }) => (
  <section className="bg-white p-6 rounded-2xl shadow-lg mt-8 border border-gray-200">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center">
        <ArrowRight className="w-5 h-5 mr-2 text-indigo-600 transform rotate-180" />
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
          href={`/app/${app.name.toLowerCase().replace(/\s/g, '-')}`} 
          isCategory={false}
        />
      ))}
    </div>
  </section>
);


// --- Componente Principal da Página ---

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* 1. Navbar Superior (Cabeçalho Azul) */}
      <header className="bg-indigo-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <a href="/login" className="bg-white/20 hover:bg-white/30 text-white font-semibold py-1 px-4 rounded-full transition duration-200 text-sm mr-6">
              Login
            </a>
            <div className="flex items-center space-x-2">
              {/* Logo e Nome do Site */}
              <img src="/logo-acessiap.png" alt="Logo AcessiAp" className="w-8 h-8"/> 
              <span className="text-xl font-extrabold tracking-wider">AcessiAp</span>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal (Centralizado) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        
        {/* 2. Menu de Navegação e Busca */}
        <section className="bg-white p-4 rounded-xl shadow-md border border-gray-200 flex items-center justify-between">
          
          {/* Campo de Busca */}
          <div className="flex items-center p-2 rounded-full bg-gray-100 flex-grow mr-8">
            <Search className="w-5 h-5 text-gray-500 ml-2" />
            <input
              type="text"
              placeholder="Pesquisar Apps, categorias..."
              className="bg-transparent text-gray-800 p-2 w-full focus:outline-none"
            />
          </div>

          {/* Ícones de Navegação */}
          <nav className="flex space-x-6 text-gray-700">
            {navItems.map((item) => {
              const IconComponent = item.icon; // Componente do ícone
              return (
                <a key={item.name} href={item.href} className="flex flex-col items-center hover:text-indigo-600 transition duration-200">
                  <IconComponent className="w-6 h-6" />
                  <span className="text-xs mt-1">{item.name}</span>
                </a>
              );
            })}
          </nav>
        </section>

        {/* 3. Seção de Categorias */}
        <section className="bg-indigo-600 p-6 rounded-2xl shadow-xl mt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Categorias</h2>
          <div className="grid grid-cols-7 gap-4">
            {categorias.map((cat) => (
              <ItemCard key={cat.name} name={cat.name} icon={cat.icon} href="#" isCategory={true} />
            ))}
          </div>
        </section>
        
        {/* 4. Seção de Apps Populares */}
        <AppSection title="Populares" apps={appsPopulares} />

        {/* 5. Seção de Apps Novos */}
        <AppSection title="Novos" apps={appsNovos} />
        
      </div>

    </div>
  );
}