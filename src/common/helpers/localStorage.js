export const LS_KEYS = Object.freeze({
  contacts: 'contacts',
});

export const getFromLocalStorage = key => JSON.parse(localStorage.getItem(key));

export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
