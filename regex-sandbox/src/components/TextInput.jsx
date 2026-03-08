function TextInput({ text, setText }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        Input Text
      </label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="8"
        placeholder="Paste your test text here..."
        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-slate-500"
      />
    </div>
  );
}

export default TextInput;
