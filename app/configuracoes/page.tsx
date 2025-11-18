"use client";
import React, { useState, useCallback } from 'react';
import Link from 'next/link';
// CORREÇÃO: Adicionada ArrowRight. Substituída Wheelchair por Accessibility.
import { Bell, Settings, Moon, Sun, Monitor, Languages, ChevronDown, Lock, Database, Info, Trash2, Shield, AlertTriangle, ArrowRight, Accessibility } from 'lucide-react';

// --- Dados de Simulação ---

const temas = [
  { value: 'light', label: 'Claro', icon: Sun },
  { value: 'dark', label: 'Escuro', icon: Moon },
  { value: 'system', label: 'Sistema', icon: Monitor },
];

const idiomas = [
  { value: 'pt', label: 'Português (Brasil)' },
  { value: 'en', label: 'Inglês (EUA)' },
  { value: 'es', label: 'Espanhol' },
  { value: 'fr', label: 'Francês' },
  { value: 'de', label: 'Alemão' },
  { value: 'it', label: 'Italiano' },
  { value: 'ja', label: 'Japonês' },
  { value: 'zh', label: 'Chinês (Mandarin)' },
  { value: 'ru', label: 'Russo' },
  { value: 'ar', label: 'Árabe' },
];

// --- Componentes Reutilizáveis ---

// Componente de Toggle (Interruptor)
const ToggleOption: React.FC<{ label: string, description: string, id: string, checked: boolean, onChange: (checked: boolean) => void }> = ({ label, description, id, checked, onChange }) => (
  <div className="flex justify-between items-center py-3 border-b last:border-b-0">
    {/* CORREÇÃO: flex-grow substituído por grow */}
    <div className="grow pr-4">
      <h3 className="font-semibold text-gray-800">{label}</h3>
      <p className="text-sm text-gray-500 mt-0.5">{description}</p>
    </div>
    <label htmlFor={id} className="relative inline-flex items-center cursor-pointer shrink-0">
      <input 
        type="checkbox" 
        id={id} 
        checked={checked} 
        onChange={(e) => onChange(e.target.checked)} 
        className="sr-only peer" 
      />
      {/* CORREÇÃO: Usando classes canônicas do Tailwind (top-0.5 e left-0.5) */}
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-300 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
    </label>
  </div>
);

// Componente de Dropdown (para Tema e Idioma)
const DropdownOption: React.FC<{ label: string, options: typeof temas | typeof idiomas, selected: string, onSelect: (value: string) => void }> = ({ label, options, selected, onSelect }) => (
  <div className="py-3 border-b last:border-b-0">
    <label className="font-semibold text-gray-800 block mb-2">{label}</label>
    <div className="relative">
      <select
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
        className="w-full appearance-none bg-gray-100 border border-gray-300 text-gray-800 py-2.5 px-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
    </div>
  </div>
);

