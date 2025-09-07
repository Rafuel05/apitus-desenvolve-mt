import { useState } from 'react';
import { informacoesService } from '../../../services/pessoas/informacoesService';
import FormHeader from './FormHeader';
import FormFields from './FormFields';
import FileUpload from './FileUpload';
import FormActions from './FormActions';
import FormFooter from './FormFooter';
import ErrorAlert from './ErrorAlert';

const InformationForm = ({ ocoId, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    informacao: '',
    descricao: '',
    data: new Date().toISOString().split('T')[0]
  });
  const [arquivos, setArquivos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setArquivos(prev => [...prev, ...files]);
  };

  const handleRemoveFile = (index) => {
    setArquivos(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.informacao.trim()) {
      setError('Por favor, informe o que você viu ou sabe sobre esta pessoa.');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      await informacoesService.enviarInformacao(
        {
          ocoId,
          ...formData
        },
        arquivos
      );

      // Reset form
      setFormData({
        informacao: '',
        descricao: '',
        data: new Date().toISOString().split('T')[0]
      });
      setArquivos([]);
      
      if (onSuccess) {
        onSuccess();
      }
      
    } catch (err) {
      setError('Erro ao enviar informação. Por favor, tente novamente.');
      console.error('Erro ao enviar informação:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <FormHeader onCancel={onCancel} />
          
          <ErrorAlert error={error} />

          <form onSubmit={handleSubmit} className="space-y-6">
            <FormFields 
              formData={formData} 
              onInputChange={handleInputChange} 
            />

            <FileUpload
              arquivos={arquivos}
              onFileChange={handleFileChange}
              onRemoveFile={handleRemoveFile}
            />

            <FormActions 
              loading={loading} 
              onCancel={onCancel} 
            />
          </form>

          <FormFooter />
        </div>
      </div>
    </div>
  );
};

export default InformationForm;