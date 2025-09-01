# APITUS: Sistema de Consulta de Pessoas Desaparecidas - MT

Sistema web desenvolvido para consulta e visualização de dados de pessoas desaparecidas no estado de Mato Grosso, utilizando a API de testes pública do governo estadual.

##  Tecnologias Utilizadas
- **React 18** - Biblioteca principal para interface
- **Vite** - Build tool e desenvolvimento
- **Tailwind CSS** - Framework de estilos
- **Lucide React** - Biblioteca de ícones
- **React Router DOM** - Roteamento de páginas

## Observações Técnicas Importantes

### Inconsistência na API Identificada

Durante o desenvolvimento, foi identificada uma inconsistência nos endpoints de filtro da API:

- **Problema**: Alguns registros aparecem no filtro de "desaparecidos" mesmo tendo `dataLocalizacao` preenchida
- **Casos identificados**: 6 registros com comportamento anômalo
- **Solução implementada**: Utilização do campo `dataLocalizacao` como fonte única da verdade

#### Exemplos de Inconsistência:
```json
// Pessoa aparece como "desaparecida" no filtro, mas tem dataLocalizacao
{
  "id": 2217,
  "nome": "JOÉ CARLOS DA SILVA",
  "ultimaOcorrencia": {
    "dataLocalizacao": "2025-01-30", // ← Tem data de localização
    // ... mas aparece no filtro de desaparecidos
  }
}
```

#### Estratégia de Tratamento:
1. **Status Real**: Determinado exclusivamente pelo campo `dataLocalizacao`
2. **Filtro Client-side**: Aplicado sobre os dados retornados para garantir consistência
3. **Destaque Visual**: Implementado conforme status real, não conforme filtro da API

Esta abordagem garante que o usuário final veja informações precisas e consistentes.