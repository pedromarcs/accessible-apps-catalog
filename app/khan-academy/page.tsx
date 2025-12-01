"use client";

import { ArrowLeft, BookOpen, GraduationCap, Users, Accessibility, Zap, Lightbulb, Link } from 'lucide-react';

// Dados da Aplicação para simplificar a manutenção
const appDetails = {
  name: "Khan Academy",
  tagline: "Aprenda de Graça. Para qualquer pessoa, em qualquer lugar.",
  description: "A Khan Academy oferece exercícios práticos, vídeos de instrução e um painel de aprendizado personalizado que permite aos alunos estudar no seu próprio ritmo, dentro e fora da sala de aula.",
  targetAudience: "Estudantes (Fundamental ao Superior), Pais, Professores e qualquer pessoa buscando conhecimento.",
  categories: ["Educação", "Matemática", "Ciências", "Programação"],
  externalLink: "https://pt.khanacademy.org/",
  iconPath: "/images/khan.png" // Garanta que esta imagem exista na sua pasta public/images
};

const accessibilityFeatures = [
  "Legendas disponíveis em todos os vídeos instrutivos.",
  "Navegação por teclado otimizada para a maioria dos módulos.",
  "Compatibilidade com leitores de tela (Screen Readers) na maior parte da plataforma.",
  "Opções de alto contraste para melhor leitura.",
];

export default function KhanAcademyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      
      {/* Navbar/Header Simples para o Detalhe */}
      <header className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-start items-center">
          <a 
            href="/catalogo" 
            className="flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition duration-200 p-2 rounded-lg hover:bg-gray-100"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao Catálogo
          </a>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-6xl mx-auto px-6 pt-10">
        
        {/* Seção 1: Cabeçalho do App (Icone, Nome e Link) */}
        <section className="bg-white p-8 rounded-2xl shadow-xl flex items-center mb-8 border border-indigo-100">
          <img 
            src={appDetails.iconPath} 
            alt={`${appDetails.name} Icon`} 
            className="w-24 h-24 rounded-2xl object-cover mr-6 shadow-md"
          />
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-1">{appDetails.name}</h1>
            <p className="text-xl text-indigo-600 font-medium">{appDetails.tagline}</p>
          </div>

          <a
            href={appDetails.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            <Link className="w-5 h-5 mr-2" />
            Acessar Aplicativo
          </a>
        </section>

        {/* Layout de Duas Colunas (Descrição e Detalhes Rápidos) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Coluna Principal: Descrição e Acessibilidade */}
          <div className="md:col-span-2 space-y-8">
            
            {/* Bloco 2: Sobre o Aplicativo */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-indigo-500" />
                Sobre a Khan Academy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {appDetails.description}
              </p>
              <p className="mt-4 text-sm text-gray-500 italic">
                Ideal para complementar estudos e reforçar o aprendizado em diversas disciplinas, do ensino fundamental à universidade.
              </p>
            </div>

            {/* Bloco 3: Recursos de Acessibilidade */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Accessibility className="w-6 h-6 mr-2 text-green-500" />
                Acessibilidade
              </h2>
              <p className="text-gray-700 mb-4">
                O aplicativo Khan Academy é conhecido por seu compromisso com a acessibilidade digital:
              </p>
              <ul className="space-y-3">
                {accessibilityFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Zap className="w-4 h-4 mt-1 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Coluna Lateral: Detalhes Rápidos */}
          <aside className="md:col-span-1 space-y-8">

            {/* Bloco 4: Informações Chave */}
            <div className="bg-indigo-50 p-6 rounded-2xl shadow-md border border-indigo-200">
              <h2 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center">
                <Lightbulb className="w-6 h-6 mr-2" />
                Informações Essenciais
              </h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center border-b pb-2 border-indigo-200">
                  <span className="font-medium text-indigo-700">Público Alvo:</span>
                  <span className="text-gray-700 text-right">{appDetails.targetAudience}</span>
                </div>
                
                <div className="flex justify-between items-center border-b pb-2 border-indigo-200">
                  <span className="font-medium text-indigo-700">Custo:</span>
                  <span className="text-green-600 font-bold">Gratuito</span>
                </div>
                
                <div className="flex justify-between items-center border-b pb-2 border-indigo-200">
                  <span className="font-medium text-indigo-700">Plataformas:</span>
                  <span className="text-gray-700">Web, iOS, Android</span>
                </div>
                
                <div className="pt-2">
                  <span className="font-medium text-indigo-700 block mb-1">Categorias:</span>
                  <div className="flex flex-wrap gap-2">
                    {appDetails.categories.map(cat => (
                      <span key={cat} className="bg-indigo-200 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bloco 5: Ações Rápidas (Favoritar, Compartilhar) */}
            <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 space-y-3">
              <button className="w-full py-3 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg transition duration-200 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Compartilhar com um amigo
              </button>
              <button className="w-full py-3 px-4 border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold rounded-lg transition duration-200">
                Adicionar aos Favoritos
              </button>
            </div>

          </aside>
        </div>

      </main>
    </div>
  );
}