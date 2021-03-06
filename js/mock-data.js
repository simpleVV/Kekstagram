import { getRandomNumber, getRandomArrayElement } from './util.js'

const MAX_ID_NUM = 500;
const LAST_AVATAR_NUM = 7;
const FiRST_AVATAR_NUM = 1;
const MIN_LIKES_NUM = 15;
const MAX_LIKES_NUM = 200;
const MAX_COMMENTS = 6;
const NUMBER_OF_PHOTOS = 25;

const MOCK_DESCRIPTIONS = [
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновение. Цените тех, кто рядом с вами и отгоняйте все сомнения. Не обижайте всех словами...',
  'Вот это тачка!',
];

const MOCK_MESSAGES = [
  'Все отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилось фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент!?',
];

const AUTHORS = ['Боб', 'Олег', 'Хуан', 'Ольга', 'Голум', 'Брунгильда'];

const getUniqueId = (idStore) => {
  let id = getRandomNumber(MAX_ID_NUM);

  if (idStore.some((elem) => elem === id)) {
    return getUniqueId(idStore);
  }
  idStore.push(id);
  return id;
};

const getRandomMessage = (arr) =>
  getRandomNumber(arr.length) === getRandomNumber(arr.length)
    ? getRandomArrayElement(arr) + ' ' + getRandomArrayElement(arr)
    : getRandomArrayElement(arr);

const getPhotoCommentData = () => {
  let uniqueId = [];
  return {
    id: getUniqueId(uniqueId, MAX_ID_NUM),
    avatar: `img/avatar-${getRandomNumber(
      LAST_AVATAR_NUM,
      FiRST_AVATAR_NUM,
    )}.svg`,
    message: getRandomMessage(MOCK_MESSAGES),
    name: getRandomArrayElement(AUTHORS),
  };
};

const createPictureData = (number) => {
  return {
    id: number,
    url: `photos/${number}.jpg`,
    description: getRandomArrayElement(MOCK_DESCRIPTIONS),
    likes: getRandomNumber(MAX_LIKES_NUM, MIN_LIKES_NUM),
    comments: new Array(getRandomNumber(MAX_COMMENTS))
      .fill(null)
      .map(() => getPhotoCommentData()),
  };
};

const createPicturesData = () => new Array(NUMBER_OF_PHOTOS)
  .fill(createPictureData)
  .map((element, index) => element(index + 1));

export { createPicturesData };
