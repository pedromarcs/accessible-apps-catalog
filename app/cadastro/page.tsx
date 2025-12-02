"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react'; // Ícones para Usuário, E-mail, Senha

// Componente de Reutilização para os Campos de Input
const InputWithIcon = ({ Icon, type, placeholder, name, actionIcon, onActionClick, value, onChange }: any) => (
  <div className="relative mt-1">
    {/* Ícone principal */}
    <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
    
    {/* Campo de Input */}
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm placeholder-gray-500"
    />
    
    {/* Botão de Ação (Mostrar/Ocultar Senha) */}
    {actionIcon && (
      <button 
        type="button" 
        onClick={onActionClick} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-indigo-600 transition"
        aria-label={type === 'password' ? 'Mostrar senha' : 'Ocultar senha'}
      >
        {actionIcon}
      </button>
    )}
  </div>
);

// Componente principal da Página de Cadastro
export default function RegisterPage() {
  const router = useRouter();
  
  // Estado para controlar a visibilidade das senhas
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  
  // Estado para controlar o checkbox de termos e condições
  const [termsAccepted, setTermsAccepted] = React.useState(false);
  
  // Simula o registro e redireciona para o catálogo após o cadastro
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!termsAccepted) {
      alert("Por favor, aceite os Termos e Condições para continuar.");
    }
    
    // Simulação de lógica de cadastro. Redireciona para a tela de Login
    alert("Cadastro realizado com sucesso! Redirecionando para o Login.");
    router.push('/'); 
  };
  
  return (
    // Fundo azul
    <div className="min-h-screen flex items-center justify-center bg-indigo-600 p-4">
      
      {/* Container principal (o "cartão" branco) */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md text-center">
        
        {/* Título */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Crie sua Conta
        </h1>
        <p className="text-gray-500 mb-6">
          É rápido e fácil. Preencha os campos abaixo.
        </p>

        {/* Link para quem já tem conta */}
        <div className="mb-6 text-sm">
            <p className="text-gray-600">
                Já possui uma conta? 
                <Link href="/" className="text-indigo-600 font-semibold hover:underline ml-1">
                    Entre aqui
                </Link>
            </p>
        </div>

        {/* --- Formulário de Cadastro --- */}
        <form className="space-y-4" onSubmit={handleRegister}>
          
          {/* Nome Completo */}
          <div className="text-left">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1 block">
              Nome Completo:
            </label>
            <InputWithIcon
              Icon={User}
              type="text"
              placeholder="Seu nome completo"
              name="name"
            />
          </div>

          {/* E-mail */}
          <div className="text-left">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
              E-mail:
            </label>
            <InputWithIcon
              Icon={Mail}
              type="email"
              placeholder="Seuemail@exemplo.com"
              name="email"
            />
          </div>

          {/* Senha */}
          <div className="text-left">
            <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1 block">
              Senha:
            </label>
            <InputWithIcon
              Icon={Lock}
              type={showPassword ? 'text' : 'password'}
              placeholder="Crie uma senha"
              name="password"
              actionIcon={showPassword ? <EyeOff /> : <Eye />}
              onActionClick={() => setShowPassword(!showPassword)}
            />
          </div>

          {/* Confirma Senha */}
          <div className="text-left">
            <label htmlFor="confirm-password" className="text-sm font-medium text-gray-700 mb-1 block">
              Confirme a Senha:
            </label>
            <InputWithIcon
              Icon={Lock}
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Repita sua senha"
              name="confirm-password"
              actionIcon={showConfirmPassword ? <EyeOff /> : <Eye />}
              onActionClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
            <p className="text-xs text-gray-500 mt-1">
                Escolha uma senha com, no mínimo, 8 caracteres.
            </p>
          </div>
          
          {/* Checkbox de Termos e Condições */}
          <div className="flex items-start mt-4">
            <input 
                id="terms" 
                type="checkbox" 
                checked={termsAccepted} 
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2 mt-1"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600 text-left">
                Eu aceito os 
                <Link href="/termos" className="text-indigo-600 hover:underline mx-1">Termos e Condições</Link> 
                e li e entendi a 
                <Link href="/politica-de-privacidade" className="text-indigo-600 hover:underline ml-1">Política de Privacidade</Link>
            </label>
          </div>

          {/* Botão Cadastrar */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 mt-6 rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md"
          >
            Cadastrar
          </button>
        </form>

      </div>
    </div>
  );
}