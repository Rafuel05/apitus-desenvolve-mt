import VideoBackground from './VideoBackground';
import SearchSection from './SearchSection';

const HeroSection = ({ onSearch, isLoading }) => {
  return (
    <div className="relative h-96 overflow-hidden">
      <VideoBackground />
      
      {/* Conteúdo sobreposto */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              Apitus
            </h1>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              Sistema de consulta e colaboração para localização de pessoas desaparecidas no estado de Mato Grosso
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <SearchSection onSearch={onSearch} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;