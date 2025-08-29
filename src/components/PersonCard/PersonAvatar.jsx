import { User } from 'lucide-react';
import StatusBadge from './StatusBadge';

const PersonAvatar = ({ pessoa, statusBadge, isVivo }) => {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  };

  return (
    <div className="aspect-square bg-gray-200 relative">
      {pessoa.urlFoto ? (
        <img
          src={pessoa.urlFoto}
          alt={`Foto de ${pessoa.nome}`}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      ) : null}
      
      <div 
        className={`absolute inset-0 flex items-center justify-center ${pessoa.urlFoto ? 'hidden' : 'flex'}`}
        style={{ display: pessoa.urlFoto ? 'none' : 'flex' }}
      >
        <User className="w-16 h-16 text-gray-400" />
      </div>
      
      
      <div className="absolute top-2 left-2">
        <StatusBadge text={statusBadge.text} className={statusBadge.className} />
      </div>
      
      
      {!isVivo && (
        <div className="absolute top-2 right-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-800 text-white">
            †
          </span>
        </div>
      )}
    </div>
  );
};

export default PersonAvatar;