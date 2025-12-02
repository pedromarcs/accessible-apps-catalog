import React from 'react';
import { FaStar, FaArrowLeft } from 'react-icons/fa'; 

// ----------------------------------------------------------------------
// 1. DEFINIÇÃO DE TIPOS E DADOS (Sem alterações)
// ----------------------------------------------------------------------

interface AppDetails {
  title: string;
  subtitle: string;
  rating: number;
  reviewCount: string;
  appIconSvg: string;
  about: string;
  howItWorks: { title: string; text: string }[];
  benefits: { title: string; text: string }[];
  info: {
    downloads: string;
    size: string;
    version: string;
    developer: string;
  };
  reviews: number[];
}

const appData: AppDetails = {
  title: "Color By Number",
  subtitle: "Wildlife Studies",
  rating: 4.6,
  reviewCount: "366 mil avaliações",
  appIconSvg: `
    <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" rx="100" fill="#3640F5"/>
      <path d="M128 128H256V256H128V128Z" fill="#F44336"/>
      <path d="M256 128H384V256H256V128Z" fill="#4CAF50"/>
      <path d="M128 256H256V384H128V256Z" fill="#FFEB3B"/>
      <path d="M256 256H384V384H256V256Z" fill="#2196F3"/>
      <text x="192" y="192" font-family="Arial" font-size="60" fill="#FFF" text-anchor="middle" dominant-baseline="central">C</text>
    </svg>
  `,
  about: "“Color by number” é uma atividade que consiste em colorir desenhos onde cada área é marcada com um número. A pessoa deve preencher as áreas com a cor correspondente ao número da paleta, resultando em uma imagem finalizada sem a necessidade de escolher as cores. É um jogo ou passatempo popular em aplicativos de celular, plataformas de jogos e livros, usado tanto para diversão quanto para relaxamento e desenvolvimento de habilidades.",
  howItWorks: [
    { title: "Escolha a Imagem:", text: "O usuário seleciona um desenho de uma coleção, que pode incluir temas como natureza, animais, mandalas, e outros." },
    { title: "Identifique os números:", text: "A imagem é dividida em áreas, cada uma com um número." },
    { title: "Preencha as cores:", text: "Com um toque, o usuário preenche as células coloridas correspondentes aos números. Em aplicativos, é possível ampliar a imagem para colorir detalhes menores." },
    { title: "Finalize a obra:", text: "À medida que as áreas são preenchidas, a obra de arte toma forma, se tornando uma imagem completa e harmoniosa." },
  ],
  benefits: [
    { title: "Relaxamento:", text: "A atividade é considerada calmante e pode ajudar a reduzir o estresse." },
    { title: "Desenvolvimento de habilidades:", text: "Auxilia no desenvolvimento da coordenação olho-mão, foco e reconhecimento de cores e números, sendo também uma ferramenta educacional." },
    { title: "Acessibilidade:", text: "É acessível para todas as idades e níveis de habilidade, não exigindo talento artístico prévio." },
    { title: "Criatividade:", text: "Embora a escolha de cores seja guiada, o processo permite explorar cores e combinações, resultando em uma obra única." },
    { title: "Compartilhamento:", text: "As obras finalizadas podem ser compartilhadas nas redes sociais, para que amigos e familiares as vejam." },
  ],
  info: {
    downloads: "+50 MI",
    size: "87 MB",
    version: "4.22.0",
    developer: "Wildlife Studios",
  },
  reviews: [180, 80, 40, 30, 36],
};

// ----------------------------------------------------------------------
// 2. COMPONENTE ReviewGraph (Sem alterações relevantes na lógica)
// ----------------------------------------------------------------------

interface ReviewGraphProps {
  reviews: number[];
  rating: number;
  reviewCount: string;
}

