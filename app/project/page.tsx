import React from "react";

// Interfaces para tipagem dos dados
interface Rating {
  stars: number;
  count: number;
}

interface AppDetails {
  name: string;
  developer: string;
  rating: number;
  reviews: number;
  iconUrl: string; // agora é imagem real
  description: string;
  info: {
    downloads: string;
    size: string;
    version: string;
    developer: string;
  };
  ratingDistribution: Rating[];
}

// Dados mockados baseados na imagem
const appData: AppDetails = {
  name: "Project Gutenberg",
  developer: "psi dev",
  rating: 4.6,
  reviews: 7000,

  // 🔥 Aqui vai sua imagem REAL (colocar em /public/project.png)
  iconUrl: "/project.png",

  description: `O Project Gutenberg é a biblioteca digital mais antigo do mundo, fundada em 1971 por Michael Hart, com a missão de disponibilizar gratuitamente e-books. Seu acervo é composto por mais de 70.000 títulos, a maioria de obras de domínio público cujos direitos autorais nos EUA expiraram, mas também inclui obras de permissão do detentor dos direitos. O projeto é um esforço colaborativo de voluntários que digitalizam e revisam os livros, disponibilizando-os em diversos formatos para leitura em computadores e dispositivos móveis.

• O que é: É uma biblioteca digital que oferece um grande acervo de livros eletrônicos (e-books) gratuitos.

• Foco: A maioria dos livros são de domínio público, com foco em obras clássicas mais antigas.

• Como funciona: Voluntários do mundo todo digitalizam e revisam os livros. As obras estão disponíveis em formatos como texto simples, HTML, EPUB, MOBI, entre outros.

• Acesso: O acesso é totalmente gratuito e não requer aplicativos especiais, apenas um navegador web regular.

• Nome: O nome é uma homenagem a Johannes Gutenberg, o inventor da prensa tipográfica na Europa, pois o projeto busca tornar os livros mais acessíveis.`,

  info: {
    downloads: "+100 Mil",
    size: "21 MB",
    version: "9.8",
    developer: "psi dev",
  },

  ratingDistribution: [
    { stars: 5, count: 5000 },
    { stars: 4, count: 1200 },
    { stars: 3, count: 300 },
    { stars: 2, count: 100 },
    { stars: 1, count: 400 },
  ],
};

/**
 * Componente que renderiza a distribuição de avaliações por estrelas.
 */
const RatingDistribution: React.FC<{ distribution: Rating[] }> = ({
  distribution,
}) => {
  const maxCount = Math.max(...distribution.map((item) => item.count));

  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {distribution
          .sort((a, b) => b.stars - a.stars)
          .map((item) => (
            <div
              key={item.stars}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <span
                style={{
                  fontSize: "12px",
                  width: "10px",
                  textAlign: "right",
                }}
              >
                {item.stars}
              </span>

              <div
                style={{
                  width: "100%",
                  height: "8px",
                  backgroundColor: "#e0e0e0",
                  borderRadius: "4px",
                }}
              >
                <div
                  style={{
                    width: `${(item.count / maxCount) * 100}%`,
                    height: "100%",
                    backgroundColor: "#007bff",
                    borderRadius: "4px",
                  }}
                />
              </div>
            </div>
          ))}

        <div
          style={{
            fontSize: "12px",
            color: "#000",
            marginTop: "4px",
          }}
        >
          {appData.rating} (
          {appData.ratingDistribution.reduce(
            (sum, item) => sum + item.count,
            0
          )}{" "}
          mil avaliações)
        </div>
      </div>
    </div>
  );
};

/**
 * Componente que renderiza os detalhes e informações do aplicativo.
 */
