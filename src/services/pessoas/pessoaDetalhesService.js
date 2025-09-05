import ApiService from '../api';

export const pessoaDetalhesService = {
  async getPessoaById(id) {
    try {
      return await ApiService.request(`/pessoas/${id}`);
    } catch (error) {
      console.error(`Erro ao buscar detalhes da pessoa com ID ${id}:`, error);
      throw error;
    }
  }
};