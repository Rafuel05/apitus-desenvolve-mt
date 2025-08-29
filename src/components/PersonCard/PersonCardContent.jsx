import PersonInfo from './PersonInfo';
import ClothingInfo from './ClothingInfo';

const PersonCardContent = ({ pessoa }) => {
  return (
    <div className="p-4">
      <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
        {pessoa.nome}
      </h3>
      
      <PersonInfo pessoa={pessoa} />
      
      <ClothingInfo 
        vestimentas={pessoa.ultimaOcorrencia?.ocorrenciaEntrevDesapDTO?.vestimentasDesaparecido}
      />
    </div>
  );
};

export default PersonCardContent;