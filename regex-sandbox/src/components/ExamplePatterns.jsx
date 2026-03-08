function ExamplePatterns({ setPattern, setText }) {
  const examples = [
    {
      label: "Emails",
      pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,}",
      text: "Contact us at farhaan@gmail.com or support@yahoo.com",
    },
    {
      label: "URLs",
      pattern: "https?:\\/\\/[^\\s]+",
      text: "Visit https://google.com and http://example.org for testing",
    },
    {
      label: "Numbers",
      pattern: "\\d+",
      text: "Order 123, room 45, pin 9999",
    },
    {
      label: "Phone",
      pattern: "\\d{10}",
      text: "Call 9876543210 or 9123456780 tomorrow",
    },
    {
      label: "Dates",
      pattern: "\\b\\d{2}[-\\/]\\d{2}[-\\/]\\d{4}\\b",
      text: "Important dates: 12/03/2026, 25-12-2025, and 01/01/2027",
    },
  ];

  return (
    <div>
      <p className="mb-3 text-sm font-medium text-slate-300">
        Example Patterns
      </p>

      <div className="flex flex-wrap gap-3">
        {examples.map((example) => (
          <button
            key={example.label}
            onClick={() => {
              setPattern(example.pattern);
              setText(example.text);
            }}
            className="cursor-pointer rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
          >
            {example.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ExamplePatterns;
