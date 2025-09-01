import ApiService from '../api';
import { cacheManager } from '../cache/cacheManager';
import { preloadManager } from '../cache/preloadManager';
import { pessoasFilter } from './pessoasFilter';
import { pessoasStats } from './pessoasStats';

export const pessoasService = {

  async iniciarPreload() {
    return preloadManager.iniciar();
  },

  temDadosDisponiveis() {
    return cacheManager.hasData() || preloadManager.isLoading();
  },

  async buscarComFiltros(filters = {}) {
    const { status, ...outrosFiltros } = filters;
    
    if (!status) {
      return this._buscarDireto(outrosFiltros);
    }

    return this._buscarComCache(filters);
  },

  async _buscarDireto(filtros) {
    const queryParams = ApiService.buildQueryParams({
      nome: filtros.nome,
      faixaIdadeInicial: filtros.faixaIdadeInicial,
      faixaIdadeFinal: filtros.faixaIdadeFinal,
      sexo: filtros.sexo,
      pagina: filtros.pagina || 0,
      porPagina: filtros.porPagina || 12,
    });

    return await ApiService.request(`/pessoas/aberto/filtro?${queryParams}`);
  },

  async _buscarComCache(filters) {
    const { status, ...outrosFiltros } = filters;
    let todasAsPessoas = [];
    
    if (cacheManager.isValid(filters)) {
      todasAsPessoas = cacheManager.getData();
    }
    else if (preloadManager.isLoading()) {
      await preloadManager.aguardar();
      todasAsPessoas = cacheManager.getData() || [];
    }
    else {
      todasAsPessoas = await this._buscarTodosDados(outrosFiltros);
      cacheManager.setData(todasAsPessoas, filters);
    }

    const pessoasFiltradas = pessoasFilter.porStatus(todasAsPessoas, status);
    const resultado = pessoasFilter.paginar(
      pessoasFiltradas, 
      outrosFiltros.pagina || 0, 
      outrosFiltros.porPagina || 12
    );

    const totalDesaparecidos = todasAsPessoas.filter(p => !pessoasFilter.isLocalizada(p)).length;
    const totalLocalizados = todasAsPessoas.filter(p => pessoasFilter.isLocalizada(p)).length;

    return {
      content: resultado.dados,
      totalElements: resultado.totalElements,
      totalPages: resultado.totalPages,
      pageable: {
        pageNumber: outrosFiltros.pagina || 0,
        pageSize: outrosFiltros.porPagina || 12
      },
      first: (outrosFiltros.pagina || 0) === 0,
      last: (outrosFiltros.pagina || 0) === resultado.totalPages - 1,
      numberOfElements: resultado.dados.length,
      fromCache: cacheManager.isValid(filters) || preloadManager.isLoading(),
      _metadata: {
        totalPessoas: todasAsPessoas.length,
        totalDesaparecidos,
        totalLocalizados,
        percentualLocalizados: todasAsPessoas.length > 0 ? Math.round((totalLocalizados / todasAsPessoas.length) * 100) : 0
      }
    };
  },

  async _buscarTodosDados(filtros) {
    let todasAsPessoas = [];
    const LOTE_SIZE = 200;
    let paginaAtual = 0;
    let totalPages = 1;
    
    do {
      const queryParams = ApiService.buildQueryParams({
        nome: filtros.nome,
        faixaIdadeInicial: filtros.faixaIdadeInicial,
        faixaIdadeFinal: filtros.faixaIdadeFinal,
        sexo: filtros.sexo,
        pagina: paginaAtual,
        porPagina: LOTE_SIZE,
      });

      try {
        const response = await ApiService.request(`/pessoas/aberto/filtro?${queryParams}`);
        
        if (response.content) {
          todasAsPessoas = [...todasAsPessoas, ...response.content];
          totalPages = response.totalPages;
        }
        
        paginaAtual++;
      } catch (error) {
        break;
      }
    } while (paginaAtual < totalPages);

    return todasAsPessoas;
  },

  clearCache() {
    cacheManager.clear();
  },

  async obterEstatisticas() {
    return pessoasStats.obterEstatisticas();
  }
};