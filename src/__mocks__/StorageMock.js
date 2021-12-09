const MockStorage = () => {
  let storage = {};
  return {
    setItem: function (key, value) {
      storage[key] = value || '';
    },
    getItem: function (key, value) {
      return key in storage ? storage[key] : null;
    },
    key: function (i) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    },
  };
};

export default MockStorage;
