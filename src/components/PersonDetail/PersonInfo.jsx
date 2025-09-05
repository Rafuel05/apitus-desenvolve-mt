const PersonInfo = ({ person }) => {
  if (!person) return null;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div>
        <h2 className="text-sm font-medium text-gray-500">Idade</h2>
        <p className="mt-1 text-lg text-gray-900">{person.idade} anos</p>
      </div>
      <div>
        <h2 className="text-sm font-medium text-gray-500">Sexo</h2>
        <p className="mt-1 text-lg text-gray-900">
          {person.sexo === 'MASCULINO' ? 'Masculino' : 'Feminino'}
        </p>
      </div>
      
      {person.ultimaOcorrencia && (
        <>
          <div>
            <h2 className="text-sm font-medium text-gray-500">Data de Desaparecimento</h2>
            <p className="mt-1 text-lg text-gray-900">
              {new Date(person.ultimaOcorrencia.dtDesaparecimento).toLocaleDateString('pt-BR')}
            </p>
          </div>
          
          {person.ultimaOcorrencia.dataLocalizacao && (
            <div>
              <h2 className="text-sm font-medium text-gray-500">Data de Localização</h2>
              <p className="mt-1 text-lg text-gray-900">
                {new Date(person.ultimaOcorrencia.dataLocalizacao).toLocaleDateString('pt-BR')}
              </p>
            </div>
          )}
          
          <div className="md:col-span-2">
            <h2 className="text-sm font-medium text-gray-500">Local de Desaparecimento</h2>
            <p className="mt-1 text-lg text-gray-900">
              {person.ultimaOcorrencia.localDesaparecimentoConcat || 'Não informado'}
            </p>
          </div>
          
          {person.ultimaOcorrencia.ocorrenciaEntrevDesapDTO && (
            <>
              <div className="md:col-span-2">
                <h2 className="text-sm font-medium text-gray-500">Informações Adicionais</h2>
                <p className="mt-1 text-lg text-gray-900">
                  {person.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.informacao || 'Não informado'}
                </p>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-sm font-medium text-gray-500">Vestimentas</h2>
                <p className="mt-1 text-lg text-gray-900">
                  {person.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.vestimentasDesaparecido || 'Não informado'}
                </p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default PersonInfo;