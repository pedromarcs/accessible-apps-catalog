import api from './api';

// ============================================================
// MODELO - SolicitacoesDeContratacao
// ============================================================
// OBRIGATÓRIOS:
//   fkIdUser: number               ex: 1  (ID do paciente/usuário)
//   fkIdNutri: number              ex: 2  (ID do nutricionista)
//
// OPCIONAIS:
//   dataSolicitacao: string        ex: "2025-05-14"  (yyyy-MM-dd)
//   status: string                 ex: "Pendente" (padrão) | "Aceita" | "Recusada"
// ============================================================

export const getSolicitacoes = async () => {
  const response = await api.get('/solicitacao');
  return response.data;
};

export const getSolicitacaoById = async (id) => {
  const response = await api.get(`/solicitacao/${id}`);
  return response.data;
};

export const createSolicitacao = async (dados) => {
  // Paciente solicita contratar um nutricionista
  // Exemplo: { fkIdUser: 1, fkIdNutri: 2, dataSolicitacao: "2025-05-14" }
  const response = await api.post('/solicitacao', dados);
  return response.data;
};

export const updateSolicitacao = async (id, dados) => {
  // Nutricionista aceita ou recusa: { status: "Aceita" } ou { status: "Recusada" }
  const response = await api.put(`/solicitacao/${id}`, dados);
  return response.data;
};

export const deleteSolicitacao = async (id) => {
  const response = await api.delete(`/solicitacao/${id}`);
  return response.data;
};
