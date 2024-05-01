const Card = ({ title, children }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-md p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-xs font-light text-slate-500">
        For the selected timeframe
      </p>
      <div>{children}</div>
    </div>
  );
};

export default Card;
