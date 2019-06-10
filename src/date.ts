/**
 * 格式化时间
 * @param date 日期对象
 * @param fmt 格式化模板
 */
export function formatTime(date: Date, fmt = 'YYYY-MM-DD HH:mm:ss') {
  const o = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'S+': date.getMilliseconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
  };
  const week = {
    0: '\u65e5',
    1: '\u4e00',
    2: '\u4e8c',
    3: '\u4e09',
    4: '\u56db',
    5: '\u4e94',
    6: '\u516d',
  };
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length),
    );
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1
        ? RegExp.$1.length > 2
          ? '\u661f\u671f'
          : '\u5468'
        : '') + week[date.getDay() + ''],
    );
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length),
      );
    }
  }
  return fmt;
}

/**
 * 根据时间戳进行时间格式化
 * @param timestamp 时间戳
 * @param fmt 时间格式化模板
 * @param zoneOffset 当前时间戳记录的时区
 */
export function formatTheTimestamp(timestamp: number, fmt = 'YYYY-MM-DD HH:mm:ss', theTimezoneOffset = 0) {
  if (timestamp.toString().length < 13) {
    timestamp *= 1000;
  }
  const theDate = new Date(timestamp);

  const currentZoneDate = timeLocalization(theDate, theTimezoneOffset);

  return formatTime(currentZoneDate, fmt);
}

export function formatDateString(dataString: string, fmt = 'YYYY-MM-DD HH:mm:ss', theTimezoneOffset = 0) {
  const theDate = new Date(dataString);

  const currentZoneDate = timeLocalization(theDate, theTimezoneOffset);

  return formatTime(currentZoneDate, fmt);
}

/**
 * 时间本地化
 * @param theDate Date对象
 * @param theTimezoneOffset 指定的时区
 */
export function timeLocalization(theDate: Date, theTimezoneOffset = 0) {
  let gmtDate;
  if (theTimezoneOffset > 0) {
    gmtDate = new Date(theDate.getTime() - theTimezoneOffset * 60 * 1000);
  } else if (theTimezoneOffset < 0) {
    gmtDate = new Date(theDate.getTime() - theTimezoneOffset * 60 * 1000);
  } else {
    gmtDate = theDate;
  }

  const timezone = currentTimezone();
  const currentZoneDate = new Date(gmtDate.getTime() + timezone * 60 * 60 * 1000);

  return currentZoneDate;
}

/**
 * 获取当前时区
 */
export function currentTimezone() {
  const zoneTimezoneOffset = new Date().getTimezoneOffset();
  const timezoneOffset = new Date().getTimezoneOffset() / 60;
  let timezone;
  if (zoneTimezoneOffset < 0) {
    timezone = Math.abs(timezoneOffset);
  } else {
    timezone = -timezoneOffset;
  }
  return timezone;
}

/**
 * 获取当年的第几周
 */
export function getWeekOfYear() {
  const nowDate = new Date();
  let firstDay = new Date(nowDate.getFullYear(), 0, 1);
  const dayOfWeek = firstDay.getDay();
  let spendDay = 1;
  if (dayOfWeek !== 0) {
    spendDay = 7 - dayOfWeek + 1;
  }
  firstDay = new Date(nowDate.getFullYear(), 0, spendDay + 1);
  const dayOfYear = Math.ceil((nowDate.valueOf() - firstDay.valueOf()) / 86400000);
  const result = Math.ceil(dayOfYear / 7);
  return result + 1;
}

/**
 * 根据秒数计算倒计时
 * @param distance 秒数
 */
export function getCountdownBySecond(theSecond: number) {
  const day = Math.floor(theSecond / 86400); // 60*60*24
  const hour = Math.floor((theSecond %= 86400) / 3600);
  const minute = Math.floor((theSecond %= 3600) / 60);
  const second = theSecond % 60;

  return {
    day,
    hour,
    minute,
    second,
  };
}

/**
 * 判断年份是否为润年
 *
 * @param {Number} year
 */
export function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}
