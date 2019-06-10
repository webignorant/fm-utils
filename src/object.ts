/**
 * 对象Key排序
 * @param obj
 */
export function objKeySort(obj: object): any {
  const newKeys = Object.keys(obj).sort();
  const newObj = {};
  for (const theKey of newKeys) {
    newObj[theKey] = obj[theKey];
  }
  return newObj;
}
