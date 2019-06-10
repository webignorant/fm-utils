/**
 * 随机字符串
 *
 * 生成固定长度的随机数randomWord(false, 位数[自己定义])
 * 生成一个长度从多少到多少的随机数randomWord(true, 最少位数, 最大位数)
 *
 * @param randomFlag 是否随机产生
 * @param min 最小数值
 * @param max 最大数值
 */
export function randomWord(randomFlag: boolean = true, min: number, max?: number) {
  let str = '';
  let range = min;
  const arr = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ];

  if (randomFlag && max) {
    range = Math.round(Math.random() * (max - min)) + min;
  }
  for (let i = 0; i < range; i++) {
    const pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }
  return str;
}

/**
 * check the string is JSON string
 * @param str check string
 */
export function checkIsJson(str: string): any {
  let ret;
  try {
    ret = JSON.parse(str);
  } catch (err) {
    ret = false;
  }
  return ret;
}

/**
 * 替换字符串
 * @param theStr 待替换的字符串
 * @param newStr 替换成的字符串
 * @param regExp 替换正则
 */
export function replaceStr(theStr: string, newStr: string, regExp: string) {
  return theStr.replace(new RegExp(regExp, 'gm'), newStr);
}

/**
 * 字符串格式化
 * @param theStr 待格式化的字符串
 */
export function format(theStr: string, ...args: any[]) {
  let formatArgs;
  formatArgs = args;
  // no fotmat args
  if (formatArgs.length === 0) {
    return theStr;
  }

  if (formatArgs.length === 1 && typeof(formatArgs[0]) === 'object') {
    formatArgs = formatArgs[0];
  }
  for (const key in formatArgs) {
    const value = formatArgs[key];
    if (value !== undefined) {
      theStr = replaceStr(theStr, value, `\\{${key}\\}`);
    }
  }
  return theStr;
}

/**
 * stringRepeat
 * @param text text
 * @param num num
 */
export function stringRepeat(text: string, num: number){
  return new Array(num + 1).join(text);
}

/**
 * 字符串设置掩码
 * @param text 处理的文本
 * @param start 掩码开始位置[非下标]
 * @param end 掩码结束位置[非下标]
 * @param mask 掩码
 */
export function stringMask(text: string, start: number, end?: number, mask: string = '*') {
  let rangeLen;
  const startIndex = start - 1;
  const textPrefix = text.slice(0, startIndex);
  let textSuffix = '';
  if (end) {
    textSuffix = text.slice(end);
    rangeLen = end - start;
  } else {
    rangeLen = text.length - start;
  }
  const maskText = stringRepeat(mask, rangeLen);
  return `${textPrefix}${maskText}${textSuffix}`;
}
