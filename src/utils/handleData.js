export const getData = function getDataFromLocalStorage(key) {
  return JSON.parse(window.localStorage.getItem(key));
};

export const removeData = function removeDataInLocalStorage(key) {
  window.localStorage.removeItem(key);
};

export const setData = function setDataInLocalStorage(key, data) {
  window.localStorage.setItem(key, JSON.stringify(data));
};
