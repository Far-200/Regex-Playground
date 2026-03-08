import { useMemo, useState } from "react";
import RegexInput from "./components/RegexInput";
import TextInput from "./components/TextInput";
import FlagsToggle from "./components/FlagsToggle";
import ResultViewer from "./components/ResultViewer";
import ExamplePatterns from "./components/ExamplePatterns";
import { getRegexData } from "./utils/regexUtils";

function App() {
  const [pattern, setPattern] = useState("");
  const [text, setText] = useState("");
  const [flags, setFlags] = useState({
    g: true,
    i: false,
    m: false,
  });

  const regexData = useMemo(() => {
    return getRegexData(pattern, text, flags);
  }, [pattern, text, flags]);

  const handleCopyMatches = async () => {
    const matchedText = regexData.matches.map((m) => m[0]).join("\n");

    if (!matchedText) return;

    try {
      await navigator.clipboard.writeText(matchedText);
      alert("Matches copied!");
    } catch (error) {
      alert("Failed to copy matches.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Regex Playground
          </h1>
          <p className="mt-2 text-slate-400">
            Test patterns, toggle flags, and watch matches light up like your
            exam anxiety.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg">
            <RegexInput
              pattern={pattern}
              setPattern={setPattern}
              hasError={!!regexData.error}
            />

            <div className="mt-5">
              <FlagsToggle flags={flags} setFlags={setFlags} />
            </div>

            <div className="mt-5">
              <ExamplePatterns setPattern={setPattern} setText={setText} />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg">
            <TextInput text={text} setText={setText} />
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-semibold">Results</h2>

              <div className="flex items-center gap-3">
                <div className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
                  Matches Found:{" "}
                  <span className="font-bold text-white">
                    {regexData.matches.length}
                  </span>
                </div>

                <button
                  onClick={handleCopyMatches}
                  disabled={regexData.matches.length === 0}
                  className="cursor-pointer rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Copy Matches
                </button>
              </div>
            </div>

            {regexData.error ? (
              <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-red-300">
                ⚠ Invalid Regex: {regexData.error}
              </div>
            ) : (
              <>
                <ResultViewer highlightedParts={regexData.highlightedParts} />

                <div className="mt-4">
                  <h3 className="mb-2 text-sm text-slate-400">
                    Matched Values
                  </h3>

                  {regexData.matches.length > 0 ? (
                    <ul className="space-y-2 text-sm">
                      {regexData.matches.map((m, i) => (
                        <li
                          key={i}
                          className="rounded-lg bg-slate-800 px-3 py-2 font-mono text-slate-200"
                        >
                          {m[0]}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-400">
                      No matches found.
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
