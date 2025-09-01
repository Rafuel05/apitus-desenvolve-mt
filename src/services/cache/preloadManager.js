import ApiService from '../api';
import { cacheManager } from './cacheManager';

class PreloadManager {
  constructor() {
    this.isPreloading = false;
    this.preloadPromise = null;
    this.LOTE_SIZE = 200;
  }

  async iniciar() {
    if (this.isPreloading || cacheManager.hasData()) {
      return;
    }
    
    this.isPreloading = true;
    
    try {
      this.preloadPromise = this._buscarTodosDados();
      const dados = await this.preloadPromise;
      
      cacheManager.setData(dados, {});
      
    } catch (error) {
      // Falha silenciosa
    } finally {
      this.isPreloading = false;
      this.preloadPromise = null;
    }
  }

  isLoading() {
    return this.isPreloading;
  }

  async aguardar() {
    if (this.preloadPromise) {
      await this.preloadPromise;
    }
  }

  async _buscarTodosDados() {
    let todasAsPessoas = [];
    let paginaAtual = 0;
    let totalPages = 1;

    do {
      try {
        const queryParams = ApiService.buildQueryParams({
          pagina: paginaAtual,
          porPagina: this.LOTE_SIZE,
        });

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
  }
}

export const preloadManager = new PreloadManager();