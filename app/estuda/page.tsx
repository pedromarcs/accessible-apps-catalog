import React from 'react';

// Dados de avaliação (ajustados para o Estuda.com, simulando 7 mil avaliações)
const ratingDataEstuda = [
  { rating: 5, count: 6 }, 
  { rating: 4, count: 0.5 }, 
  { rating: 3, count: 0.2 }, 
  { rating: 2, count: 0.1 }, 
  { rating: 1, count: 0.2 }, 
];

// Componente para a Barra de Avaliação (RatingBar)
const RatingBar: React.FC<{ rating: number; count: number }> = ({ rating, count }) => {
  const barWidth = (count / 7) * 100; 
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
      {/* COR DO TEXTO DA ESTRELA */}
      <span style={{ width: '10px', fontSize: '14px', color: '#333', marginRight: '10px' }}>{rating}</span>
      <div style={{ flexGrow: 1, height: '8px', backgroundColor: '#e9ecef', borderRadius: '4px', overflow: 'hidden', marginRight: '10px' }}>
        <div 
          style={{ 
            height: '100%', 
            backgroundColor: '#4285f4', 
            borderRadius: '4px', 
            width: `${barWidth}%` 
          }}
        ></div>
      </div>
      {/* COR DO TEXTO DA CONTAGEM */}
      <span style={{ width: '20px', fontSize: '12px', color: '#333', textAlign: 'right' }}>{count}</span>
    </div>
  );
};

