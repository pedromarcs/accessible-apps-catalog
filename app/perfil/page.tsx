"use client";
import React, { useState, useCallback } from 'react';
import Link from 'next/link'; // 1. IMPORTADO: Importação do Link

// Interface de dados para o perfil do usuário
interface ProfileData {
  nome: string;
  email: string;
  sobreMim: string;
  membroDesde: string;
  appsFavoritos: number;
  avaliacoes: number;
  comentarios: number;
}

// Dados de perfil mockados (simulados)
const mockProfileData: ProfileData = {
  nome: "Manoel Gomes",
  email: "ManoelGomes@gmail.com",
  sobreMim: "Buscando apps acessíveis para melhorar minha experiência digital.",
  membroDesde: "Outubro 2025",
  appsFavoritos: 12,
  avaliacoes: 8,
  comentarios: 5,
};

// Componente para exibir estatísticas do usuário
const StatCard: React.FC<{ value: number, label: string }> = ({ value, label }) => (
  <div className="bg-gray-100 p-4 rounded-xl text-center shadow-sm">
    <div className="text-3xl font-bold text-gray-800">{value}</div>
    <div className="text-sm text-gray-500 mt-1">{label}</div>
  </div>
);

// Componente para o rótulo do campo de formulário
const FieldLabel: React.FC<{ icon: React.ReactNode, label: string, htmlFor: string }> = ({ icon, label, htmlFor }) => (
  <label htmlFor={htmlFor} className="text-gray-500 font-medium mb-2 flex items-center space-x-2">
    <span className="text-gray-400">{icon}</span>
    <span>{label}</span>
  </label>
);

// Interface e Componente para Notificações de Status
interface NotificationState {
  message: string;
  type: 'success' | 'warning' | null;
}
const Notification: React.FC<{ notification: NotificationState }> = ({ notification }) => {
  if (!notification.type) return null;

  const colorClasses = notification.type === 'success'
    ? 'bg-green-500 border-green-700'
    : 'bg-yellow-500 border-yellow-700';

  return (
    <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-xl text-white font-semibold transition-opacity duration-300 border-b-4 ${colorClasses}`}>
      {notification.message}
    </div>
  );
};


const App: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData>(mockProfileData);
  const [isEditing, setIsEditing] = useState(false);
  const [originalProfile, setOriginalProfile] = useState<ProfileData>(mockProfileData);
  const [notification, setNotification] = useState<NotificationState>({ message: '', type: null });

  // Função para mostrar notificações temporárias
  const showNotification = useCallback((message: string, type: 'success' | 'warning') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification({ message: '', type: null });
    }, 3000);
  }, []);

  // Lida com a mudança nos campos de input/textarea
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [id]: value,
    }));
  }, []);

  // Alterna o modo de edição
  const toggleEditMode = useCallback(() => {
    if (!isEditing) {
      setOriginalProfile(profile); // Salva o estado atual ao entrar em edição
    }
    setIsEditing(!isEditing);
    setNotification({ message: '', type: null });
  }, [isEditing, profile]);

  // Cancela a edição e volta para os dados originais
  const cancelEditMode = useCallback(() => {
    setProfile(originalProfile);
    setIsEditing(false);
    showNotification('Edição cancelada. Os dados não foram alterados.', 'warning');
  }, [originalProfile, showNotification]);

  // Salva as alterações
  const saveChanges = useCallback(() => {
    setOriginalProfile(profile);
    setIsEditing(false);
    showNotification('Alterações salvas com sucesso!', 'success');
  }, [profile, showNotification]);

  // Classes dinâmicas para campos de formulário
  const getFieldClasses = useCallback((isTextArea: boolean = false) => {
    const baseClasses = "w-full p-3 rounded-lg text-gray-800 transition focus:outline-none";
    const viewClasses = "bg-gray-100 border-transparent cursor-default";
    const editClasses = "border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500";
    
    return `${baseClasses} ${isEditing ? editClasses : viewClasses} ${isTextArea ? 'resize-none' : ''}`;
  }, [isEditing]);

  return (
    <div className="bg-gray-100 min-h-screen">
      
      <Notification notification={notification} />

      {/* Cabeçalho */}
      <header className="bg-blue-600 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-start items-center text-white">
          {/* 2. CORREÇÃO: Usando Link do Next.js e href="/" */}
          <Link href="/" className="flex items-center space-x-2 text-sm md:text-base hover:text-blue-200 transition">
            {/* 3. ÍCONE DE VOLTA: Mantido seu SVG original */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            <span>Voltar ao catálogo</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">

          {/* Seção de Título e Botão Editar/Visualizar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-6 mb-6">
            <div className="flex items-center space-x-4">
              {/* Avatar com a primeira letra do nome */}
              <div className="w-20 h-20 bg-blue-600 text-white flex items-center justify-center text-3xl font-bold rounded-full shrink-0">
                {profile.nome.charAt(0)}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{profile.nome}</h2>
                <p className="text-sm text-gray-500 mt-1 flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span>Membro desde {profile.membroDesde}</span>
                </p>
              </div>
            </div>

            <button 
              onClick={toggleEditMode}
              className="mt-4 sm:mt-0 px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition duration-150 flex items-center space-x-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
            >
              {isEditing ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  <span>Visualizar</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                  <span>Editar</span>
                </>
              )}
            </button>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            
            {/* Campo Nome */}
            <div className="mb-6">
              <FieldLabel 
                htmlFor="nome" 
                label="Nome" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} 
              />
              <input 
                type="text" 
                id="nome" 
                value={profile.nome} 
                readOnly={!isEditing}
                onChange={handleChange}
                className={getFieldClasses()}
              />
            </div>
            
            {/* Campo E-mail */}
            <div className="mb-6">
              <FieldLabel 
                htmlFor="email" 
                label="E-Mail" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 12H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg>} 
              />
              <input 
                type="email" 
                id="email" 
                value={profile.email} 
                readOnly={!isEditing}
                onChange={handleChange}
                className={getFieldClasses()}
              />
            </div>

            {/* Campo Sobre Mim */}
            <div className="mb-6">
              <label htmlFor="sobreMim" className="text-gray-500 font-medium mb-2 block">Sobre mim</label>
              <textarea 
                id="sobreMim" 
                rows={3} 
                value={profile.sobreMim} 
                readOnly={!isEditing}
                onChange={handleChange}
                className={getFieldClasses(true)}
              />
            </div>
          </form>

          {/* Cards de Estatísticas */}
          <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard value={profile.appsFavoritos} label="Apps Favoritos" />
            <StatCard value={profile.avaliacoes} label="Avaliações" />
            <StatCard value={profile.comentarios} label="Comentários" />
          </div>

          {/* Botões de Ação de Edição */}
          {isEditing && (
            <div className="mt-8 flex justify-end space-x-4">
              <button onClick={cancelEditMode}
                className="px-6 py-2 text-gray-600 font-medium rounded-lg hover:bg-gray-200 transition duration-150">
                Cancelar
              </button>
              <button onClick={saveChanges}
                className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-150 shadow-md shadow-blue-300/50">
                Salvar alterações
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;