// Componente de Ação (botões sem toggle)
const ActionOption: React.FC<{ label: string, icon: React.ReactNode, onClick: () => void, color?: string }> = ({ label, icon, onClick, color = 'text-gray-800' }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-between py-3 border-b last:border-b-0 text-left group hover:bg-gray-50 transition duration-150 rounded-lg -mx-2 px-2`}
  >
    <div className="flex items-center space-x-3">
        <span className={`${color}`}>{icon}</span>
        <span className={`font-semibold ${color}`}>{label}</span>
    </div>
    <span className="text-gray-400 group-hover:text-indigo-600 transition">
        {/* CORREÇÃO: ArrowRight está importado agora */}
        <ArrowRight className="w-5 h-5 rotate-180" />
    </span>
  </button>
);

// Componente de Seção (Caixa Branca com Título e Ícone)
const SettingsSection: React.FC<{ title: string, icon: React.ReactNode, children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-8">
    <div className="flex items-center mb-4 pb-4 border-b">
      <span className="text-2xl text-indigo-600 mr-3">{icon}</span>
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    </div>
    <div className="space-y-3">
      {children}
    </div>
  </div>
);

// --- Componente Principal ---

export default function ConfiguracoesPage() {
  // Estados para gerenciar as configurações
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [contrastEnabled, setContrastEnabled] = useState(false);
  const [largeTextEnabled, setLargeTextEnabled] = useState(false);
  const [readerEnabled, setReaderEnabled] = useState(true);
  const [fontSize, setFontSize] = useState(50); // 0 a 100
  const [selectedTheme, setSelectedTheme] = useState('system');
  const [selectedLanguage, setSelectedLanguage] = useState('pt');
  const [bioAuthEnabled, setBioAuthEnabled] = useState(false);


  // Funções de Simulação de Ação
  const clearCache = useCallback(() => alert("Cache limpo! (Simulação)"), []);
  const logout = useCallback(() => alert("Usuário desconectado! (Simulação)"), []);


  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Cabeçalho */}
      <header className="bg-indigo-600 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Botão de Voltar Funcional */}
          <Link href="/" className="flex items-center text-sm font-medium hover:text-indigo-200 transition">
            {/* CORREÇÃO: ArrowRight está importado agora */}
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
            Voltar ao catálogo
          </Link>
          
          <h1 className="text-xl font-bold">Configurações</h1>
          
          <Settings className="w-6 h-6" /> 
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">

        {/* 1. Seção GERAL (Tema e Idioma) */}
        <SettingsSection title="Geral" icon={<Languages className="w-6 h-6" />}>
           
            <DropdownOption 
                label="Tema da Interface"
                options={temas}
                selected={selectedTheme}
                onSelect={setSelectedTheme}
            />

            <DropdownOption 
                label="Idioma"
                options={idiomas}
                selected={selectedLanguage}
                onSelect={setSelectedLanguage}
            />
        </SettingsSection>

        {/* 2. Seção SEGURANÇA */}
        <SettingsSection title="Segurança e Conta" icon={<Lock className="w-6 h-6" />}>
            <ToggleOption
                id="bioAuth"
                label="Autenticação Biométrica"
                description="Use digital ou face ID para acessar o app."
                checked={bioAuthEnabled}
                onChange={setBioAuthEnabled}
            />
            <ActionOption
                label="Mudar Senha"
                icon={<Shield className="w-6 h-6" />}
                onClick={() => alert("Redirecionando para mudança de senha...")}
            />
            <ActionOption
                label="Desconectar"
                icon={<AlertTriangle className="w-6 h-6 text-red-500" />}
                onClick={logout}
                color="text-red-500"
            />
        </SettingsSection>
        
        {/* 3. Seção NOTIFICAÇÕES */}
        <SettingsSection title="Notificações" icon={<Bell className="w-6 h-6" />}>
          <ToggleOption
            id="push"
            label="Notificações push"
            description="Receba notificações no aplicativo"
            checked={pushEnabled}
            onChange={setPushEnabled}
          />
          <ToggleOption
            id="email"
            label="Alertas por e-mail"
            description="Receba atualizações por e-mail"
            checked={emailEnabled}
            onChange={setEmailEnabled}
          />
        </SettingsSection>

        {/* 4. Seção ACESSIBILIDADE */}
        {/* CORREÇÃO: Usando Accessibility no lugar de Wheelchair */}
        <SettingsSection title="Acessibilidade" icon={<Accessibility className="w-6 h-6" />}>
          
          <ToggleOption
            id="contrast"
            label="Alto contraste"
            description="Melhora a visibilidade do conteúdo"
            checked={contrastEnabled}
            onChange={setContrastEnabled}
          />
          <ToggleOption
            id="largeText"
            label="Texto grande"
            description="Aumenta o tamanho do texto"
            checked={largeTextEnabled}
            onChange={setLargeTextEnabled}
          />
          <ToggleOption
            id="reader"
            label="Leitor de tela"
            description="Otimizado para leitores de tela"
            checked={readerEnabled}
            onChange={setReaderEnabled}
          />
          
          {/* Slider de Tamanho da Fonte */}
          <div className="py-3">
            <h3 className="font-semibold text-gray-800 mb-2">Tamanho da fonte</h3>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-500">A</span>
              <input
                type="range"
                min="0"
                max="100"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg accent-indigo-600"
              />
              <span className="text-xl font-bold text-gray-500">A</span>
            </div>
          </div>

        </SettingsSection>

        {/* 5. Seção DADOS E ARMAZENAMENTO */}
        <SettingsSection title="Dados e Armazenamento" icon={<Database className="w-6 h-6" />}>
            <ActionOption
                label="Limpar Cache"
                icon={<Trash2 className="w-6 h-6" />}
                onClick={clearCache}
            />
            <div className="py-3 border-b last:border-b-0">
                <h3 className="font-semibold text-gray-800">Uso de Dados</h3>
                <p className="text-sm text-gray-500 mt-0.5">32 MB de dados armazenados localmente.</p>
            </div>
        </SettingsSection>

        {/* 6. Seção SOBRE */}
        <SettingsSection title="Sobre o Aplicativo" icon={<Info className="w-6 h-6" />}>
            <div className="py-3 border-b last:border-b-0">
                <h3 className="font-semibold text-gray-800">Versão</h3>
                <p className="text-sm text-gray-500 mt-0.5">AcessiAp v1.0.2</p>
            </div>
            <ActionOption
                label="Termos de Serviço"
                icon={<AlertTriangle className="w-6 h-6" />}
                onClick={() => alert("Redirecionando para Termos...")}
            />
            <ActionOption
                label="Política de Privacidade"
                icon={<Shield className="w-6 h-6" />}
                onClick={() => alert("Redirecionando para Política de Privacidade...")}
            />
        </SettingsSection>


      </main>
    </div>
  );
}