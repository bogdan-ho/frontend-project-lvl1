export default (minNum, maxNum) => {
  const randomNumberBetween = Math.floor(Math.random() * (maxNum - minNum) + minNum);
  return randomNumberBetween;
};
