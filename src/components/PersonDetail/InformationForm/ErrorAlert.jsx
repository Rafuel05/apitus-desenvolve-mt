import { AlertCircle } from 'lucide-react';

const ErrorAlert = ({ error }) => {
  if (!error) return null;

  return (
    <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
      <AlertCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
      <p className="text-red-700">{error}</p>
    </div>
  );
};

export default ErrorAlert;