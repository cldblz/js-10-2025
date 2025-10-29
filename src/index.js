import { fetchBreeds, fetchCatByBreed } from './cat-api';

const selectRef = document.querySelector('.breed-select');
const catInfoRef = document.querySelector('.cat-info');
const loaderRef = document.querySelector('.loader');
const errorRef = document.querySelector('.error');

fetchBreeds().then(data => {
  selectRef.innerHTML = createSelectMarkup(data);
});

selectRef.addEventListener('change', setOutput);

function createSelectMarkup(data) {
  return data
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function setOutput(e) {
  fetchCatByBreed(e.currentTarget.value).then(data => {
    catInfoRef.innerHTML = createInfoMarkup(data);
  });
}

function createInfoMarkup(data) {
  return data
    .map(
      ({ url, breeds }) =>
        `<img src=${url} width=500><div><h2>${breeds[0].name}</h2><p>${breeds[0].description}</p><p><b>Temperament:</b> ${breeds[0].temperament}</p></div>`
    )
    .join('');
}

export function showLoader() {
  loaderRef.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderRef.classList.add('is-hidden');
}

export function showSelect() {
  selectRef.classList.remove('is-hidden');
}

export function hideSelect() {
  selectRef.classList.add('is-hidden');
}

export function showInfo() {
  catInfoRef.classList.remove('is-hidden');
}

export function hideInfo() {
  catInfoRef.classList.add('is-hidden');
}

export function showError() {
  errorRef.classList.remove('is-hidden');
}

export function hideError() {
  errorRef.classList.add('is-hidden');
}
