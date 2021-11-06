/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = (func: any, wait: any) => {
  let timeout: any;
  return function (...args: any) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      // eslint-disable-next-line prefer-spread
      func.apply(null, args);
    }, wait);
  };
};
