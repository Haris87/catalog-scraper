const unicodeToString = text => {
  return text.replace(/\\u[\dA-F]{4}/gi, match => {
    return String.fromCharCode(parseInt(match.replace(/\\u/g, ""), 16));
  });
};

module.exports = {
  toString: unicodeToString
};
