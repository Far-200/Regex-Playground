export function getRegexData(pattern, text, flagsObj) {
  if (!pattern.trim()) {
    return {
      matches: [],
      highlightedParts: text ? [{ text, isMatch: false }] : [],
      error: "",
    };
  }

  const flags = Object.keys(flagsObj)
    .filter((key) => flagsObj[key])
    .join("");

  try {
    const regex = new RegExp(pattern, flags);

    let matches = [];
    let highlightedParts = [];

    if (flags.includes("g")) {
      matches = [...text.matchAll(regex)];
    } else {
      const singleMatch = text.match(regex);
      if (singleMatch) {
        matches = [singleMatch];
      }
    }

    if (matches.length === 0) {
      return {
        matches: [],
        highlightedParts: [{ text, isMatch: false }],
        error: "",
      };
    }

    let lastIndex = 0;

    matches.forEach((match) => {
      const matchText = match[0];
      const start = match.index;
      const end = start + matchText.length;

      if (start > lastIndex) {
        highlightedParts.push({
          text: text.slice(lastIndex, start),
          isMatch: false,
        });
      }

      highlightedParts.push({
        text: matchText,
        isMatch: true,
      });

      lastIndex = end;
    });

    if (lastIndex < text.length) {
      highlightedParts.push({
        text: text.slice(lastIndex),
        isMatch: false,
      });
    }

    return {
      matches,
      highlightedParts,
      error: "",
    };
  } catch (error) {
    return {
      matches: [],
      highlightedParts: [{ text, isMatch: false }],
      error: error.message,
    };
  }
}
