"use client";
import React, { useState, useCallback } from 'react';

// =================================================================
// COMPONENTES AUXILIARES (Toggle Switch)
// =================================================================

const ToggleSwitch: React.FC<{ label: string, description: string, checked: boolean, onChange: () => void }> = 
  ({ label, description, checked, onChange }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
    <div className="pr-4">
      <h3 className="text-gray-800 font-medium">{label}</h3>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only peer" />
      {/* CORREÇÃO APLICADA AQUI: after:top-[2px] -> after:top-0.5 E after:start-[2px] -> after:start-0.5 */}
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
    </label>
  </div>
);

// =================================================================
// COMPONENTE PRINCIPAL (Tela de Configurações)
// =================================================================

const SettingsScreen: React.FC = () => {
  const [settings, setSettings] = useState({
    notificacoesPush: true,
    alertasEmail: false,
    altoContraste: false,
    textoGrande: false,
    leitorTela: true,
    tamanhoFonte: 50,
  });

  const handleToggle = useCallback((key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const handleFontSizeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings(prev => ({
      ...prev,
      tamanhoFonte: parseInt(e.target.value, 10),
    }));
  }, []);

  const handleSaveSettings = useCallback(() => {
    console.log("Configurações salvas:", settings);
    alert("Configurações salvas (simulado)! Veja o console para o estado.");
  }, [settings]);


  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      
      {/* Cabeçalho */}
      <header className="bg-blue-600 shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center text-white">
          <a href="#" className="flex items-center space-x-2 text-sm md:text-base hover:text-blue-200 transition font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            <span>Voltar ao catálogo</span>
          </a>
          <h1 className="text-xl font-semibold flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.298.818 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <span>Configurações</span>
          </h1>
          <div className="w-5 h-5 opacity-0"></div> 
        </div>
      </header>

      {/* Conteúdo Principal da Tela */}
      <main className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Seção de Notificações */}
        <section className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span>Notificações</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">Gerencie como você recebe atualizações.</p>
          </div>

          <ToggleSwitch
            label="Notificações push"
            description="Receba notificações no aplicativo"
            checked={settings.notificacoesPush}
            onChange={() => handleToggle('notificacoesPush')}
          />
          <ToggleSwitch
            label="Alertas por e-mail"
            description="Receba atualizações por e-mail"
            checked={settings.alertasEmail}
            onChange={() => handleToggle('alertasEmail')}
          />
        </section>

        {/* Seção de Acessibilidade */}
        <section className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c-2 3.5-4.5 5.5-4.5 5.5s2.5 0 5-2.5 3.5-6 3.5-6V3m-4 15h4m-4 4h4" /></svg>
              <span>Acessibilidade</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">Personalize a experiência visual e de navegação.</p>
          </div>

          <ToggleSwitch
            label="Alto contraste"
            description="Melhora a visibilidade do conteúdo"
            checked={settings.altoContraste}
            onChange={() => handleToggle('altoContraste')}
          />
          <ToggleSwitch
            label="Texto grande"
            description="Aumenta o tamanho do texto"
            checked={settings.textoGrande}
            onChange={() => handleToggle('textoGrande')}
          />
          <ToggleSwitch
            label="Leitor de tela"
            description="Otimizado para leitores de tela"
            checked={settings.leitorTela}
            onChange={() => handleToggle('leitorTela')}
          />

          {/* Slider de Tamanho da Fonte */}
          <div className="pt-4 mt-2">
            <label htmlFor="fontSizeSlider" className="text-gray-800 font-medium mb-3 block">
              Tamanho da fonte
            </label>
            <div className="flex items-center space-x-3">
              <span className="text-base font-bold text-gray-600">A</span>
              <input
                id="fontSizeSlider"
                type="range"
                min="0"
                max="100"
                value={settings.tamanhoFonte}
                onChange={handleFontSizeChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg accent-blue-600"
              />
              <span className="text-xl font-bold text-gray-600">A</span>
            </div>
          </div>
        </section>

        {/* Botão de Salvar */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleSaveSettings}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Salvar Configurações
          </button>
        </div>

      </main>
    </div>
  );
};

export default SettingsScreen;