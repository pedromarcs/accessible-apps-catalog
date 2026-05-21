import api from './api';

// ============================================================
// MODELO - PlanoAlimentar
// ============================================================
// OBRIGATÓRIOS:
//   fkIdUser: number               ex: 1  (ID do usuário/paciente)
//   fkIdNutriCriador: number       ex: 2  (ID do nutricionista)
//
// OPCIONAIS:
//   caloriasAlvo: number           ex: 2000.00
//   proteinaAlvo: number           ex: 150.00
//   gorduraAlvo: number            ex: 60.00
//   carboAlvo: number              ex: 220.00
//   status: string                 ex: "Ativo" (padrão) | "Inativo"
// ============================================================

export const getPlanos = async () => {
  const response = await api.get('/plano');
  return response.data;
};

export const getPlanoById = async (id) => {
  const response = await api.get(`/plano/${id}`);
  return response.data;
};

export const createPlano = async (dados) => {
  // Exemplo mínimo:
  // { fkIdUser: 1, fkIdNutriCriador: 2 }
  const response = await api.post('/plano', dados);
  return response.data;
};

export const updatePlano = async (id, dados) => {
  const response = await api.put(`/plano/${id}`, dados);
  return response.data;
};

export const deletePlano = async (id) => {
  const response = await api.delete(`/plano/${id}`);
  return response.data;
};

// ============================================================
// MODELO - PlanoReceita (tabela associativa)
// ============================================================
// OBRIGATÓRIOS:
//   fkIdPlano: number              ex: 1  (ID do plano)
//   fkIdReceita: number            ex: 3  (ID da receita)
//   dataInclusao: string           ex: "2025-05-14"  (yyyy-MM-dd)
// ============================================================

export const getPlanoReceitas = async () => {
  const response = await api.get('/plano/receita');
  return response.data;
};

export const addReceitaAoPlano = async (dados) => {
  // Vincula uma receita a um plano alimentar
  // { fkIdPlano: 1, fkIdReceita: 3, dataInclusao: "2025-05-14" }
  const response = await api.post('/plano/receita', dados);
  return response.data;
};

export const removeReceitaDoPPlano = async (id) => {
  const response = await api.delete(`/plano/receita/${id}`);
  return response.data;
};
