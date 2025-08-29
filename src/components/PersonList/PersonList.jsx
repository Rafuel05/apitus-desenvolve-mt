import { useState, useEffect } from 'react';
import { pessoasService } from '../../services';
import PersonCard from '../PersonCard';
import Pagination from '../Pagination/Pagination';
import { AlertCircle, Users, Loader2 } from 'lucide-react';

const PersonList = ({ filters }) => {
  const [pessoas, setPessoas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  const loadPessoas = async (page = 0, searchFilters = {}) => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await pessoasService.buscarComFiltros({
        ...searchFilters,
        pagina: page,
        porPagina: 12
      });

      setPessoas(data.content || []);
      setTotalPages(data.totalPages || 0);
      setTotalElements(data.totalElements || 0);
      setCurrentPage(page);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPessoas(0, filters);
  }, [filters]);

  const handlePageChange = (page) => {
    loadPessoas(page, filters);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePersonClick = (pessoa) => {
    console.log('Clicou na pessoa:', pessoa);
  };

  if (loading && pessoas.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600 mb-4" />
        <p className="text-gray-600">Carregando pessoas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Erro ao carregar dados</h3>
        <p className="text-gray-600 mb-4 text-center">
          Ocorreu um erro ao buscar as informações: {error}
        </p>
        <button
          onClick={() => loadPessoas(currentPage, filters)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  if (pessoas.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Users className="w-12 h-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Nenhuma pessoa encontrada</h3>
        <p className="text-gray-600 text-center">
          Não foram encontradas pessoas com os filtros aplicados. Tente ajustar os critérios de busca.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header com contadores */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Pessoas {filters.status === 'DESAPARECIDO' ? 'Desaparecidas' : filters.status === 'LOCALIZADO' ? 'Localizadas' : ''}
          </h2>
          <p className="text-gray-600">
            {totalElements} {totalElements === 1 ? 'pessoa encontrada' : 'pessoas encontradas'}
          </p>
        </div>
        
        {loading && (
          <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
        )}
      </div>

      {/* Grid de cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {pessoas.map((pessoa) => (
          <PersonCard
            key={pessoa.id}
            pessoa={pessoa}
            onClick={handlePersonClick}
          />
        ))}
      </div>

      {/* Paginação */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          isLoading={loading}
        />
      )}
    </div>
  );
};

export default PersonList;