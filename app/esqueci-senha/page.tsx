"use client";

import React, { useState, useCallback } from 'react';
import Link from 'next/link';

// Tipos de estado da tela:
type RecoveryStatus = 'input' | 'loading' | 'success';

// Componente principal
export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<RecoveryStatus>('input');
    const [errorMessage, setErrorMessage] = useState('');

    // Simula o processo de envio de recuperação de senha
    const handleForgotPassword = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage('');

        if (!email.trim() || !email.includes('@')) {
            setErrorMessage('Por favor, insira um e-mail válido.');
            return;
        }

        // Mudar para o estado de carregamento
        setStatus('loading');

        // Simulação de chamada de API com atraso de 2 segundos
        setTimeout(() => {
            setStatus('success');
            // Se fosse erro: setStatus('input'); setErrorMessage('Usuário não encontrado.');
        }, 2000);

    }, [email]);

    // O conteúdo principal do formulário ou mensagem
    const renderContent = () => {
        switch (status) {
            case 'success':
                return (
                    <div className="text-center p-6">
                        <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 12H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z"></path>
                        </svg>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">E-mail Enviado!</h2>
                        <p className="text-gray-600 mb-6">
                            Verifique sua caixa de entrada e a pasta de spam. Um link de recuperação foi enviado para:
                            <span className="font-semibold text-blue-600 block mt-1">{email}</span>
                        </p>
                        <Link href="/login" className="text-blue-500 font-medium hover:text-blue-700 transition">
                            Voltar para o Login
                        </Link>
                    </div>
                );

            case 'loading':
                return (
                    <div className="text-center p-6">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500 mx-auto mb-4"></div>
                        <p className="text-gray-600 font-medium">Enviando link de recuperação...</p>
                    </div>
                );

            case 'input':
            default:
                return (
                    <form onSubmit={handleForgotPassword} className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800">Recuperar Senha</h2>
                        <p className="text-gray-600">
                            Insira seu endereço de e-mail abaixo e enviaremos um link para redefinir sua senha.
                        </p>

                        {/* Campo de E-mail */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="seu.email@exemplo.com"
                            />
                        </div>

                        {/* Mensagem de Erro */}
                        {errorMessage && (
                            <div className="text-red-600 bg-red-100 p-3 rounded-lg text-sm font-medium border-l-4 border-red-500">
                                {errorMessage}
                            </div>
                        )}

                        {/* Botão de Envio */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-md shadow-blue-500/50"
                        >
                            Enviar Link de Redefinição
                        </button>
                        
                        {/* Link para Voltar */}
                        <div className="text-center pt-2">
                            <Link href="/login" className="text-sm text-gray-500 hover:text-blue-600 transition">
                                Lembrei minha senha! Voltar para o Login
                            </Link>
                        </div>
                    </form>
                );
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl space-y-8">
                {renderContent()}
            </div>
        </div>
    );
}