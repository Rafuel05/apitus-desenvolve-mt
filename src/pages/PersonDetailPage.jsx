import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { pessoaDetalhesService } from '../services/pessoas/pessoaDetalhesService';
import Navbar from '../components/Navbar/Navbar';
import StatusBanner from '../components/PersonDetail/StatusBanner';
import PersonPhoto from '../components/PersonDetail/PersonPhoto';
import PersonInfo from '../components/PersonDetail/PersonInfo';
import PostersList from '../components/PersonDetail/PostersList';
import ActionButton from '../components/PersonDetail/ActionButton';
import InformationsList from '../components/PersonDetail/InformationsList';
import InformationForm from '../components/PersonDetail/InformationForm';

function PersonDetailPage() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchPersonDetails = async () => {
      try {
        setLoading(true);
        const data = await pessoaDetalhesService.getPessoaById(id);
        setPerson(data);
      } catch (err) {
        setError('Erro ao carregar dados da pessoa. Por favor, tente novamente.');
        console.error('Erro ao buscar detalhes da pessoa:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonDetails();
  }, [id]);

  const handleSendInfo = () => {
    setShowForm(true);
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setRefreshKey(prev => prev + 1); // Force refresh das informações
    // Mostrar mensagem de sucesso
    alert('Informação enviada com sucesso! Obrigado por sua contribuição.');
  };

  const handleFormCancel = () => {
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-700">{error}</p>
            <p className="text-gray-600 mt-2">
              Clique no logo para voltar à página inicial.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!person) return null;

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            {/* Status Banner */}
            <StatusBanner pessoa={person} />
            
            {/* Conteúdo */}
            <div className="md:flex">
              {/* Foto */}
              <PersonPhoto urlFoto={person.urlFoto} nome={person.nome} />
              
              {/* Detalhes */}
              <div className="md:w-2/3 p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">{person.nome}</h1>
                
                <PersonInfo person={person} />

                {/* Cartazes */}
                {person.ultimaOcorrencia && (
                  <PostersList listaCartaz={person.ultimaOcorrencia.listaCartaz} />
                )}
                
                {/* Botão de ação */}
                <ActionButton onClick={handleSendInfo} />

                {/* Lista de informações */}
                {person.ultimaOcorrencia && (
                  <InformationsList 
                    key={refreshKey}
                    ocoId={person.ultimaOcorrencia.ocoId} 
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal do formulário */}
      {showForm && person.ultimaOcorrencia && (
        <InformationForm
          ocoId={person.ultimaOcorrencia.ocoId}
          onSuccess={handleFormSuccess}
          onCancel={handleFormCancel}
        />
      )}
    </>
  );
}

export default PersonDetailPage;