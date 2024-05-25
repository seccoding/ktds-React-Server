export function objectToArray(obj) {
  const subArray = [];
  for (let key in obj) {
    subArray.push(obj[key]);
  }
  return subArray;
}
