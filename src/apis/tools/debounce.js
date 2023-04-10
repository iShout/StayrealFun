const debounce = function (func, wait = 300) {
  let timer = null;
  return function (args) {
    const self = this;
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      func.apply(self,args)
      timer = null
    }, wait);
  };
};

export default debounce;
