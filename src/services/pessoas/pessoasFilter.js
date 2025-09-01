export const pessoasFilter = {
  
  isLocalizada(pessoa) {
    const dataLocalizacao = pessoa.ultimaOcorrencia?.dataLocalizacao;
    return dataLocalizacao && 
           dataLocalizacao.trim() !== '' && 
           dataLocalizacao !== 'null' &&
           dataLocalizacao !== '0000-00-00';
  },

  porStatus(pessoas, status) {
    if (!status) return pessoas;
    
    return pessoas.filter(pessoa => {
      const localizada = this.isLocalizada(pessoa);
      return status === 'LOCALIZADO' ? localizada : !localizada;
    });
  },

  paginar(pessoas, pagina = 0, porPagina = 12) {
    const inicio = pagina * porPagina;
    const fim = inicio + porPagina;
    
    return {
      dados: pessoas.slice(inicio, fim),
      totalPages: Math.ceil(pessoas.length / porPagina),
      totalElements: pessoas.length
    };
  }
};