import PersonAvatar from './PersonAvatar';
import PersonCardContent from './PersonCardContent';
import { usePessoa } from '../../hooks/usePessoa';

const PersonCard = ({ pessoa, onClick }) => {
  const { isVivo, getStatusBadge, getCardBorderClass } = usePessoa(pessoa);
  const statusBadge = getStatusBadge();

  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden border-2 ${getCardBorderClass()} hover:shadow-lg transition-shadow cursor-pointer`}
      onClick={() => onClick && onClick(pessoa)}
    >
      <PersonAvatar 
        pessoa={pessoa} 
        statusBadge={statusBadge} 
        isVivo={isVivo} 
      />
      <PersonCardContent pessoa={pessoa} />
    </div>
  );
};

export default PersonCard;