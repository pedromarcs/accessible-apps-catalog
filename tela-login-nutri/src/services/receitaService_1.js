import api from './api';

// ============================================================
// MODELO - Receita
// ============================================================
// OBRIGATÓRIOS:
//   fkIdNutri: number              ex: 1  (ID do nutricionista)
//   titulo: string                 ex: "Frango Grelhado com Legumes"
//   ingredientes: string           ex: "200g frango, 1 abobrinha..."
//   modoPreparo: string            ex: "Tempere o frango..."
//
// OPCIONAIS:
//   calorias: number               ex: 350.00
//   proteinas: number              ex: 40.00
//   carbos: number                 ex: 15.00
//   gorduras: number               ex: 8.00
//   tempoPreparo: number           ex: 30  (em minutos)
//   tags: string                   ex: "low carb, proteico"
//   observacoes: string            ex: "Ideal para pós-treino"
//   imagemUrl: string              ex: "https://..."
// ============================================================

export const getReceitas = async () => {
  const response = await api.get('/receita');
  return response.data;
};

export const getReceitaById = async (id) => {
  const response = await api.get(`/receita/${id}`);
  return response.data;
};

export const createReceita = async (dados) => {

  const response = await api.post('/receita', dados);
  return response.data;
};

export const updateReceita = async (id, dados) => {
  const response = await api.put(`/receita/${id}`, dados);
  return response.data;
};

export const deleteReceita = async (id) => {
  const response = await api.delete(`/receita/${id}`);
  return response.data;
};
