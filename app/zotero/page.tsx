import React from 'react';
import Image from 'next/image';

// Dados de avaliação (apenas para a barra de progresso)
const ratingData = [
  { rating: 5, count: 9 }, 
  { rating: 4, count: 0.5 },
  { rating: 3, count: 0.1 },
  { rating: 2, count: 0.1 },
  { rating: 1, count: 0.3 },
];

// Componente para a Barra de Avaliação (RatingBar)
const RatingBar: React.FC<{ rating: number; count: number }> = ({ rating, count }) => {
  const barWidth = (count / 10) * 100;

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
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

// Componente Principal: ZoteroAppDetails
const ZoteroAppDetails: React.FC = () => {

  const containerStyle: React.CSSProperties = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1600px',
    margin: '0 auto',
    padding: '20px',
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

  return (
    <div style={containerStyle}>
      
      {/* --- Cabeçalho e Título --- */}
      <div style={{ padding: '10px 0', borderBottom: '1px solid #eee', marginBottom: '20px'}}>
       <a href="/catalogo" className="flex items-center text-blue-600 font-medium mb-8 hover:text-blue-700">
        <span className="text-xl mr-2">←</span> Voltar ao catálogo
      </a>
      </div>

      {/* --- Ícone + Informações do App --- */}
      <div style={infoHeaderStyle}>
        
        {/* --- Ícone substituído pela imagem zotero.png --- */}
        <div style={{ width: '80px', height: '80px', marginRight: '20px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <Image 
            src="/zotero.png"
            alt="Zotero logo"
            width={80}
            height={80}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div>
          <h1 style={{ margin: '0', fontSize: '28px', fontWeight: 600, color:'black' }}>Zotero</h1>
          <p style={{ margin: '5px 0', color: '#000000ff' }}>Vicent Florentini</p>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '16px', color: '#000000ff' }}>
            <span style={{ marginRight: '5px' }}>⭐</span>
            <span style={{ fontWeight: 'bold' }}>4.7</span>
            <span>(10 mil avaliações)</span>
          </div>
        </div>
      </div>

      {/* --- Conteúdo Principal (Descrição + Sidebar) --- */}
      <div style={mainContentStyle}>
        
        {/* COLUNA ESQUERDA */}
        <div style={descriptionSectionStyle}>
          
          <h2 style={{ fontSize: '20px', marginTop: '0', marginBottom: '15px', fontWeight: 600, color:'black' }}>Sobre este app</h2>
          <p style={{ lineHeight: 1.6, marginBottom: '20px', color: 'black' }}>
            Zotero é um programa gratuito, um gerenciador de referências que organiza seus 
            materiais de pesquisa (artigos, livros, sites) e, o melhor: faz citações e referências 
            automaticamente conforme a ABNT ou na norma que você precisar.
          </p>

          <h2 style={{ fontSize: '20px', marginTop: '25px', marginBottom: '15px', fontWeight: 600, color:'black'}}>Para que serve?</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative', color:'black' }}>
              <span style={{ position: 'absolute', left: 0, color: '#007bff', fontWeight: 'bold' }}>•</span>
              Criar citações e referências automaticamente em formatos como ABNT, APA, etc.
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative', color:'black' }}>
              <span style={{ position: 'absolute', left: 0, color: '#007bff', fontWeight: 'bold' }}>•</span>
              Armazenar PDFs e metadados de artigos, livros e outros documentos.
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative', color:'black' }}>
              <span style={{ position: 'absolute', left: 0, color: '#007bff', fontWeight: 'bold' }}>•</span>
              Organizar suas referências em coleções, pastas e tags.
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '15px', position: 'relative', color:'black' }}>
              <span style={{ position: 'absolute', left: 0, color: '#007bff', fontWeight: 'bold' }}>•</span>
              Sincronizar tudo entre computadores diferentes.
            </li>
          </ul>
        </div>

        {/* COLUNA DIREITA */}
        <div style={sidebarSectionStyle}>
          
          {/* --- BOX INFORMAÇÕES --- */}
          <div style={boxStyle}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px', color:'black' }}>Informações</h3>

            {[
              { label: 'Downloads', value: '+100 Mil' },
              { label: 'Tamanho', value: '60 MB' },
              { label: 'Versão', value: '1.0.0-186' },
              { label: 'Desenvolvedor', value: 'Zotero' },
            ].map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f8f9fa' }}>
                <span style={{ color: '#6c757d' }}>{item.label}</span>
                <span style={{ fontWeight: 'bold', color: '#333' }}>{item.value}</span>
              </div>
            ))}
          </div>

          {/* BOTÃO */}
          <button style={{ width: '100%', padding: '12px', backgroundColor: '#007bff', color: 'white', fontSize: '18px', fontWeight: 'bold', border: 'none', borderRadius: '50px', cursor: 'pointer', marginBottom: '10px' }}>
            acessar agora
          </button>
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#6c757d', marginBottom: '30px' }}>
            gratuito / Disponível nas lojas oficiais
          </p>

          {/* --- AVALIAÇÕES --- */}
          <div style={boxStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '15px', borderBottom: '1px solid #eee' }}>
              <span style={{ fontSize: '24px', marginRight: '10px' }}>⭐</span>
              <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#2c2c2cff' }}>4.7</span>
              <span style={{ fontSize: '14px', marginLeft: '10px', color: '#393939ff' }}>(10 mil avaliações)</span>
            </div>

            <div style={{ paddingTop: '15px' }}>
              {ratingData.map((data) => (
                <RatingBar key={data.rating} rating={data.rating} count={data.count} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ZoteroAppDetails;
