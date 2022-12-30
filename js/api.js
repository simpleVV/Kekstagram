const Urls = {
  GET: 'https://23.javascript.pages.academy/kekstagram/data',
  POST: 'https://23.javascript.pages.academy/kekstagram',
};

const getData = (onSuccess, onError) => {
  fetch(Urls.GET)
    .then((response) => response.ok
      ? response.json()
      : onError(response.status, response.statusText))
    .then((data) => data
      ? onSuccess(data)
      : []);
};

const sendData = (onSuccess, onError, body) => {
  fetch(Urls.POST,
    {
      method: 'POST',
      body,
    })
    .then((response) => response.ok
      ? onSuccess()
      : onError())
    .catch(() => onError());
}

export {
  getData,
  sendData
};
