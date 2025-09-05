const PostersList = ({ listaCartaz = [] }) => {
  if (!listaCartaz || listaCartaz.length === 0) return null;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-medium text-gray-900 mb-2">Cartazes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {listaCartaz.map((cartaz, index) => (
          <a 
            key={index}
            href={cartaz.urlCartaz}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-50 text-blue-700 py-2 px-4 rounded hover:bg-blue-100 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Baixar cartaz {cartaz.tipoCartaz}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PostersList;