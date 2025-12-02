"use client";

import React from 'react';
import Link from 'next/link';

// Conteúdo simulado e bem estruturado para Política de Privacidade
const PRIVACIDADE_CONTENT = [
    {
        title: "1. Informações que Coletamos",
        icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", // Icone de Pessoa
        content: "Coletamos informações que você nos fornece diretamente, como nome, e-mail e senha durante o cadastro. Além disso, registramos dados de uso (interações, tempo de sessão) e dados técnicos do dispositivo para melhorar o serviço e a segurança."
    },
    {
        title: "2. Como Usamos Suas Informações",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 4.016 4.2 4.2 0 00-.217 7.048c-.598 1.168-.588 2.222.148 3.334.39.57.973 1.042 1.636 1.398 1.332.748 2.307 1.258 3.71 1.763a14.717 14.717 0 004.98 0c1.403-.505 2.378-1.015 3.71-1.763.663-.356 1.246-.828 1.636-1.398.736-1.112.746-2.166.148-3.334a4.2 4.2 0 00-.217-7.048z", // Icone de Escudo/Segurança
        content: "Utilizamos suas informações para: fornecer e gerenciar o serviço; personalizar sua experiência; responder a solicitações de suporte; enviar comunicações importantes; e analisar o uso para otimizar a funcionalidade e o desempenho do aplicativo."
    },
    {
        title: "3. Compartilhamento de Dados",
        icon: "M8 14v3m4-3v3m4-3v3M21 10h-5.5a2.5 2.5 0 00-1.895-.895l-1.605.321V4a2 2 0 00-2-2h-3a2 2 0 00-2 2v10.426l-1.605-.321A2.5 2.5 0 003 10H1a1 1 0 00-1 1v7a1 1 0 001 1h2a2 2 0 002 2h14a2 2 0 002-2h2a1 1 0 001-1v-7a1 1 0 00-1-1z", // Icone de Compartilhamento
        content: "Não vendemos ou alugamos suas informações pessoais. Podemos compartilhar dados com prestadores de serviços terceirizados (ex: serviços de hospedagem, análise de dados) que nos auxiliam na operação do aplicativo, desde que se comprometam a manter a confidencialidade."
    },
    {
        title: "4. Direitos do Usuário (LGPD)",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h-2.5a1.5 1.5 0 000 3h2.5M15 15h-2.5a1.5 1.5 0 010-3H15", // Icone de Documento
        content: "De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de acessar, corrigir, solicitar a exclusão ou a portabilidade de seus dados pessoais. Para exercer esses direitos, entre em contato conosco através do e-mail de suporte fornecido no aplicativo."
    }
];

// Componente principal da página de Política de Privacidade
export default function PrivacidadePage() {
    
    const currentDate = new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="min-h-screen bg-gray-50">
            
            {/* Cabeçalho (igual ao Termos de Uso) */}
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
                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Política de Privacidade</h1>
                <p className="text-sm text-gray-500 mb-8">Esta política explica como o AcessiAp coleta e usa seus dados. Última atualização: {currentDate}</p>

                {/* Seções da Política de Privacidade */}
                <div className="space-y-10">
                    {PRIVACIDADE_CONTENT.map((section, index) => (
                        <section key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center space-x-3">
                                {/* Ícone SVG para a seção */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={section.icon} />
                                </svg>
                                <span className="text-blue-700">{section.title}</span>
                            </h2>
                            <p className="text-gray-700 leading-relaxed pl-9 pt-1">
                                {section.content}
                            </p>
                        </section>
                    ))}
                </div>

                {/* Contato e Encerramento */}
                <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-600">
                    <h3 className="text-lg font-semibold mb-2">Contato</h3>
                    <p className="text-sm">Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através do e-mail:</p>
                    <p className="font-medium text-blue-600 mt-1">suporte@acessiap.com</p>
                </div>

            </main>
        </div>
    );
}