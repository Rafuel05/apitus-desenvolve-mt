import { cacheManager } from '../cache/cacheManager';
import { pessoasFilter } from './pessoasFilter';

export const pessoasStats = {

  async obterEstatisticas() {
    const dados = cacheManager.getData();
    
    if (!dados) return null;

    const totalPessoas = dados.length;
    const totalDesaparecidos = dados.filter(p => !pessoasFilter.isLocalizada(p)).length;
    const totalLocalizados = dados.filter(p => pessoasFilter.isLocalizada(p)).length;
    const percentualLocalizados = totalPessoas > 0 ? Math.round((totalLocalizados / totalPessoas) * 100) : 0;

    return {
      totalPessoas,
      totalDesaparecidos,
      totalLocalizados,
      percentualLocalizados,
      percentualDesaparecidos: 100 - percentualLocalizados
    };
  }
};