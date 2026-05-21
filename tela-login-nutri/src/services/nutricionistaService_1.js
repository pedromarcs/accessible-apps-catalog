import api from './api';

// ============================================================
// MODELO - Nutricionista
// ============================================================
// OBRIGATÓRIOS:
//   nomeCompleto: string           ex: "Dra. Ana Lima"
//   emailProfissional: string      ex: "ana@nutri.com"
//   senhaHash: string              ex: "senha123"
//
// OPCIONAIS:
//   crn: string (único)            ex: "CRN3-12345"
//   uf: string (2 chars)           ex: "SP"
//   especialidadePrincipal: string ex: "Nutrição Esportiva"
//   biografia: string              ex: "Especialista em..."
//   avaliacaoMedia: number         ex: 4.80  (padrão: 0)
//   totalPacientes: number         ex: 15    (padrão: 0)
// ============================================================

export const getNutricionistas = async () => {
  const response = await api.get('/nutricionista');
  return response.data;
};

export const getNutricionistaById = async (id) => {
  const response = await api.get(`/nutricionista/${id}`);
  return response.data;
};

export const createNutricionista = async (dados) => {
  // Exemplo mínimo:
  // { nomeCompleto: "Dra. Ana", emailProfissional: "ana@nutri.com", senhaHash: "123456" }
  const response = await api.post('/nutricionista', dados);
  return response.data;
};

export const updateNutricionista = async (id, dados) => {
  const atual = await getNutricionistaById(id);
  const response = await api.put(`/nutricionista/${id}`, {
    idNutri: atual.idNutri,
    nomeCompleto: dados.nomeCompleto ?? atual.nomeCompleto,
    emailProfissional: dados.emailProfissional ?? atual.emailProfissional,
    senhaHash: dados.senhaHash ?? atual.senhaHash,
    crn: dados.crn ?? atual.crn,
    uf: dados.uf ?? atual.uf,
    especialidadePrincipal: dados.especialidadePrincipal ?? atual.especialidadePrincipal,
    biografia: dados.biografia ?? atual.biografia,
    avaliacaoMedia: dados.avaliacaoMedia ?? atual.avaliacaoMedia,
    totalPacientes: dados.totalPacientes ?? atual.totalPacientes,
  });
  return response.data;
};

export const deleteNutricionista = async (id) => {
  const response = await api.delete(`/nutricionista/${id}`);
  return response.data;
};
