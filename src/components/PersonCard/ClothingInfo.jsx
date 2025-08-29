const ClothingInfo = ({ vestimentas }) => {
  if (!vestimentas) return null;

  return (
    <div className="mt-3 pt-3 border-t border-gray-200">
      <p className="text-xs text-gray-500 font-medium">Vestimentas:</p>
      <p className="text-sm text-gray-700 line-clamp-2">
        {vestimentas}
      </p>
    </div>
  );
};

export default ClothingInfo;