const reBot = /((Google|Apple|bing|linkedin|duckduck|Yandex)bot|Yahoo|Baiduspider|Teoma|Slurp|google-structured-data-testing-tool)/i;

export const isNullOrUndefined = (elem: any): boolean => {
  return !!(elem === null || elem === undefined);
};

export const isBot = (userAgent?: string): boolean => {
  let uA = userAgent || "";

  if (!uA && typeof window !== "undefined") {
    uA = window?.navigator?.userAgent || "";
  }

  return reBot.test(uA);
};

export const sliceMetaDescription = (text: string, maxLength = 160, ellipsisText = "..."): string => {
  if (text) {
    if (text.length >= maxLength) {
      const result = [],
        words = text.trim().split(" "),
        ellipsisLength = ellipsisText.length;

      for (let i = 0, totalChars = 0, len = words.length; i < len; i++) {
        const word = words[i],
          wordLength = word.length;

        if (totalChars + wordLength < maxLength - ellipsisLength) {
          result.push(word);
          totalChars += wordLength + 1;
        } else {
          break;
        }
      }

      if (result.length) {
        return result.join(" ") + ellipsisText;
      } else {
        return text || "";
      }
    } else {
      return text;
    }
  }

  return "";
};
