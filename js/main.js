const getRandomNumber = (max, min) =>
  min
    ? Math.floor(Math.random() * (max - min)) + min
    : Math.floor(Math.random() * max + 1);

const checkMaxStringLength = (string, maxLength) =>
  string.length === maxLength ? true : false;

const createImageURL = (directory, name, format) => `${directory + name + format}`

const getRandomArrayElement = (arr) => arr[getRandomNumber(arr.length)];

const getArrayRandomLength = (element, length) =>
  new Array(getRandomNumber(length)).fill(null).map(() => element);

const PHOTO_DIRECTORY = 'photos/';
const AVATAR_DIRECTORY = 'img/avatar-';
const PHOTO_FORMAT = '.jpg';
const AVATAR_FORMAT = '.svg';
const MIN_LIKES_NUM = 15;
const MAX_LIKES_NUM = 200;
const NUMBER_OF_PHOTOS = 25;
const NUMBER_OF_AVATARS = 6;
const MAX_COMMENTS = 6;
const MAX_ID_NUM = 500;
let uniqueId = [];

const MOCK_DESCRIPTION = [
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновение. Цените тех, кто рядом с вами и отгоняйте все сомнения. Не обижайте всех словами...',
  'Вот это тачка!',
];

const MOCK_MESSAGE = [
  'Все отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилось фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент!?',
];

const AUTHOR_NAME = [
  'Боб',
  'Олег',
  'Хуан',
  'Ольга',
  'Голум',
  'Брунгильда',
]

const checkUniqueId = (id, uniqueIdArray) => uniqueIdArray.some((element) => element === id);

// const getUniqueId = (idStore) => {
//   let id = getRandomNumber(MAX_ID_NUM);

//   if (idStore.some((element) => element === id)) {
//     idStore.push(id)
//     return id;
//   }
// };


const getRandomMessage = (arr) =>
  getRandomNumber(arr.length) % 2 === 0
    ? getRandomArrayElement(arr) + ' ' + getRandomArrayElement(arr)
    : getRandomArrayElement(arr);

const getPhotoComments = () => {
  return {
    id: getRandomNumber(NUMBER_OF_AVATARS),
    avatar: createImageURL(AVATAR_DIRECTORY, getRandomNumber(NUMBER_OF_AVATARS), AVATAR_FORMAT),
    message: getRandomMessage(MOCK_MESSAGE),
    name: getRandomArrayElement(AUTHOR_NAME),
  }
};

// getUniqueId(uniqueId);

