import { useState } from 'react';

const SearchSection = ({ onSearch, isLoading }) => {
  const [filters, setFilters] = useState({
    nome: '',
    faixaIdadeInicial: '',
    faixaIdadeFinal: '',
    sexo: '',
    status: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  const handleClear = () => {
    setFilters({
      nome: '',
      faixaIdadeInicial: '',
      faixaIdadeFinal: '',
      sexo: '',
      status: ''
    });
    onSearch({});
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Nome */}
          <div>
            <label htmlFor="nome" className="block text-xs font-medium text-gray-700 mb-1">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={filters.nome}
              onChange={handleInputChange}
              placeholder="Digite o nome..."
              className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Faixa Etária Inicial */}
          <div>
            <label htmlFor="faixaIdadeInicial" className="block text-xs font-medium text-gray-700 mb-1">
              Idade Min.
            </label>
            <input
              type="number"
              id="faixaIdadeInicial"
              name="faixaIdadeInicial"
              value={filters.faixaIdadeInicial}
              onChange={handleInputChange}
              min="0"
              max="120"
              placeholder="Ex: 18"
              className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Faixa Etária Final */}
          <div>
            <label htmlFor="faixaIdadeFinal" className="block text-xs font-medium text-gray-700 mb-1">
              Idade Máx.
            </label>
            <input
              type="number"
              id="faixaIdadeFinal"
              name="faixaIdadeFinal"
              value={filters.faixaIdadeFinal}
              onChange={handleInputChange}
              min="0"
              max="120"
              placeholder="Ex: 65"
              className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Sexo */}
          <div>
            <label htmlFor="sexo" className="block text-xs font-medium text-gray-700 mb-1">
              Sexo
            </label>
            <select
              id="sexo"
              name="sexo"
              value={filters.sexo}
              onChange={handleInputChange}
              className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todos</option>
              <option value="MASCULINO">Masculino</option>
              <option value="FEMININO">Feminino</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-xs font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={filters.status}
              onChange={handleInputChange}
              className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todos</option>
              <option value="DESAPARECIDO">Desaparecido</option>
              <option value="LOCALIZADO">Localizado</option>
            </select>
          </div>
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-blue-600 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Buscando...' : 'Buscar'}
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="flex-1 bg-gray-500 text-white px-4 py-2 text-sm rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
          >
            Limpar Filtros
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchSection;