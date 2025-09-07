import ApiService from '../api';

export const informacoesService = {
 
  async buscarInformacoes(ocorrenciaId) {
    try {
      const queryParams = ApiService.buildQueryParams({ ocorrenciaId });
      return await ApiService.request(`/ocorrencias/informacoes-desaparecido?${queryParams}`);
    } catch (error) {
      console.error(`Erro ao buscar informações da ocorrência ${ocorrenciaId}:`, error);
      throw error;
    }
  },

  
  async enviarInformacao({ ocoId, informacao, descricao, data }, arquivos = []) {
    try {
      const formData = new FormData();
      
     
      if (arquivos && arquivos.length > 0) {
        arquivos.forEach(arquivo => {
          formData.append('files', arquivo);
        });
      }

      
      const queryParams = ApiService.buildQueryParams({
        informacao,
        descricao: descricao || 'Informação enviada pelo cidadão',
        data,
        ocoId
      });

      const response = await fetch(`${ApiService.BASE_URL}/ocorrencias/informacoes-desaparecido?${queryParams}`, {
        method: 'POST',
        body: formData,
        headers: {
          'accept': '*/*',
        }
      });

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status} - ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao enviar informação:', error);
      throw error;
    }
  }
};