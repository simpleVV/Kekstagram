const FILE_TYPES = ['image/jpg', 'image/jpeg', 'image/png'];

const PictureSize = {
  WIDTH: 600,
  HEIGHT: 600,
};

const loadImage = (input, image, effects) => {
  const imageFile = input.files[0];
  const matches = FILE_TYPES.some((type) => type === imageFile.type);

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      image.width = PictureSize.WIDTH;
      image.height = PictureSize.HEIGHT;
      image.src = reader.result;
      effects.forEach((effect) => {
        effect.style.backgroundImage = `url(${reader.result})`;
      });
    });

    reader.readAsDataURL(imageFile);
  }
};

export { loadImage };
