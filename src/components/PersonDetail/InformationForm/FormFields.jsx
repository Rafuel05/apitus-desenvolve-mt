import { MessageCircle, Calendar } from 'lucide-react';

const FormFields = ({ formData, onInputChange }) => {
  return (
    <div className="space-y-6">
      {/* Campo de Informação */}
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <MessageCircle className="w-4 h-4 mr-1" />
          Informação sobre a pessoa *
        </label>
        <textarea
          name="informacao"
          value={formData.informacao}
          onChange={onInputChange}
          placeholder="Descreva onde viu esta pessoa, quando, com quem estava, roupas que vestia, etc."
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          required
        />
      </div>

      {/* Campo de Data */}
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <Calendar className="w-4 h-4 mr-1" />
          Quando você viu esta pessoa? *
        </label>
        <input
          type="date"
          name="data"
          value={formData.data}
          onChange={onInputChange}
          max={new Date().toISOString().split('T')[0]}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      {/* Campo de Descrição (opcional) */}
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <MessageCircle className="w-4 h-4 mr-1" />
          Descrição adicional (opcional)
        </label>
        <input
          type="text"
          name="descricao"
          value={formData.descricao}
          onChange={onInputChange}
          placeholder="Descrição complementar (ex: local específico, circunstâncias)"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );
};

export default FormFields;