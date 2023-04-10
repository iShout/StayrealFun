const throttle = function (func, wait = 300) {
  let canrun = true
  return function(args){
    const self = this
    if(!canrun){
      return
    }
    canrun = false
    func.apply(self,args)
    let timer = setTimeout(() => {
      canrun = true
      clearTimeout(timer)
    }, wait);
  }
}
export default throttle