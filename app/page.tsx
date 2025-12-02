"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Adicionado para navegação programática
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

// Componente de Reutilização para os Campos de Input
const InputWithIcon = ({ Icon, type, placeholder, name, actionIcon, onActionClick }: any) => (
  <div className="relative mt-1">
    {/* Ícone principal (e-mail ou senha) */}
    <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
    
    {/* Campo de Input */}
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm placeholder-gray-500"
    />
    
    {/* Botão para Ação (como mostrar/ocultar senha) */}
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

// Componente principal da Página de Login (Rota: /)
export default function LoginPage() {
  
  // Inicializa o hook de roteamento do Next.js
  const router = useRouter(); 
  
  const [showPassword, setShowPassword] = React.useState(false);

  // Alterna a visibilidade da senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  // FUNÇÃO DE NAVEGAÇÃO
  // Esta função é chamada ao submeter o formulário
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Nesta linha, simulamos o login e redirecionamos para o catálogo.
    // Futuramente, aqui será adicionada a lógica de autenticação (Firebase, etc.).
    router.push('/catalogo');
  };
  
  return (
    // Fundo azul da tela
    <div className="min-h-screen flex items-center justify-center bg-indigo-600 p-4">
      
      {/* Container principal do formulário (Card) */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md text-center">
        
        {/* Título e Subtítulo */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Entrar
        </h1>
        <p className="text-gray-500 mb-6">
          Acesse sua conta para explorar apps acessíveis
        </p>

        {/* --- Opções de Login Social --- */}
        <div className="space-y-3 mb-6">
          
          {/* Entrar com Google */}
          <button type="button" className="w-full flex items-center justify-center space-x-2 border border-gray-300 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition duration-150">
            <FcGoogle className="w-6 h-6" />
            <span>Entrar com o Google</span>
          </button>
          
          {/* Entrar com Facebook */}
          <button type="button" className="w-full flex items-center justify-center space-x-2 border border-gray-300 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition duration-150">
            <FaFacebook className="w-6 h-6 text-blue-600" />
            <span>Entrar com o Facebook</span>
          </button>
        </div>

        {/* Divisor "OU ENTRE COM E-MAIL" */}
        <div className="flex items-center my-6">
          <div className="grow border-t border-gray-300"></div> 
          <span className="shrink mx-4 text-gray-500 text-sm">OU ENTRE COM E-MAIL</span> 
          <div className="grow border-t border-gray-300"></div> 
        </div>

        {/* --- Formulário de Login --- */}
        {/* ADICIONADO: onSubmit que chama handleLogin, que faz o redirecionamento */}
        <form className="space-y-4" onSubmit={handleLogin}> 
          
          {/* E-mail */}
          <div className="text-left">
            <label htmlFor="email" className="flex text-sm font-medium text-gray-700 mb-1 justify-between">
              <span>E-mail:</span>
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
            <label htmlFor="password" className="flex text-sm font-medium text-gray-700 mb-1 justify-between">
              <span>Senha:</span>
              <Link href="/esqueci-senha" className="text-indigo-600 text-xs font-normal hover:underline">Esqueceu a senha?</Link>
            </label>
            <InputWithIcon
              Icon={Lock}
              type={showPassword ? 'text' : 'password'}
              placeholder="Digite sua senha"
              name="password"
              actionIcon={showPassword ? <EyeOff /> : <Eye />}
              onActionClick={togglePasswordVisibility}
            />
          </div>

          {/* Botão Entrar */}
          <button
            // type="submit" garante que o formulário chama o onSubmit
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 mt-4 rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md"
          >
            Entrar
          </button>
        </form>

        {/* Link de Cadastro e Termos */}
        <div className="mt-8 text-sm">
          <p className="text-gray-600">
            Não tem uma conta? 
            <Link href="/cadastro" className="text-indigo-600 font-semibold hover:underline ml-1">
              Cadastre-se gratuitamente
            </Link>
          </p>
          <p className="mt-3 text-xs text-gray-400">
            Ao entrar, você concorda com nossos 
            <Link href="/termos" className="text-indigo-600 hover:underline mx-1">Termos de Uso</Link> 
            e 
            <Link href="/politica-de-privacidade" className="text-indigo-600 hover:underline ml-1">Política de Privacidade</Link>
          </p>
        </div>

      </div>
    </div>
  );
}