import api from './api';

// ============================================================
// MODELO - VinculoNutriPaciente
// ============================================================
// OBRIGATÓRIOS:
//   fkIdUser: number               ex: 1  (ID do paciente)
//   fkIdNutri: number              ex: 2  (ID do nutricionista)
//
// OPCIONAIS:
//   fkIdSolicitacao: number        ex: 5  (ID da solicitação de origem)
//   dataSolicitacao: string        ex: "2025-05-14"  (yyyy-MM-dd)
//   dataAprovacao: string          ex: "2025-05-15"  (yyyy-MM-dd)
//   status: string                 ex: "Pendente" (padrão) | "Ativo" | "Encerrado"
// ============================================================

export const getVinculos = async () => {
  const response = await api.get('/vinculo');
  return response.data;
};

export const getVinculoById = async (id) => {
  const response = await api.get(`/vinculo/${id}`);
  return response.data;
};

export const createVinculo = async (dados) => {
  // Cria o vínculo entre paciente e nutricionista após solicitação aceita
  // Exemplo: { fkIdUser: 1, fkIdNutri: 2, fkIdSolicitacao: 5, dataSolicitacao: "2025-05-14" }
  const response = await api.post('/vinculo', dados);
  return response.data;
};

export const updateVinculo = async (id, dados) => {
  // Atualizar status: { status: "Ativo", dataAprovacao: "2025-05-15" }
  const response = await api.put(`/vinculo/${id}`, dados);
  return response.data;
};

export const deleteVinculo = async (id) => {
  const response = await api.delete(`/vinculo/${id}`);
  return response.data;
};
