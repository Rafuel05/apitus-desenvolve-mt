import { X } from 'lucide-react';

const FormHeader = ({ onCancel }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold text-gray-900">
        Enviar Informação
      </h2>
      <button
        onClick={onCancel}
        className="text-gray-400 hover:text-gray-600"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FormHeader;