/**
 * 生成指定范围数字
 * @param minNumber 最小数
 * @param maxNumber 最大数
 */
export function randomNumber(minNumber: number, maxNumber: number) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

/**
 * 数字前置补零
 * @param num 待处理数字
 * @param n 补0位数
 */
export function prefixZero(num: number, n: number) {
  return (Array(n).join('0') + num).slice(-n);
}
