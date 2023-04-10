/**
 * @description 使用AOP完成在函数调用后跳转路由的功能
 * @param {function} navFn 跳转路由的方法
 * @param {array} args 调用routeGo函数的参数
 */
Function.prototype.routeGo = function (navFn, args) {
  const fn = this
  if (typeof fn !== "function") {
    throw new Error("Error！非函数不可调用routeGo");
  }
  if(!(args instanceof Array)){
    throw new Error("Error！调用routeGo参数请使用数组");
  }
  const route = fn(...args)
  if (!route) {
    throw new Error("Error！调用routeGo请先返回正确的路径");
  }
  navFn(route)
}