export const totalArrayNumber = (prices) => {
  const total = prices.reduce((partialSum, a) => partialSum + a, 0);
  return total;
};