const ReviewGraph: React.FC<ReviewGraphProps> = ({ reviews, rating, reviewCount }) => {
  const totalReviews = reviews.reduce((sum, current) => sum + current, 0);

  // Calcula a porcentagem para cada barra
  const reviewPercentages = reviews.map(count => (count / totalReviews) * 100);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-100">
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-3xl font-bold text-gray-800">{rating.toFixed(1)}</span>
        <span className="text-sm text-gray-500">({reviewCount})</span>
      </div>
      <div className="space-y-1">
        {[5, 4, 3, 2, 1].map((star, index) => (
          <div key={star} className="flex items-center space-x-2">
            <span className="text-xs w-3 text-gray-500">{star}</span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-yellow-500 rounded-full"
                style={{ width: `${reviewPercentages[index]}%` }}
                title={`${star} estrelas: ${reviews[index]}`}
              ></div>
            </div>
            <span className="text-xs w-4 text-gray-500 text-right">{index + 1}:</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 3. COMPONENTE AppInfoCard (Layout ajustado para preencher a largura)
// ----------------------------------------------------------------------

interface AppInfoCardProps {
  info: AppDetails['info'];
  rating: number;
  reviewCount: string;
  reviews: number[];
}

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
    <span className="text-sm text-gray-500">{label}</span>
    <span className="text-sm font-medium text-gray-800">{value}</span>
  </div>
);

const AppInfoCard: React.FC<AppInfoCardProps> = ({ info, rating, reviewCount, reviews }) => {
  return (
    // Removido o 'max-w-sm' para que ele estique com a coluna
    <div className="bg-white p-6 rounded-lg shadow-md"> 
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Informações</h3>
      {/* Informações de Downloads, Tamanho, etc. */}
      <div className="mb-8">
        <InfoRow label="Downloads" value={info.downloads} />
        <InfoRow label="Tamanho" value={info.size} />
        <InfoRow label="Versão" value={info.version} />
        <InfoRow label="Desenvolvedor" value={info.developer} />
      </div>
      
      {/* Botão Acessar Agora */}
      <div className="mb-8">
        <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          acessar agora
        </button>
        <p className="text-xs text-center text-gray-500 mt-2">
          gratuito / Disponível nos lojas oficiais
        </p>
      </div>
      
      {/* Gráfico de Avaliações */}
      <ReviewGraph rating={rating} reviewCount={reviewCount} reviews={reviews} />
    </div>
  );
};

// ----------------------------------------------------------------------
// 4. COMPONENTE AppDescription (Sem alterações)
// ----------------------------------------------------------------------

interface AppDescriptionProps {
  data: AppDetails;
}

const AppDescription: React.FC<AppDescriptionProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      {/* Cabeçalho */}
      <a 
            href="/catalogo" 
            className="flex items-center text-black font-medium hover:text-gray-200 transition duration-200"
          >
            Voltar ao Catálogo
          </a>
      
      <div className="flex items-start space-x-4 mb-8 border-b pb-6 border-gray-200">
        {/* Ícone do App */}
        <div 
          className="w-20 h-20 rounded-xl overflow-hidden shadow-lg flex-shrink-0"
          dangerouslySetInnerHTML={{ __html: data.appIconSvg }}
          title="Ícone do App"
        />
        
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{data.title}</h2>
          <p className="text-md text-gray-600 mb-2">{data.subtitle}</p>
          <div className="flex items-center text-sm text-gray-500">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="font-semibold mr-1">{data.rating.toFixed(1)}</span>
            <span>({data.reviewCount})</span>
          </div>
        </div>
      </div>
      
      {/* Sobre este app */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Sobre este app</h3>
        <p className="text-gray-700 leading-relaxed">{data.about}</p>
      </section>
      
      {/* Como funciona */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Como funciona</h3>
        <ul className="list-none space-y-3">
          {data.howItWorks.map((item, index) => (
            <li key={index}>
              <p className="text-gray-700">
                <span className="font-bold">{item.title}</span> {item.text}
              </p>
            </li>
          ))}
        </ul>
      </section>
      
      {/* Benefícios e usos */}
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Benefícios e usos</h3>
        <ul className="list-none space-y-3">
          {data.benefits.map((item, index) => (
            <li key={index}>
              <p className="text-gray-700">
                <span className="font-bold">{item.title}</span> {item.text}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

// ----------------------------------------------------------------------
// 5. COMPONENTE PRINCIPAL (AppScreen) - AJUSTADO PARA LARGURA TOTAL
// ----------------------------------------------------------------------

const AppScreen: React.FC = () => {
  return (
    // Ajustado o 'max-w-6xl' para 'max-w-full' e p-4 sm:p-8 para p-4 lg:p-12
    <div className="min-h-screen bg-gray-50 p-4 lg:p-12">
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Coluna 1: Conteúdo Principal (Ocupa 2/3) */}
        <div className="lg:col-span-2">
          <AppDescription data={appData} />
        </div>
        
        {/* Coluna 2: Informações e Avaliações (Ocupa 1/3) */}
        <div className="lg:col-span-1 space-y-8">
          <AppInfoCard 
            info={appData.info} 
            rating={appData.rating} 
            reviewCount={appData.reviewCount} 
            reviews={appData.reviews}
          />
        </div>
      </div>
    </div>
  );
};

export default AppScreen;