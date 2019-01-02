/* eslint radix: ["error", "as-needed"] */
import limitValue from './limit-value';

function scorePassword(pass, minLength, limit, variations = {}) {
  let score = 0;
  let variationCount = 0;
  const letters = {};

  if (!pass || pass.length < minLength) {
    return score;
  }

  /* Score unique letters until 5 repetitions */
  for (let i = 0; i < pass.length; i += 1) {
    letters[pass[i]] = (letters[pass[i]] || 0) + 1;
    score += 5.0 / letters[pass[i]];
  }

  /* Score character variation */
  Object.keys(variations).forEach((variation) => {
    const variationCheck = variations[variation].test(pass);
    variationCount += variationCheck === true ? 1 : 0;
  });
  score += (variationCount - 1) * 10;

  return limitValue(score, 0, limit);
}

export default scorePassword;
