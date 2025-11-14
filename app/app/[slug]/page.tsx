// Conteúdo do arquivo: app/app/[slug]/page.tsx
interface AppDetailPageProps {
  params: {
    slug: string; // Isso captura o ID do app na URL (ex: 'whatsapp')
  };
}

export default function AppDetailPage({ params }: AppDetailPageProps) {
  const appId = params.slug;

  return (
    <div>
      <h1>Detalhes do Aplicativo: {appId.toUpperCase()}</h1>
      <p>Esta página irá carregar os dados específicos do app "{appId}".</p>
      {/* O colega de equipe irá construir o layout de detalhes do app aqui. */}
    </div>
  );
}