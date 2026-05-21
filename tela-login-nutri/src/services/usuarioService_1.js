import api from './api';

export const getUsuarios = async () => {
  const response = await api.get('/usuario');
  return response.data;
};

export const getUsuarioById = async (id) => {
  const response = await api.get(`/usuario/${id}`);
  return response.data;
};

export const createUsuario = async (dados) => {
  // Exemplo mínimo:
  // { nomeCompleto: "João", email: "joao@email.com", senhaHash: "123456" }
  const response = await api.post('/usuario', dados);
  return response.data;
};

const montarUsuarioPayload = (atual, dados) => {
  const novosDados = {
    ...dados,
    pesoMeta: dados.pesoMeta ?? dados.metaPeso,
    rotinaAtividade: dados.rotinaAtividade ?? dados.rotina,
    restricoesReligiosas: dados.restricoesReligiosas ?? dados.restricaoAlimentar,
  };

  return {
    idUser: atual.idUser,
    nomeCompleto: novosDados.nomeCompleto ?? atual.nomeCompleto,
    email: novosDados.email ?? atual.email,
    senhaHash: novosDados.senhaHash ?? atual.senhaHash,
    dataNascimento: novosDados.dataNascimento ?? atual.dataNascimento,
    status: novosDados.status ?? atual.status,
    tipoDieta: novosDados.tipoDieta ?? atual.tipoDieta,
    alergias: novosDados.alergias ?? atual.alergias,
    restricoesReligiosas: novosDados.restricoesReligiosas ?? atual.restricoesReligiosas,
    objetivoSaude: novosDados.objetivoSaude ?? atual.objetivoSaude,
    rotinaAtividade: novosDados.rotinaAtividade ?? atual.rotinaAtividade,
    pesoAtual: novosDados.pesoAtual ?? atual.pesoAtual,
    pesoInicial: novosDados.pesoInicial ?? atual.pesoInicial,
    pesoMeta: novosDados.pesoMeta ?? atual.pesoMeta,
    altura: novosDados.altura ?? atual.altura,
  };
};

export const updateUsuario = async (id, dados) => {
  const atual = await getUsuarioById(id);
  const response = await api.put(`/usuario/${id}`, montarUsuarioPayload(atual, dados));
  return response.data;
};

export const deleteUsuario = async (id) => {
  const response = await api.delete(`/usuario/${id}`);
  return response.data;
};
