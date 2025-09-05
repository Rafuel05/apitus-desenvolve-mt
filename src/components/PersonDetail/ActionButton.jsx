const ActionButton = ({ onClick }) => {
  return (
    <div className="mt-8">
      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150"
        onClick={onClick}
      >
        Enviar Informações Sobre Esta Pessoa
      </button>
    </div>
  );
};

export default ActionButton;