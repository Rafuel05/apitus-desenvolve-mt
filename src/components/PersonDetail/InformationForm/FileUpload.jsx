import { Upload, X } from 'lucide-react';

const FileUpload = ({ arquivos, onFileChange, onRemoveFile }) => {
  return (
    <div className="space-y-4">
      {/* Upload de Arquivos */}
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <Upload className="w-4 h-4 mr-1" />
          Anexar fotos (opcional)
        </label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={onFileChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <p className="text-xs text-gray-500 mt-1">
          Você pode anexar fotos que ajudem a identificar ou localizar a pessoa.
        </p>
      </div>

      {/* Lista de Arquivos Selecionados */}
      {arquivos.length > 0 && (
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">
            Arquivos selecionados:
          </p>
          <div className="space-y-2">
            {arquivos.map((arquivo, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                <span className="text-sm text-gray-700 truncate">{arquivo.name}</span>
                <button
                  type="button"
                  onClick={() => onRemoveFile(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;