// Componente Principal: EstudaAppDetails
const EstudaAppDetails: React.FC = () => {

  const containerStyle: React.CSSProperties = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1600px', 
    margin: '0 auto',
    padding: '20px 40px',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  };

  const infoHeaderStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
  };

  const mainContentStyle: React.CSSProperties = {
    display: 'flex',
    gap: '40px',
  };

  const descriptionSectionStyle: React.CSSProperties = {
    flex: 3,
  };

  const sidebarSectionStyle: React.CSSProperties = {
    flex: 1,
    minWidth: '300px',
  };

  const boxStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    marginBottom: '20px',
  };

  const infoItemStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #f8f9fa',
  };
  
  const listItemStyle: React.CSSProperties = { 
    marginBottom: '10px', 
    paddingLeft: '15px', 
    position: 'relative', 
    lineHeight: 1.5 
  };
  
  const bulletStyle: React.CSSProperties = { 
    position: 'absolute', 
    left: 0, 
    color: '#34a853', // Cor verde do ícone do Estuda.com
    fontWeight: 'bold' 
  };


  return (
    <div style={containerStyle}>
      
      {/* --- Cabeçalho e Título --- */}
      <div style={{ padding: '10px 0', borderBottom: '1px solid #eee', marginBottom: '20px' }}>
       <a 
            href="/catalogo" 
            className="flex items-center text-black font-medium hover:text-gray-200 transition duration-200"
          >
            Voltar ao Catálogo
          </a>
      </div>

      <div style={infoHeaderStyle}>
        {/* ÍCONE DO APP */}
        <div style={{ width: '80px', height: '80px', marginRight: '20px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#4285f4', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#34a853', lineHeight: 1 }}>✔</span> 
          <span style={{ fontSize: '10px', fontWeight: 'bold', color: 'white', letterSpacing: '0.5px' }}>estuda.com</span>
        </div>
        <div>
          {/* COR DO TEXTO: Título */}
          <h1 style={{ margin: '0', fontSize: '28px', fontWeight: 600, color: '#333' }}>estuda.com</h1>
          {/* COR DO TEXTO: Subtítulo */}
          <p style={{ margin: '5px 0', color: '#333' }}>estuda B2C</p>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '16px', color: '#333' }}>
            <span style={{ marginRight: '5px' }}>⭐</span>
            <span style={{ fontWeight: 'bold' }}>4.2</span>
            <span>(7 mil avaliações)</span>
          </div>
        </div>
      </div>

      {/* --- Conteúdo Principal (Descrição e Sidebar) --- */}
      <div style={mainContentStyle}>
        
        {/* COLUNA ESQUERDA: DESCRIÇÃO */}
        <div style={descriptionSectionStyle}>
          
          <h2 style={{ fontSize: '20px', marginTop: '0', marginBottom: '15px', fontWeight: 600, color: '#333' }}>Sobre este app</h2>
          <p style={{ lineHeight: 1.6, marginBottom: '20px', color: '#333' }}>
            Estuda.com é uma plataforma online de estudos que oferece recursos para ajudar 
            estudantes a se prepararem para o ENEM e outros vestibulares. A plataforma 
            disponibiliza um grande banco de **questões, videoaulas, simulados com correção 
            pela Teoria de Resposta ao Item (TRI)**, e ferramentas para prática de redação. A 
            Estuda.com também utiliza inteligência artificial, como a **Duda IA**, para criar planos de 
            estudo personalizados e ajudar na resolução de dúvidas.
          </p>

          <h3 style={{ fontSize: '18px', marginTop: '25px', marginBottom: '15px', fontWeight: 600, color: '#333' }}>Principais recursos</h3>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', lineHeight: 1.3 }}>
            <li style={listItemStyle}>
                <span style={bulletStyle}>•</span>
                <span style={{ fontWeight: 'bold', color: '#333' }}>Banco de Questões:</span> <span style={{ color: '#333' }}>Acesso a mais de 200 mil questões de provas anteriores e 
                inéditas, que podem ser filtradas por disciplina, assunto, nível de dificuldade ou 
                banca.</span>
            </li>
            <li style={listItemStyle}>
                <span style={bulletStyle}>•</span>
                <span style={{ fontWeight: 'bold', color: '#333' }}>Videoaulas e Aulas ao Vivo:</span> <span style={{ color: '#333' }}>Conteúdo com mais de 1.400 videoaulas e aulas ao vivo 
                semanais.</span>
            </li>
            <li style={listItemStyle}>
                <span style={bulletStyle}>•</span>
                <span style={{ fontWeight: 'bold', color: '#333' }}>Redação:</span> <span style={{ color: '#333' }}>Ferramentas para praticar redação, com mais de 300 temas disponíveis e 
                correção profissional, incluindo a avaliação pela inteligência artificial.</span>
            </li>
            <li style={listItemStyle}>
                <span style={bulletStyle}>•</span>
                <span style={{ fontWeight: 'bold', color: '#333' }}>Simulados:</span> <span style={{ color: '#333' }}>Simulados no formato do ENEM, com correção pela metodologia TRI, que 
                também permite simular a nota e estimar chances de aprovação em cursos e 
                instituições.</span>
            </li>
            <li style={listItemStyle}>
                <span style={bulletStyle}>•</span>
                <span style={{ fontWeight: 'bold', color: '#333' }}>Estatísticas:</span> <span style={{ color: '#333' }}>Painel de desempenho com estatísticas detalhadas para que o 
                estudante possa acompanhar seu progresso e identificar áreas de melhoria.</span>
            </li>
            <li style={listItemStyle}>
                <span style={bulletStyle}>•</span>
                <span style={{ fontWeight: 'bold', color: '#333' }}>Plano de Estudos Personalizado:</span> <span style={{ color: '#333' }}>Criação de cronogramas de estudo adaptados às 
                necessidades individuais dos alunos, com a ajuda da Duda IA.</span>
            </li>
            <li style={listItemStyle}>
                <span style={bulletStyle}>•</span>
                <span style={{ fontWeight: 'bold', color: '#333' }}>Outros Recursos:</span> <span style={{ color: '#333' }}>Provas para download em PDF e resoluções comentadas em vídeo.</span>
            </li>
          </ul>
        </div>

        {/* COLUNA DIREITA: SIDEBAR (INFO E AVALIAÇÕES) */}
        <div style={sidebarSectionStyle}>
          
          {/* BOX DE INFORMAÇÕES */}
          <div style={boxStyle}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px', color: '#333' }}>Informações</h3>
            
            <div style={infoItemStyle}>
              <span style={{ color: '#333' }}>Downloads</span>
              <span style={{ fontWeight: 'bold', color: '#333' }}>+500 Mil</span>
            </div>
            <div style={infoItemStyle}>
              <span style={{ color: '#333' }}>Tamanho</span>
              <span style={{ fontWeight: 'bold', color: '#333' }}>54 MB</span>
            </div>
            <div style={infoItemStyle}>
              <span style={{ color: '#333' }}>Versão</span>
              <span style={{ fontWeight: 'bold', color: '#333' }}>9.6.6</span>
            </div>
            <div style={infoItemStyle}>
              <span style={{ color: '#333' }}>Desenvolvedor</span>
              <span style={{ fontWeight: 'bold', color: '#333' }}>Estuda B2C</span>
            </div>
          </div>

          {/* BOTÃO DE ACESSO */}
          <button style={{ width: '100%', padding: '12px', background: 'linear-gradient(180deg, #4285f4, #1976d2)', color: 'white', fontSize: '18px', fontWeight: 'bold', border: 'none', borderRadius: '50px', cursor: 'pointer', marginBottom: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
            acessar agora
          </button>
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#333', marginBottom: '30px' }}>
            gratuito / Disponível nas lojas oficiais
          </p>

          {/* BOX DE DETALHES DE AVALIAÇÃO */}
          <div style={boxStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '15px', borderBottom: '1px solid #eee' }}>
              <span style={{ fontSize: '24px', marginRight: '10px' }}>⭐</span>
              <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#333' }}>4.2</span>
              <span style={{ fontSize: '14px', marginLeft: '10px', color: '#333' }}>(7 mil avaliações)</span>
            </div>
            
            <div style={{ paddingTop: '15px' }}>
              {ratingDataEstuda.map((data) => (
                <RatingBar key={data.rating} rating={data.rating} count={data.count} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstudaAppDetails;