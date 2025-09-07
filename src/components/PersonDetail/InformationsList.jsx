import { useState, useEffect } from 'react';
import { informacoesService } from '../../services/pessoas/informacoesService';
import { Calendar, MessageCircle, Paperclip } from 'lucide-react';

const InformationsList = ({ ocoId }) => {
  const [informacoes, setInformacoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInformacoes = async () => {
      if (!ocoId) return;
      
      try {
        setLoading(true);
        const data = await informacoesService.buscarInformacoes(ocoId);
        // Ordena por data (mais recente primeiro)
        const sortedData = data.sort((a, b) => new Date(b.data) - new Date(a.data));
        setInformacoes(sortedData);
      } catch (err) {
        setError('Erro ao carregar informações');
        console.error('Erro ao buscar informações:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchInformacoes();
  }, [ocoId]);

  if (loading) {
    return (
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Informações Recebidas</h2>
        <div className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Informações Recebidas</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  if (informacoes.length === 0) {
    return (
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Informações Recebidas</h2>
        <div className="text-center py-8 text-gray-500">
          <MessageCircle className="w-12 h-12 mx-auto mb-2 text-gray-300" />
          <p>Nenhuma informação recebida ainda.</p>
          <p className="text-sm">Seja o primeiro a contribuir com informações sobre esta pessoa.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-lg font-medium text-gray-900 mb-4">
        Informações Recebidas ({informacoes.length})
      </h2>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {informacoes.map((info) => (
          <div key={info.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(info.data).toLocaleDateString('pt-BR')}
              </div>
              <span className="text-xs text-gray-400">ID: {info.id}</span>
            </div>
            
            <p className="text-gray-900 mb-3">{info.informacao}</p>
            
            {info.anexos && info.anexos.length > 0 && (
              <div>
                <div className="flex items-center mb-2">
                  <Paperclip className="w-4 h-4 mr-1 text-gray-500" />
                  <span className="text-sm text-gray-500">
                    {info.anexos.length} anexo(s)
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {info.anexos.map((anexo, index) => (
                    <a
                      key={index}
                      href={anexo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-2 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition-colors"
                    >
                      <Paperclip className="w-4 h-4 mr-2" />
                      <span className="text-sm truncate">Anexo {index + 1}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InformationsList;