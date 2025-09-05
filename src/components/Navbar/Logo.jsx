import { Link } from 'react-router-dom';
import logoImage from '../../assets/policia-fundo-transparente.png'; // Ajuste o caminho conforme necessário

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center space-x-3">
        
          <img
            src={logoImage}
            alt="Logo Polícia Judiciária Civil"
            className="w-20 h-20 object-contain"
          />
        
        <div className="hidden sm:block">
          <span className="text-white text-lg font-bold">
            Polícia Judiciária Civil
          </span>
          <p className="text-gray-300 text-xs hidden sm:block">
            Estado de Mato Grosso
          </p>
        </div>
        
      </div>
    </Link>
  )
}

export default Logo