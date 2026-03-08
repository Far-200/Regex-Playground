function ResultViewer({ highlightedParts }) {
  if (!highlightedParts.length) {
    return (
      <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-400">
        No result to show yet. Enter a regex pattern and let the chaos begin.
      </div>
    );
  }

  return (
    <div className="min-h-30 whitespace-pre-wrap wrap-break-word rounded-xl border border-slate-800 bg-slate-950 p-4 leading-7 text-slate-200">
      {highlightedParts.map((part, index) =>
        part.isMatch ? (
          <mark
            key={index}
            className="rounded bg-yellow-300 px-1 py-0.5 text-black"
          >
            {part.text}
          </mark>
        ) : (
          <span key={index}>{part.text}</span>
        ),
      )}
    </div>
  );
}

export default ResultViewer;
