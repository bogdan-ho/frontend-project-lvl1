export default (maxNum, minNum = 0) => {
  const randomNumberBetween = Math.floor(Math.random() * (maxNum - minNum) + minNum);
  return randomNumberBetween;
};
