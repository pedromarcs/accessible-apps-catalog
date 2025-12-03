import React from 'react';

// Dados de avaliação (ajustados para o Instapaper, simulando 12 mil avaliações)
const ratingDataInstapaper = [
  { rating: 5, count: 9.5 },
  { rating: 4, count: 1.5 },
  { rating: 3, count: 0.5 },
  { rating: 2, count: 0.2 },
  { rating: 1, count: 0.3 },
];

// Componente para a Barra de Avaliação (RatingBar)
const RatingBar: React.FC<{ rating: number; count: number }> = ({ rating, count }) => {
  const barWidth = (count / 12) * 100;

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
      <span style={{ width: '10px', fontSize: '14px', color: '#000000ff', marginRight: '10px' }}>{rating}</span>
      <div style={{ flexGrow: 1, height: '8px', backgroundColor: '#e9ecef', borderRadius: '4px', overflow: 'hidden', marginRight: '10px' }}>
        <div 
          style={{ 
            height: '100%', 
            backgroundColor: '#007bff', 
            borderRadius: '4px', 
            width: `${barWidth}%` 
          }}
        ></div>
      </div>
      <span style={{ width: '20px', fontSize: '12px', color: '#6c757d', textAlign: 'right' }}>{count}</span>
    </div>
  );
};

// Componente Principal: InstapaperAppDetails
const InstapaperAppDetails: React.FC = () => {

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

  return (
    <div style={containerStyle}>
      
      {/* --- Cabeçalho e Título --- */}
      <div style={{ padding: '10px 0', borderBottom: '1px solid #000000ff', marginBottom: '20px' }}>
        <a 
          href="/catalogo" 
          className="flex items-center text-black font-medium hover:text-gray-200 transition duration-200"
        >
          Voltar ao Catálogo
        </a>
      </div>

      <div style={infoHeaderStyle}>
        {/* ÍCONE DO APP AGORA COM IMAGEM insta.png */}
        <img 
          src="/insta.png"
          alt="Instapaper Icon"
          style={{
            width: '80px',
            height: '80px',
            marginRight: '20px',
            borderRadius: '15px',
            objectFit: 'cover',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        />

        <div>
          <h1 style={{ margin: '0', fontSize: '28px', fontWeight: 600, color:'black' }}>Instapaper</h1>
          <p style={{ margin: '5px 0', color: '#000000ff' }}>Vicent Florentini</p>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '16px', color: '#000000ff' }}>
            <span style={{ marginRight: '5px' }}>⭐</span>
            <span style={{ fontWeight: 'bold' }}>4.5</span>
            <span>(12 mil avaliações)</span>
          </div>
        </div>
      </div>

      {/* --- Conteúdo Principal --- */}
      <div style={mainContentStyle}>
        
        {/* COLUNA ESQUERDA */}
        <div style={descriptionSectionStyle}>
          <h2 style={{ fontSize: '20px', marginTop: '0', marginBottom: '15px', fontWeight: 600, color:'black' }}>Sobre este app</h2>

          <p style={{ lineHeight: 1.6, marginBottom: '20px', color:'black' }}>
            Instapaper é um aplicativo que permite salvar artigos e outros conteúdos da web para 
            ler mais tarde, de forma limpa e organizada, mesmo offline.
          </p>

          <ul style={{ listStyleType: 'none', paddingLeft: '0', lineHeight: 1.5, color:'black' }}>
            <li style={{ marginBottom: '15px' }}>
              <span style={{ fontWeight: 'bold' }}>• Como funciona:</span> Você salva artigos do seu navegador e eles são sincronizados na sua conta.
            </li>

            <li style={{ marginBottom: '15px' }}>
              <span style={{ fontWeight: 'bold' }}>• Leitura offline:</span> Depois de salvo, você pode ler sem internet.
            </li>

            <li style={{ marginBottom: '15px' }}>
              <span style={{ fontWeight: 'bold' }}>• Formato otimizado:</span> Remove anúncios e elementos distrativos.
            </li>

            <li style={{ marginBottom: '15px' }}>
              <span style={{ fontWeight: 'bold' }}>• Disponibilidade:</span> Acesse via web, Android ou iOS.
            </li>

            <li style={{ marginBottom: '15px' }}>
              <span style={{ fontWeight: 'bold' }}>• Recursos adicionais:</span> Leitura dinâmica e marcações.
            </li>
          </ul>
        </div>

        {/* COLUNA DIREITA */}
        <div style={sidebarSectionStyle}>

          {/* BOX INFO */}
          <div style={boxStyle}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px', color:'black' }}>
              Informações
            </h3>

            <div style={infoItemStyle}>
              <span style={{ color: '#6c757d' }}>Downloads</span>
              <span style={{ fontWeight: 'bold', color: '#333' }}>+500 Mil</span>
            </div>

            <div style={infoItemStyle}>
              <span style={{ color: '#6c757d' }}>Tamanho</span>
              <span style={{ fontWeight: 'bold', color: '#333' }}>29 MB</span>
            </div>

            <div style={infoItemStyle}>
              <span style={{ color: '#6c757d' }}>Versão</span>
              <span style={{ fontWeight: 'bold', color: '#333' }}>6.3.2</span>
            </div>

            <div style={infoItemStyle}>
              <span style={{ color: '#6c757d' }}>Desenvolvedor</span>
              <span style={{ fontWeight: 'bold', color: '#333' }}>Instant Paper</span>
            </div>
          </div>

          {/* BOTÃO */}
          <button 
            style={{ 
              width: '100%', 
              padding: '12px', 
              background: 'linear-gradient(180deg, #4285f4, #1976d2)', 
              color: 'white',
              fontSize: '18px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              marginBottom: '10px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)' 
            }}
          >
            acessar agora
          </button>

          <p style={{ textAlign: 'center', fontSize: '12px', color: '#6c757d', marginBottom: '30px' }}>
            gratuito / Disponível nas lojas oficiais
          </p>

          {/* AVALIAÇÕES */}
          <div style={boxStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '15px', borderBottom: '1px solid #eee' }}>
              <span style={{ fontSize: '24px', marginRight: '10px' }}>⭐</span>
              <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#333' }}>4.5</span>
              <span style={{ fontSize: '14px', marginLeft: '10px', color: '#6c757d' }}>(12 mil avaliações)</span>
            </div>

            <div style={{ paddingTop: '15px' }}>
              {ratingDataInstapaper.map((data) => (
                <RatingBar key={data.rating} rating={data.rating} count={data.count} />
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default InstapaperAppDetails;
