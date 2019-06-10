/**
 * 睡眠
 * @param time 睡眠秒数[s]
 */
export function sleep(time: number = 0) {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
