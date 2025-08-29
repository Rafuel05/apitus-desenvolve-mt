import ApiService from './api';

export const pessoasService = {

  // Buscar pessoas com filtros
  async buscarComFiltros(filters = {}) {
    const queryParams = ApiService.buildQueryParams({
      nome: filters.nome,
      faixaIdadeInicial: filters.faixaIdadeInicial,
      faixaIdadeFinal: filters.faixaIdadeFinal,
      sexo: filters.sexo,
      status: filters.status,
      pagina: filters.pagina || 0,
      porPagina: filters.porPagina || 12,
    });

    return ApiService.request(`/pessoas/aberto/filtro?${queryParams}`);
  },

  // Buscar detalhes de uma pessoa 
  async buscarPorId(id) {
    return ApiService.request(`/pessoas/aberto/${id}`);
  },

  // Enviar informações sobre uma pessoa 
  async enviarInformacoes(id, dados) {
    return ApiService.request(`/pessoas/${id}/informacoes`, {
      method: 'POST',
      body: JSON.stringify(dados),
    });
  }
};