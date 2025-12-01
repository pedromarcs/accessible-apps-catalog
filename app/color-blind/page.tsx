"use client";

import { ArrowLeft, Star, Download, Code, Smartphone, Users } from 'lucide-react';

// --- Dados Mockados para o Aplicativo ---
const appDetails = {
  name: "Color Blind Pal",
  developer: "Vicent Fiorentini",
  rating: 4.4,
  reviews: 10000,
  downloads: "+100 Mil",
  size: "2,4 MB",
  version: "1.1.1",
  externalLink: "https://play.google.com/store/apps/details?id=com.colorblindpal", // Rota Externa: O link real para onde o botão "Acessar Agora" deve levar
  iconPath: "/images/colorblind.png" // Garanta que esta imagem exista
};

// Dados para a barra de avaliação
const ratingBars = [
  { stars: 5, percentage: 90, color: "bg-yellow-400" },
  { stars: 4, percentage: 70, color: "bg-yellow-400" },
  { stars: 3, percentage: 40, color: "bg-yellow-400" },
  { stars: 2, percentage: 20, color: "bg-yellow-400" },
  { stars: 1, percentage: 10, color: "bg-yellow-400" },
];

// Componente para a Barra de Avaliação
const RatingBar = ({ stars, percentage, color }: { stars: number, percentage: number, color: string }) => (
  <div className="flex items-center gap-2 mb-2">
    <span className="text-sm font-medium w-6 text-gray-600">{stars}★</span>
    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className={`${color} h-full transition-all duration-500`} 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default function ColorBlindPalPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      
      {/* 1. Header (Topo) */}
      <header className="bg-indigo-600 text-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-start items-center">
          <a 
            href="/catalogo" 
            className="flex items-center text-white font-medium hover:text-gray-200 transition duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao Catálogo
          </a>
        </div>
      </header>

      {/* 2. Conteúdo Principal (Container) */}
      <main className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Coluna Principal: Informações do App */}
        <section className="lg:col-span-2 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200">
          
          {/* Cabeçalho do App */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 mb-6 pb-4 border-b border-gray-100">
            <img 
              src={appDetails.iconPath} 
              alt={`${appDetails.name} Icon`} 
              className="w-20 h-20 rounded-xl object-cover shadow-lg"
            />
            <div className="app-details">
              <h1 className="text-3xl font-bold text-gray-900">{appDetails.name}</h1>
              <p className="text-sm text-gray-500 mt-1">{appDetails.developer}</p>
              <div className="flex items-center mt-2 text-yellow-500 font-bold">
                <Star className="w-5 h-5 fill-yellow-500 mr-1" />
                <span className="text-base">{appDetails.rating}</span> 
                <span className="text-sm text-gray-500 font-normal ml-2">({appDetails.reviews.toLocaleString('pt-BR')} avaliações)</span>
              </div>
            </div>
          </div>

          {/* Sobre este app */}
          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <Code className="w-5 h-5 mr-2 text-indigo-500" />
              Sobre este app
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Color Blind Pal é um aplicativo para smartphones e computadores que ajuda pessoas com daltonismo a distinguir cores, usando filtros e a câmera do celular para identificar e descrever as cores na tela ou no mundo real. Ele também permite que pessoas sem daltonismo simulem a visão daltônica, aprendendo como o mundo se parece para quem tem essa condição.
            </p>
          </div>

          {/* Como o Color Blind Pal funciona */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <Smartphone className="w-5 h-5 mr-2 text-indigo-500" />
              Como o Color Blind Pal funciona
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Identificação de cores:</strong> Ao apontar a câmera para um objeto, o aplicativo pode identificar e descrever a cor com um nome como "verde claro", além de informar o matiz, a saturação e o valor da cor.</li>
              <li><strong>Filtros de cor:</strong> Ele utiliza filtros de cores personalizáveis para ajudar a diferenciar cores que parecem semelhantes, como tornar uma abóbora de cor laranja mais visível contra um campo verde.</li>
              <li><strong>Correção na tela:</strong> O aplicativo pode ajustar as cores na tela de um computador (na versão para Mac) para que sejam mais fáceis de distinguir, o que é útil para ler gráficos e tabelas.</li>
              <li><strong>Simulação de daltonismo:</strong> Pessoas com visão de cor normal podem usar os filtros do aplicativo para ver como as cores são percebidas por diferentes tipos de daltonismo, o que é uma ferramenta educativa.</li>
            </ul>
          </div>

          {/* Para que serve o Color Blind Pal */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <Users className="w-5 h-5 mr-2 text-indigo-500" />
              Para que serve o Color Blind Pal
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Tarefas do dia a dia:</strong> Facilita tarefas que dependem da diferenciação de cores, como escolher roupas, comprar alimentos ou identificar a cor de fios em um circuito.</li>
              <li><strong>Educação e ciência:</strong> Ajuda estudantes daltônicos em laboratórios de química, permitindo que eles identifiquem corretamente as cores de compostos ou chamas.</li>
              <li><strong>Acessibilidade digital:</strong> Permite que desenvolvedores criem sites e aplicativos mais acessíveis, verificando como o conteúdo é exibido para pessoas com deficiência visual.</li>
            </ul>
          </div>
        </section>

        {/* Coluna Lateral: Informações Chave, Botão e Avaliações */}
        <aside className="lg:col-span-1 flex flex-col gap-6">

          {/* Botão de Acesso */}
          <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-200">
            <a 
              href={appDetails.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.01]"
            >
              <Download className="w-5 h-5 mr-2" />
              Acessar Agora
            </a>
            <p className="text-xs text-gray-500 text-center mt-3">Gratuito / Disponível nas lojas oficiais</p>
          </div>

          {/* Informações */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Informações</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b pb-1 border-gray-100">
                <span className="font-medium text-gray-600">Downloads:</span>
                <span className="text-gray-800">{appDetails.downloads}</span>
              </div>
              <div className="flex justify-between border-b pb-1 border-gray-100">
                <span className="font-medium text-gray-600">Tamanho:</span>
                <span className="text-gray-800">{appDetails.size}</span>
              </div>
              <div className="flex justify-between border-b pb-1 border-gray-100">
                <span className="font-medium text-gray-600">Versão:</span>
                <span className="text-gray-800">{appDetails.version}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Desenvolvedor:</span>
                <span className="text-indigo-600 font-medium">{appDetails.developer}</span>
              </div>
            </div>
          </div>

          {/* Avaliações */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Avaliações dos Usuários</h3>
            <div className="flex items-center mb-4">
              <Star className="w-7 h-7 fill-yellow-500 text-yellow-500 mr-2" />
              <span className="text-3xl font-extrabold text-gray-800 mr-2">{appDetails.rating}</span>
              <span className="text-base text-gray-500">({appDetails.reviews.toLocaleString('pt-BR')})</span>
            </div>
            
            {/* Barras de Avaliação */}
            {ratingBars.map((bar) => (
              <RatingBar key={bar.stars} {...bar} />
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}