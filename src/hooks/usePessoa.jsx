export const usePessoa = (pessoa) => {
  const isDesaparecido = !pessoa.ultimaOcorrencia?.dataLocalizacao;
  const isVivo = pessoa.vivo;
  
  const getStatusBadge = () => {
    if (isDesaparecido) {
      return {
        text: 'Desaparecido',
        className: 'bg-red-100 text-red-800'
      };
    } else {
      return {
        text: 'Localizado',
        className: 'bg-green-100 text-green-800'
      };
    }
  };

  const getCardBorderClass = () => {
    return isDesaparecido ? 'border-red-200' : 'border-green-200';
  };

  return {
    isDesaparecido,
    isVivo,
    getStatusBadge,
    getCardBorderClass
  };
};