const AppDetailsScreen: React.FC = () => {
  // Formatar descrição com quebras e bullets
  const formatDescription = (text: string) => {
    return text.split("\n").map((paragraph, index) => {
      if (paragraph.startsWith("•")) {
        const parts = paragraph.substring(1).split(":");
        return (
          <p
            key={index}
            style={{
              marginBottom: "8px",
              paddingLeft: "10px",
              textIndent: "-10px",
            }}
          >
            <span style={{ fontWeight: "bold" }}>• {parts[0].trim()}:</span>{" "}
            {parts.slice(1).join(":").trim()}
          </p>
        );
      }
      return (
        <p key={index} style={{ marginBottom: "16px" }}>
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div style={styles.container}>
      {/* HEADER */}
      <div style={styles.header}>
        <a
          href="/catalogo"
          className="flex items-center text-black font-medium hover:text-gray-200 transition duration-200"
        >
          Voltar ao Catálogo
        </a>
      </div>

      {/* RESUMO DO APP */}
      <div style={styles.appSummary}>
        {/* Ícone com imagem REAL */}
        <img
          src={appData.iconUrl}
          alt="Ícone do App"
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />

        <div style={styles.appTitleContainer}>
          <h1 style={styles.appName}>{appData.name}</h1>
          <p style={styles.appDeveloper}>{appData.developer}</p>

          <div style={styles.ratingStars}>
            ⭐ {appData.rating}{" "}
            ({appData.reviews.toLocaleString("pt-BR")} mil avaliações)
          </div>
        </div>
      </div>

      <hr style={styles.divider} />

      {/* LAYOUT PRINCIPAL */}
      <div style={styles.contentArea}>
        {/* SOBRE O APP */}
        <div style={styles.mainContent}>
          <h2 style={styles.sectionTitle}>Sobre este app</h2>
          <div style={styles.descriptionText}>
            {formatDescription(appData.description)}
          </div>
        </div>

        {/* SIDEBAR */}
        <div style={styles.sidebar}>
          <div style={styles.infoBox}>
            <h3 style={styles.sidebarTitle}>Informações</h3>

            <div style={styles.infoRow}>
              <span>Downloads</span>
              <span style={styles.infoValue}>{appData.info.downloads}</span>
            </div>

            <div style={styles.infoRow}>
              <span>Tamanho</span>
              <span style={styles.infoValue}>{appData.info.size}</span>
            </div>

            <div style={styles.infoRow}>
              <span>Versão</span>
              <span style={styles.infoValue}>{appData.info.version}</span>
            </div>

            <div style={styles.infoRow}>
              <span>Desenvolvedor</span>
              <span style={styles.infoValue}>{appData.info.developer}</span>
            </div>
          </div>

          <div style={styles.accessBox}>
            <button style={styles.accessButton}>acessar agora</button>
            <p style={styles.accessSubtitle}>
              gratuito / Disponível nas lojas oficiais
            </p>
          </div>

          <div style={{ marginTop: "20px" }}>
            <RatingDistribution
              distribution={appData.ratingDistribution}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Estilos
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    padding: "20px 40px",
    boxSizing: "border-box",
    width: "100%",
    margin: "0 auto",
    color: "#000",
  },

  header: {
    marginBottom: "20px",
  },

  appSummary: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "20px",
  },

  appTitleContainer: {
    display: "flex",
    flexDirection: "column",
  },

  appName: {
    fontSize: "24px",
    margin: "0",
    fontWeight: "normal",
  },

  appDeveloper: {
    fontSize: "14px",
    color: "#000",
    margin: "4px 0",
  },

  ratingStars: {
    fontSize: "14px",
    color: "#000",
  },

  divider: {
    border: "none",
    borderTop: "1px solid #e0e0e0",
    margin: "10px 0",
  },

  contentArea: {
    display: "flex",
    gap: "40px",
    paddingTop: "20px",
  },

  mainContent: {
    flex: 2,
  },

  sidebar: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    minWidth: "300px",
  },

  sectionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#000",
  },

  sidebarTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#000",
    borderBottom: "1px solid #e0e0e0",
    paddingBottom: "5px",
  },

  descriptionText: {
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#000",
    whiteSpace: "pre-wrap",
  },

  infoBox: {
    padding: "16px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    border: "1px solid #e9ecef",
  },

  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "6px 0",
    borderBottom: "1px dotted #dee2e6",
    fontSize: "14px",
  },

  infoValue: {
    fontWeight: "bold",
  },

  accessBox: {
    textAlign: "center",
    padding: "16px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    border: "1px solid #e9ecef",
  },

  accessButton: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 30px",
    borderRadius: "25px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    width: "100%",
    transition: "background-color 0.3s",
  },

  accessSubtitle: {
    fontSize: "11px",
    color: "#000",
    marginTop: "8px",
  },
};

export default AppDetailsScreen;
