function RegexInput({ pattern, setPattern, hasError }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="block text-sm font-medium text-slate-300">
          Regex Pattern
        </label>

        <button
          onClick={() => setPattern("")}
          className="rounded-lg border border-slate-600 px-3 py-2 text-sm text-slate-300 transition hover:border-slate-500 hover:text-white cursor-pointer"
        >
          Clear
        </button>
      </div>

      <input
        type="text"
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
        placeholder="Enter regex pattern..."
        className={`w-full rounded-xl border px-4 py-3 text-white outline-none transition
  ${
    hasError
      ? "border-red-500 bg-red-950"
      : "border-slate-700 bg-slate-950 focus:border-slate-500"
  }`}
      />
    </div>
  );
}

export default RegexInput;
