/**
 * 订阅者模式的定义
 */
class ObserverEvent {
  constructor() {
    this.dependList = {}
  }
  /**
   * @description 发布订阅模式的订阅通知方法
   * @param {string} eventName 添加订阅的事件名称
   * @param {function} fn 当得到订阅通知后执行的回调函数
   */
  subscribe(eventName, fn) {
    if (typeof fn !== 'function') {
      throw new Error("添加订阅需要回调函数");
    }
    if (!this.dependList[eventName]) {
      this.dependList[eventName] = []
    }
    this.dependList[eventName].push(fn)
  }
  /**
   * @description 发布订阅模式的发布通知方法
   * @param {string} eventName 发布通知的事件名称
   * @param {any} [args] 发布通知携带的参数
   */
  notice(eventName, ...args) {
    const fns = this.dependList[eventName]
    
    if (!fns || !fns.length) {
      return false
    }
    for (let i = 0, len = fns.length; i < len; i++) {
      fns[i].apply(this, args)
    }
  }
  /**
   * @description 取消订阅
   * @param {string} eventName 取消订阅的事件名称
   * @param {function} [fn] 取消订阅对应的逻辑方法 
   */
  unsubscribe(eventName, fn) {
    const fns = this.dependList[eventName]
    //如果订阅事件还没有被订阅，直接返回
    if (!fns) {
      return
    }
    // 如果没有传入订阅回调逻辑，则清楚这个订阅事件中所有的逻辑
    if (!fn) {
      fns && (fns.length = 0)
    } else {
      for (let l = fns.length - 1; l >= 0; l--) {
        const _fn = fns[l]
        if (_fn === fn) {
          fns.splice(l, 1)
        }
      }
    }
  }
}
export default ObserverEvent