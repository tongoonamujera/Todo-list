const MockStorage = () => {
  const storage = {};
  return {
    setItem(key, value) {
      storage[key] = value || '';
    },
    getItem(key, value) {
      return key in storage ? storage[key] : null;
    },
    key(i) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    },
  };
};

export default MockStorage;
