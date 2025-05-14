function GeneratorPanel({ id, data, inspiration, buyGenerator }) {
  const cost = Math.floor(data.baseCost * Math.pow(1.15, data.count));
  const production = (data.rate * data.count).toFixed(1);
  const nextProduction = (data.rate * (data.count + 1)).toFixed(1);
  const canBuy = inspiration >= cost;

  return (
    <div
      className={`p-4 rounded-xl shadow-md border ${
        canBuy ? "border-yellow-500" : "border-gray-700"
      } bg-gradient-to-br from-gray-800 via-gray-900 to-black transition-all duration-200 hover:scale-[1.01]`}
    >
      <div className="flex justify-between items-center">
        {/* Infos du générateur */}
        <div>
          <h3 className="text-lg font-bold text-yellow-300 generator-name-glow">
            {data.name}
          </h3>
          <p className="text-sm text-gray-300">
            {data.count} actif(s) —{" "}
            <span className="text-yellow-400">{production} 💡</span>/s
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Prochain :{" "}
            <span className="text-yellow-500">+{data.rate} 💡/s</span> → Total :{" "}
            {nextProduction}
          </p>
        </div>

        {/* Bouton d'achat */}
        <button
          onClick={() => canBuy && buyGenerator(id)}
          disabled={!canBuy}
          className={`px-4 py-2 text-sm font-semibold rounded-md transition-all  duration-150 ${
            canBuy
              ? "bg-yellow-400 hover:bg-yellow-500 text-black font-semibold buy-button-glow"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
        >
          Acheter ({cost} 💡)
        </button>
      </div>
    </div>
  );
}

export default GeneratorPanel;
