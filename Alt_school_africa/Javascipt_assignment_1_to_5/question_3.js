function deepFreeze(obj) {
  Object.values(obj).forEach(value => {
    if (typeof value === 'object' && value !== null && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  });
  return Object.freeze(obj);
}
