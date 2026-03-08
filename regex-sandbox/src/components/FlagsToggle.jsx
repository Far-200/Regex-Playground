function FlagsToggle({ flags, setFlags }) {
  const toggleFlag = (flag) => {
    setFlags((prev) => ({
      ...prev,
      [flag]: !prev[flag],
    }));
  };

  const flagDescriptions = {
    g: "Global search (find all matches)",
    i: "Case insensitive (ignore upper/lowercase)",
    m: "Multiline mode (^ and $ work per line)",
  };

  return (
    <div>
      <p className="mb-2 text-sm font-medium text-slate-300">Flags</p>

      <div className="flex gap-4">
        {["g", "i", "m"].map((flag) => (
          <button
            key={flag}
            title={flagDescriptions[flag]} // 👈 tooltip
            onClick={() => toggleFlag(flag)}
            className={`rounded-xl border px-5 py-3 text-lg font-semibold transition cursor-pointer ${
              flags[flag]
                ? "border-emerald-500 bg-emerald-500/20 text-emerald-300"
                : "border-slate-700 bg-slate-950 text-slate-300 hover:border-slate-500"
            }`}
          >
            {flag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FlagsToggle;
