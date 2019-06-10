/**
 * strict addition function
 * @remark javascript floating point arithmetic has deviation, this function fix it.
 * @example strictAdd(arg1, arg2)
 * @return arg1 addition arg2 result
 */
export function strictAdd(arg1: number, arg2: number): number {
  let r1: number;
  let r2: number;
  let m: number;
  let c: number;
  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  c = Math.abs(r1 - r2);
  m = Math.pow(10, Math.max(r1, r2));
  if (c > 0) {
    const cm = Math.pow(10, c);
    if (r1 > r2) {
      arg1 = Number(arg1.toString().replace('.', ''));
      arg2 = Number(arg2.toString().replace('.', '')) * cm;
    } else {
      arg1 = Number(arg1.toString().replace('.', '')) * cm;
      arg2 = Number(arg2.toString().replace('.', ''));
    }
  } else {
    arg1 = Number(arg1.toString().replace('.', ''));
    arg2 = Number(arg2.toString().replace('.', ''));
  }
  return (arg1 + arg2) / m;
}

/**
 * strict subtraction function
 * @remark javascript floating point arithmetic has deviation, this function fix it.
 * @example strictSub(arg1,arg2)
 * @return arg1 subtraction arg2 result
 */
export function strictSub(arg1: number, arg2: number): number {
  let r1: number;
  let r2: number;
  let m: number;
  let n: number;
  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = (r1 >= r2) ? r1 : r2;
  return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
}

/**
 * strict multiplication function
 * @remark javascript floating point arithmetic has deviation, this function fix it.
 * @example strictMul(arg1,arg2)
 * @return arg1 multiplication arg2 result
 */
export function strictMul(arg1: number, arg2: number): number {
  let m: number = 0;
  const s1: string = arg1.toString();
  const s2: string = arg2.toString();
  try {
    m += s1.split('.')[1].length;
  } catch (e) {
    m = m;
  }
  try {
    m += s2.split('.')[1].length;
  } catch (e) {
    m = m;
  }
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
}

/**
 * strict division function
 * @remark javascript floating point arithmetic has deviation, this function fix it.
 * @example strictDiv(arg1,arg2)
 * @return arg1 division arg2 result
 */
export function strictDiv(arg1: number, arg2: number): number {
  let t1: number;
  let t2: number;
  let r1: number;
  let r2: number;
  try {
    t1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    t1 = 0;
  }
  try {
    t2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    t2 = 0;
  }
  r1 = Number(arg1.toString().replace('.', ''));
  r2 = Number(arg2.toString().replace('.', ''));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}
