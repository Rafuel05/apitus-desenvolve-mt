import { Calendar, MapPin, User } from 'lucide-react';
import InfoItem from './InfoItem';
import { formatDate, formatAge } from '../../utils/formatters';

const PersonInfo = ({ pessoa }) => {
  return (
    <div className="space-y-2 text-sm text-gray-600">
      
      <InfoItem icon={User}>
        {formatAge(pessoa.idade)} • {pessoa.sexo}
      </InfoItem>

      
      <InfoItem icon={Calendar}>
        {formatDate(pessoa.ultimaOcorrencia?.dtDesaparecimento)}
      </InfoItem>

      
      {pessoa.ultimaOcorrencia?.localDesaparecimentoConcat && (
        <InfoItem icon={MapPin}>
          <span className="line-clamp-1">
            {pessoa.ultimaOcorrencia.localDesaparecimentoConcat}
          </span>
        </InfoItem>
      )}
    </div>
  );
};

export default PersonInfo;