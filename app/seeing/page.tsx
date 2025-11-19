import React from 'react';

// Interfaces para tipagem dos dados (TypeScript)
interface AppFeature {
  title: string;
  description: string;
}

interface AppDetails {
  downloads: string;
  size: string;
  version: string;
  developer: string;
}

// Dados simulados baseados na imagem
const APP_DATA = {
  name: "Seeing Ai",
  developer: "Microsoft Corporation",
  rating: 4.4,
  reviews: "10 mil avaliações",
  about: "Ver a IA é um aplicativo gratuito da Microsoft para iOS e Android que usa a câmara do smartphone e inteligência artificial para descrever o mundo visual para pessoas cegas ou com baixa visão. O aplicativo oferece descrições em áudio para uma ampla variedade de itens, incluindo textos curtos, documentos, produtos (por meio de códigos de barras), moedas, pessoas e cores, além de descrever fotos e identificar a luminosidade de um ambiente. O app foi projetado para ser usado com recursos de acessibilidade, como o VoiceOver, para ler as informações em voz alta.",
  features: [
    { title: "Leitura:", description: "Permite ler textos curtos, como placas, em voz alta e em tempo real. Inclui também um modo de documento para leitura de páginas impressas, utilizando dicas de áudio para auxiliar no alinhamento da câmera e capturando o texto com sua formatação original." },
    { title: "Descrever:", description: "Permite fornecer uma descrição detalhada de uma foto assim que ela é tirada. Os usuários podem então fazer perguntas adicionais sobre a imagem." },
    { title: "Produtos:", description: "Lê códigos de barras para identificar produtos e fornecer informações sobre a embalagem. Utiliza sinais sonoros (bipes) para ajudar o usuário a encontrar o código de barras." },
    { title: "Pessoas:", description: "Consegue identificar e anunciar os nomes das pessoas, incluindo uma estimativa da sua idade, sexo e expressão emocional." },
    { title: "Moeda:", description: "Identifica os diferentes tipos de notas monetárias." },
    { title: "Cores:", description: "Identifica e anuncia as cores no ambiente do usuário." },
    { title: "Luz:", description: "Utiliza sons para indicar o brilho do ambiente." },
    { title: "Fotos e vídeos de outros aplicativos:", description: "É possível descrever imagens de outros aplicativos usando a função de compartilhamento." },
  ] as AppFeature[],
  details: {
    downloads: "+100 Mil",
    size: "2,4 MB",
    version: "1.4.1",
    developer: "desenvolvedor micro corporation",
  } as AppDetails,
};

// Componente para exibir um item de recurso (feature)
const FeatureItem: React.FC<AppFeature> = ({ title, description }) => (
  <li className="mt-3">
    <span className="font-bold text-gray-800">{title}</span>{" "}
    <span className="text-gray-600">{description}</span>
  </li>
);

// Componente para exibir um detalhe (informações)
const DetailItem: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
    <span className="text-gray-600">{label}</span>
    <span className="font-medium text-gray-800">{value}</span>
  </div>
);

const ColorBlindPalPage: React.FC = () => {
  // Nota: A seta 'Voltar ao catálogo' é geralmente um componente de navegação
  // que estaria no 'layout' ou em um componente de cabeçalho.
  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      {/* Cabeçalho de Navegação (Voltar) */}
      <a href="#" className="flex items-center text-blue-600 font-medium mb-8 hover:text-blue-700">
        <span className="text-xl mr-2">←</span> Voltar ao catálogo
      </a>

      {/* Seção Principal - Header do Aplicativo */}
      <header className="flex items-start border-b border-gray-200 pb-6 mb-6">
        {/* Logo do Aplicativo (Simulado com um quadrado azul e um 'S') */}
        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
          <span className="text-white text-3xl font-extrabold">S</span>
        </div>
        
        {/* Título e Avaliação */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{APP_DATA.name}</h1>
          <p className="text-gray-600 text-sm">{APP_DATA.developer}</p>
          
          {/* Avaliação (Estrelas) */}
          <div className="flex items-center mt-1">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-gray-800 text-sm font-medium">{APP_DATA.rating}</span>
            <span className="text-gray-500 text-sm ml-1">({APP_DATA.reviews})</span>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal (Grid de duas colunas) */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Coluna de Conteúdo (2/3 da largura) */}
        <section className="lg:col-span-2">
          
          {/* Sobre este app */}
          <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b pb-2">Sobre este app</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {APP_DATA.about}
          </p>

          {/* Principais características e funções */}
          <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b pb-2">Principais características e funções</h2>
          <ul className="list-disc list-inside space-y-3">
            {APP_DATA.features.map((feature, index) => (
              <FeatureItem key={index} title={feature.title} description={feature.description} />
            ))}
          </ul>
        </section>

        {/* Coluna de Informações (1/3 da largura) */}
        <aside className="lg:col-span-1 space-y-6">
          
          {/* Box de Informações */}
          <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações</h3>
            <div className="space-y-2">
              <DetailItem label="Downloads" value={APP_DATA.details.downloads} />
              <DetailItem label="Tamanho" value={APP_DATA.details.size} />
              <DetailItem label="Versão" value={APP_DATA.details.version} />
              <DetailItem label="Desenvolvedor" value={APP_DATA.details.developer} />
            </div>
          </div>
          
          {/* Botão Acessar Agora */}
          <div className="text-center p-6 bg-white rounded-lg shadow border border-gray-100">
            <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg text-lg hover:bg-blue-700 transition duration-150 shadow-md">
              acessar agora
            </button>
            <p className="text-xs text-gray-500 mt-2">
              gratuito / Disponível nas lojas oficiais
            </p>
          </div>

          {/* Gráfico de Avaliações */}
          <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
            <div className="flex items-center mb-3">
              <span className="text-4xl text-yellow-500 mr-2">★</span>
              <div>
                <span className="text-2xl font-bold text-gray-900">{APP_DATA.rating}</span>
                <span className="text-gray-500 text-sm ml-1">({APP_DATA.reviews})</span>
              </div>
            </div>
            {/* Barras de Avaliação (Simulação) */}
            {/* Nota: O código de barra é simplificado. Na vida real, usaria um componente de progresso. */}
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center text-sm py-1">
                <span className="w-4 text-gray-600">{star}</span>
                <div className="w-full bg-gray-200 rounded-full h-2 ml-2">
                  <div 
                    className={`h-2 rounded-full ${star === 5 ? 'bg-blue-600 w-[80%]' : star === 4 ? 'bg-blue-600 w-[60%]' : 'bg-blue-300 w-[10%]'}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

        </aside>
      </main>
    </div>
  );
};

export default ColorBlindPalPage;