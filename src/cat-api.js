import {
  showLoader,
  hideLoader,
  showSelect,
  hideSelect,
  showInfo,
  hideInfo,
  showError,
  hideError,
} from './index';

const headers = new Headers({
  'x-api-key':
    'live_H5dcCXJGHIlEr22Yyj0v0Ng8drbQhmMpHRzZr8mR6eds0xuua5Gs5Y8Yhb4o0bcE',
});

const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  showLoader();
  hideSelect();

  return fetch(`${BASE_URL}/breeds`, {
    headers,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
      showError();
    })
    .finally(() => {
      hideLoader();
      showSelect();
    });
}

export function fetchCatByBreed(breedId) {
  showLoader();
  hideSelect();
  hideInfo();
  hideError();

  return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`, {
    headers,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
      showError();
    })
    .finally(() => {
      hideLoader();
      showSelect();
      showInfo();
    });
}
