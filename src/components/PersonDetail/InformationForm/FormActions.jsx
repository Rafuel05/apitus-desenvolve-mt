import { Send } from 'lucide-react';

const FormActions = ({ loading, onCancel }) => {
  return (
    <div className="flex gap-4 pt-4">
      <button
        type="button"
        onClick={onCancel}
        className="flex-1 px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
      >
        Cancelar
      </button>
      <button
        type="submit"
        disabled={loading}
        className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? (
          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
        ) : (
          <Send className="w-4 h-4 mr-2" />
        )}
        Enviar Informação
      </button>
    </div>
  );
};

export default FormActions;