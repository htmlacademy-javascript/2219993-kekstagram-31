function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  function getNum() {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= max - min + 1) {
      console.error(
        `Перебраны все числа из диапазона от ${ min } до ${ max}`
      );
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  }
  return getNum();
}

const createComment = () => ({
  id: getRandomInteger(1, 1000),
  avatar: `img/avatar-${createRandomIdFromRangeGenerator(1, 25)}.svg`,
  message:
      PHRASES[getRandomInteger(0, PHRASES.length - 1)] +
      PHRASES[getRandomInteger(0, PHRASES.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});
const createObject = () => ({
  id: createRandomIdFromRangeGenerator(1, 25),
  url: `photos/${createRandomIdFromRangeGenerator(1, 25)}`,
  description: 'Очень хорошая фотография!',
  likes: getRandomInteger(15, 100),
  comments: createComment(),
});
const createArray = () => {
  const arr = [];
  const length = 25;
  for (let i = 1; i <= length; i++) {
    arr.push(createObject());
  }
  return arr;
};
export { getRandomInteger, createRandomIdFromRangeGenerator, createComment, createObject , createArray };
