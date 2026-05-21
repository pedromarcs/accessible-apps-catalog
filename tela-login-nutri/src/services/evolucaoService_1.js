import api from './api';

// ============================================================
// MODELO - Evolucao
// ============================================================
// OBRIGATÓRIOS:
//   fkIdUser: number               ex: 1  (ID do usuário)
//
// OPCIONAIS:
//   dataRegistro: string           ex: "2025-05-14"  (yyyy-MM-dd)
//   pesoRegistrado: number         ex: 74.50
//   metaProgresso: number          ex: 65.00  (peso meta do dia)
//   totalCaloriasConsumidas: number ex: 1850.00
//   refeicoesConcluidasI: number   ex: 3  (padrão: 0)
// ============================================================

export const getEvolucoes = async () => {
  const response = await api.get('/evolucao');
  return response.data;
};

export const getEvolucaoById = async (id) => {
  const response = await api.get(`/evolucao/${id}`);
  return response.data;
};

export const getEvolucoesByUsuario = async (idUser) => {
  // Busca o histórico de evolução de um usuário específico
  const response = await api.get(`/evolucao/usuario/${idUser}`);
  return response.data;
};

export const createEvolucao = async (dados) => {
  // Exemplo mínimo:
  // { fkIdUser: 1, dataRegistro: "2025-05-14", pesoRegistrado: 74.50 }
  const response = await api.post('/evolucao', dados);
  return response.data;
};

export const updateEvolucao = async (id, dados) => {
  const response = await api.put(`/evolucao/${id}`, dados);
  return response.data;
};

export const deleteEvolucao = async (id) => {
  const response = await api.delete(`/evolucao/${id}`);
  return response.data;
};
