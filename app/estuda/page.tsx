import React from 'react';
import Image from 'next/image';

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
      <span style={{ width: '20px', fontSize: '12px', color: '#333', textAlign: 'right' }}>{count}</span>
    </div>
  );
};

// Componente Principal
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
    color: '#34a853',
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
        
        {/* ÍCONE DO APP — AGORA USANDO estuda.png */}
        <div style={{ width: '80px', height: '80px', marginRight: '20px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex' }}>
          <Image 
            src="/estuda.png"
            alt="Estuda Icon"
            width={80}
            height={80}
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div>
          <h1 style={{ margin: '0', fontSize: '28px', fontWeight: 600, color: '#333' }}>estuda.com</h1>
          <p style={{ margin: '5px 0', color: '#333' }}>estuda B2C</p>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '16px', color: '#333' }}>
            <span style={{ marginRight: '5px' }}>⭐</span>
            <span style={{ fontWeight: 'bold' }}>4.2</span>
            <span>(7 mil avaliações)</span>
          </div>
        </div>
      </div>

      {/* --- Conteúdo Principal --- */}
      <div style={mainContentStyle}>
        
        {/* COLUNA DESCRIÇÃO */}
        <div style={descriptionSectionStyle}>
          
          <h2 style={{ fontSize: '20px', marginTop: '0', marginBottom: '15px', fontWeight: 600, color: '#333' }}>Sobre este app</h2>
          <p style={{ lineHeight: 1.6, marginBottom: '20px', color: '#333' }}>
            Estuda.com é uma plataforma online de estudos que oferece recursos para ajudar 
            estudantes a se prepararem para o ENEM e outros vestibulares. A plataforma 
            disponibiliza um grande banco de <strong>questões, videoaulas, simulados com TRI</strong>, e ferramentas 
            para prática de redação. Inclui também a inteligência artificial <strong>Duda IA</strong> para criar planos 
            de estudo personalizados e auxiliar na resolução de dúvidas.
          </p>

          <h3 style={{ fontSize: '18px', marginTop: '25px', marginBottom: '15px', fontWeight: 600, color: '#333' }}>Principais recursos</h3>
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span style={{ fontWeight: 'bold', color: '#333' }}>Banco de Questões:</span> Acesso a mais de 200 mil questões filtradas por disciplina ou banca.
            </li>

            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span style={{ fontWeight: 'bold', color: '#333' }}>Videoaulas:</span> Mais de 1.400 conteúdos gravados e aulas ao vivo semanais.
            </li>

            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span style={{ fontWeight: 'bold', color: '#333' }}>Redação:</span> Temas ilimitados, correção profissional e IA ajudando no desempenho.
            </li>

            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span style={{ fontWeight: 'bold', color: '#333' }}>Simulados:</span> Provas estilo ENEM com correção TRI e estimativa de nota.
            </li>

            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span style={{ fontWeight: 'bold', color: '#333' }}>Estatísticas:</span> Painel de desempenho completo.
            </li>

            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span style={{ fontWeight: 'bold', color: '#333' }}>Plano Personalizado:</span> Cronograma baseado no perfil do aluno usando IA.
            </li>
          </ul>
        </div>

        {/* COLUNA SIDEBAR */}
        <div style={sidebarSectionStyle}>
          
          {/* BOX INFORMACOES */}
          <div style={boxStyle}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px', color: '#333' }}>Informações</h3>
            
            <div style={infoItemStyle}>
              <span>Downloads</span>
              <span style={{ fontWeight: 'bold' }}>+500 Mil</span>
            </div>

            <div style={infoItemStyle}>
              <span>Tamanho</span>
              <span style={{ fontWeight: 'bold' }}>54 MB</span>
            </div>

            <div style={infoItemStyle}>
              <span>Versão</span>
              <span style={{ fontWeight: 'bold' }}>9.6.6</span>
            </div>

            <div style={infoItemStyle}>
              <span>Desenvolvedor</span>
              <span style={{ fontWeight: 'bold' }}>Estuda B2C</span>
            </div>
          </div>

          {/* BOTAO */}
          <button style={{ width: '100%', padding: '12px', background: 'linear-gradient(180deg, #4285f4, #1976d2)', color: 'white', fontSize: '18px', fontWeight: 'bold', border: 'none', borderRadius: '50px', cursor: 'pointer', marginBottom: '10px' }}>
            acessar agora
          </button>
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#333', marginBottom: '30px' }}>
            gratuito / Disponível nas lojas oficiais
          </p>

          {/* AVALIACOES */}
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
