import { getRandomArrayElement } from './util.js';

const MAX_RANDOM_IMG = 10;

const imgFilters = document.querySelector('.img-filters');

const addActiveClass = (button) => {
  button.classList.add('img-filters__button--active');
};

const removeActiveClass = () => {
  const activeButton = imgFilters.querySelector('.img-filters__button--active');
  activeButton.classList.remove('img-filters__button--active');
};

const showFilters = () => {
  imgFilters.classList.remove('img-filters--inactive');
};

const getRandomImgs = (images) => {
  const randomImgs = new Set();

  while (randomImgs.size !== MAX_RANDOM_IMG) {
    randomImgs.add(getRandomArrayElement(images));
  }

  return [...randomImgs];
};

const sortImgsForComment = (imgA, imgB) => {
  return imgB.comments.length - imgA.comments.length;
};

const getSortImages = (images) => {
  const discussedImgs = images
    .slice()
    .sort(sortImgsForComment);

  return discussedImgs;
};

const setFilter = (filter, filterData) => {
  let data = filterData.slice();
  switch (filter) {
    case 'filter-default':
      return filterData;
    case 'filter-random':
      return getRandomImgs(data);
    case 'filter-discussed':
      return getSortImages(data);
  }
};

const setFilterClick = (filterData, clearFilterData, setFilterData) => {
  imgFilters.addEventListener('click', (evt) => {
    if (
      evt.target.matches('.img-filters__button') &&
      !evt.target.matches('.img-filters__button--active')
    ) {
      evt.preventDefault();
      removeActiveClass();
      addActiveClass(evt.target);
      clearFilterData();
      setFilterData(setFilter(evt.target.id, filterData));
    }
  });
}

export {
  setFilterClick,
  showFilters
};
