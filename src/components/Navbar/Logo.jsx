const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <img
        src="policia-fundo-transparente.png"
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
  )
}

export default Logo