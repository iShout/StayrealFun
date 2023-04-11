const debounce = function (func, wait = 1000) {
  let timer = null;
  return function (args) {
    const self = this || window;
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      func.apply(self,args&&[...args])
      timer = null
    }, wait);
  };
};

export default debounce;
