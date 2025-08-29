export const formatDate = (dateString) => {
  if (!dateString) return 'Data não informada';
  return new Date(dateString).toLocaleDateString('pt-BR');
};

export const formatAge = (idade) => {
  return idade > 0 ? `${idade} anos` : 'Idade não informada';
};