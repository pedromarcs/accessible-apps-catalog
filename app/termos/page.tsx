"use client";

import React from 'react';
import Link from 'next/link';

// Conteúdo simulado e bem estruturado para Termos de Uso
const TERMOS_CONTENT = [
    {
        title: "1. Aceitação dos Termos",
        content: "Ao acessar ou usar o aplicativo AcessiAp, você concorda em cumprir e se obrigar a estes Termos de Uso. Se você não concordar com qualquer parte dos termos, não deverá acessar ou usar o aplicativo. Estes Termos podem ser atualizados periodicamente, e o uso continuado implica aceitação das novas condições."
    },
    {
        title: "2. Uso e Acesso",
        content: "O AcessiAp é fornecido para seu uso pessoal e não comercial. Você é responsável por manter a confidencialidade de sua conta e senha e por restringir o acesso ao seu dispositivo. Você concorda em aceitar a responsabilidade por todas as atividades que ocorram sob sua conta ou senha."
    },
    {
        title: "3. Conteúdo do Usuário",
        content: "Qualquer conteúdo (como avaliações e comentários) que você enviar, publicar ou exibir no aplicativo é de sua responsabilidade exclusiva. Você concede ao AcessiAp uma licença mundial, não exclusiva e livre de royalties para usar, copiar, reproduzir e distribuir tal conteúdo, estritamente para fins de operação e melhoria da plataforma."
    },
    {
        title: "4. Propriedade Intelectual",
        content: "Todo o conteúdo presente no AcessiAp, incluindo textos, gráficos, logotipos, ícones e software, é propriedade do AcessiAp ou de seus licenciadores e é protegido pelas leis de direitos autorais. Você não pode copiar, modificar, distribuir ou reproduzir qualquer material sem permissão prévia por escrito."
    },
    {
        title: "5. Limitação de Responsabilidade",
        content: "O AcessiAp não garante que o serviço será ininterrupto, livre de erros ou seguro. Em nenhuma circunstância o AcessiAp será responsável por quaisquer danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou da incapacidade de usar o aplicativo."
    }
];

// Componente principal da página de Termos de Uso
export default function TermosPage() {
    
    const currentDate = new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="min-h-screen bg-gray-50">
            
            {/* Cabeçalho */}
            <header className="bg-blue-600 shadow-md">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-start items-center text-white">
                    {/* Botão de Voltar, apontando para a raiz (página inicial) */}
                    <Link 
                        href="/" 
                        className="flex items-center space-x-2 text-sm md:text-base hover:text-blue-200 transition"
                        aria-label="Voltar para a página inicial"
                    >
                        {/* Ícone de seta para esquerda */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>Voltar ao Início</span>
                    </Link>
                </div>
            </header>

            <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
                
                {/* Título Principal */}
                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Termos e Condições de Uso</h1>
                <p className="text-sm text-gray-500 mb-8">Última atualização: {currentDate}</p>

                {/* Seções dos Termos */}
                <div className="space-y-10">
                    {TERMOS_CONTENT.map((section, index) => (
                        <section key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center space-x-2">
                                {/* Ícone de documento (Lucide/Heroicons equivalent) */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span className="text-blue-600">{section.title}</span>
                            </h2>
                            <p className="text-gray-700 leading-relaxed pl-8 pt-1">
                                {section.content}
                            </p>
                        </section>
                    ))}
                </div>

                {/* Rodapé Legal */}
                <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
                    <p>Ao continuar a usar o AcessiAp, você reconhece que leu e entendeu estes Termos de Uso.</p>
                </div>

            </main>
        </div>
    );
}