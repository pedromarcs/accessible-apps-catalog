"use client";
import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, Settings } from 'lucide-react'; // <-- importações adicionadas

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
  appsFavoritos: 0,
  avaliacoes: 0,
  comentarios: 0,
};

// Componente para exibir estatísticas do usuário
const StatCard: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="bg-gray-100 p-4 rounded-xl text-center shadow-sm">
    <div className="text-3xl font-bold text-gray-800">{value}</div>
    <div className="text-sm text-gray-500 mt-1">{label}</div>
  </div>
);

// Componente para Notificações de Status
interface NotificationState {
  message: string;
  type: 'success' | 'warning' | null;
}

const Notification: React.FC<{ notification: NotificationState }> = ({ notification }) => {
  if (!notification.type) return null;

  const colorClasses =
    notification.type === 'success'
      ? 'bg-green-500 border-green-700'
      : 'bg-yellow-500 border-yellow-700';

  return (
    <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-xl text-white font-semibold border-b-4 ${colorClasses}`}>
      {notification.message}
    </div>
  );
};

// Componente de rótulo para campos de formulário
const FieldLabel: React.FC<{ icon: React.ReactNode; label: string; htmlFor: string }> = ({ icon, label, htmlFor }) => (
  <label htmlFor={htmlFor} className="text-gray-500 font-medium mb-2 flex items-center space-x-2">
    <span className="text-gray-400">{icon}</span>
    <span>{label}</span>
  </label>
);

const App: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData>(mockProfileData);
  const [isEditing, setIsEditing] = useState(false);
  const [originalProfile, setOriginalProfile] = useState<ProfileData>(mockProfileData);
  const [notification, setNotification] = useState<NotificationState>({ message: '', type: null });

  const showNotification = useCallback((message: string, type: 'success' | 'warning') => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: '', type: null }), 3000);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setProfile(prev => ({ ...prev, [id]: value }));
  }, []);

  const toggleEditMode = useCallback(() => {
    if (!isEditing) setOriginalProfile(profile);
    setIsEditing(!isEditing);
  }, [isEditing, profile]);

  const cancelEditMode = useCallback(() => {
    setProfile(originalProfile);
    setIsEditing(false);
    showNotification('Edição cancelada. Os dados não foram alterados.', 'warning');
  }, [originalProfile, showNotification]);

  const saveChanges = useCallback(() => {
    setOriginalProfile(profile);
    setIsEditing(false);
    showNotification('Alterações salvas com sucesso!', 'success');
  }, [profile, showNotification]);

  const getFieldClasses = useCallback((isTextArea = false) => {
    const base = "w-full p-3 rounded-lg text-gray-800 transition focus:outline-none";
    const view = "bg-gray-100 border-transparent cursor-default";
    const edit = "border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500";
    return `${base} ${isEditing ? edit : view} ${isTextArea ? 'resize-none' : ''}`;
  }, [isEditing]);

  return (
    <div className="bg-gray-50 min-h-screen">

      <Notification notification={notification} />

      {/* ✅ CABEÇALHO NOVO INSERIDO */}
      <header className="w-full bg-[#1e6df8] text-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link
            href="/catalogo"
            className="flex items-center text-sm font-medium hover:text-indigo-200 transition"
          >
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
            Voltar ao catálogo
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">

          {/* Título + Botão editar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-6 mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-blue-600 text-white flex items-center justify-center text-3xl font-bold rounded-full shrink-0">
                {profile.nome.charAt(0)}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{profile.nome}</h2>
                <p className="text-sm text-gray-500 mt-1">Membro desde {profile.membroDesde}</p>
              </div>
            </div>

            <button
              onClick={toggleEditMode}
              className="mt-4 sm:mt-0 px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 font-medium flex items-center space-x-2 shadow-sm"
            >
              {isEditing ? <span>Visualizar</span> : <span>Editar</span>}
            </button>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>

            {/* Nome */}
            <div className="mb-6">
              <FieldLabel
                htmlFor="nome"
                label="Nome"
                icon={<Settings className="h-5 w-5" />}
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

            {/* Email */}
            <div className="mb-6">
              <FieldLabel htmlFor="email" label="E-Mail" icon={<Settings className="h-5 w-5" />} />
              <input
                type="email"
                id="email"
                value={profile.email}
                readOnly={!isEditing}
                onChange={handleChange}
                className={getFieldClasses()}
              />
            </div>

            {/* Sobre mim */}
            <div className="mb-6">
              <FieldLabel htmlFor="sobreMim" label="Sobre mim" icon={<Settings className="h-5 w-5" />} />
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

          {/* Estatísticas */}
          <div className="mt-8 pt-6 border-t grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard value={profile.appsFavoritos} label="Apps Favoritos" />
            <StatCard value={profile.avaliacoes} label="Avaliações" />
            <StatCard value={profile.comentarios} label="Comentários" />
          </div>

          {/* Ações de edição */}
          {isEditing && (
            <div className="mt-8 flex justify-end space-x-4">
              <button onClick={cancelEditMode} className="px-6 py-2 text-gray-600 hover:bg-gray-200 font-medium rounded-lg">
                Cancelar
              </button>
              <button onClick={saveChanges} className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md">
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
