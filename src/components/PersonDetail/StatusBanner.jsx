import { usePessoa } from '../../hooks/usePessoa';

const StatusBanner = ({ pessoa }) => {
  const { isDesaparecido, isVivo, getStatusBadge } = usePessoa(pessoa);
  const statusBadge = getStatusBadge();
  
  return (
    <div className={`p-4 ${statusBadge.className.replace('text-', 'bg-').replace('-800', '-100')}`}>
      <p className={`text-center font-bold ${statusBadge.className}`}>
        {statusBadge.text.toUpperCase()}
      </p>
    </div>
  );
};

export default StatusBanner;