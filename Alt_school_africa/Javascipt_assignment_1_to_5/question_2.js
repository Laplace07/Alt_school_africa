// Problem 2 :  Object Difference
function diffObjects(oldObj, newObj) {
  const added = {}, removed = {}, changed = {};

  for (const key of Object.keys(newObj)) {
    if (!Object.hasOwn(oldObj, key)) {
      added[key] = newObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      changed[key] = { from: oldObj[key], to: newObj[key] };
    }
  }

  for (const key of Object.keys(oldObj)) {
    if (!Object.hasOwn(newObj, key)) {
      removed[key] = oldObj[key];
    }
  }

  return { added, removed, changed };
}
