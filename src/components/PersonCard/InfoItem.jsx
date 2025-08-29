const InfoItem = ({ icon: Icon, children, className = "" }) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <Icon className="w-4 h-4" />
      <span>{children}</span>
    </div>
  );
};

export default InfoItem;