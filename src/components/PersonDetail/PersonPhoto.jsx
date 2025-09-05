const PersonPhoto = ({ urlFoto, nome }) => {
  return (
    <div className="md:w-1/3 p-6">
      {urlFoto ? (
        <img 
          src={urlFoto} 
          alt={nome} 
          className="w-full h-auto object-cover rounded-lg shadow"
        />
      ) : (
        <div className="bg-gray-200 rounded-lg flex items-center justify-center h-64">
          <p className="text-gray-500">Sem foto disponível</p>
        </div>
      )}
    </div>
  );
};

export default PersonPhoto;