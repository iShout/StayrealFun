// markdown编辑器的编辑状态
class EditState {
  constructor() {
    this.curState = null;
    this.initialState = new InitState(this)
    this.saving = new Saving(this)
    this.saveDone = new SaveDone(this)
  }
  setState(state) {
    this.curState = state
  }
  //初始化状态对象
  initState(fn) {
    if (!fn || typeof fn !== 'function') {
      throw new Error("请传入useState控制变量的函数");
    }
    const stateValue = '编写的文档将自动保存'
    fn.call(this, stateValue)
    this.curState = this.initialState
  }
}
// 一个空类，所有其他模式类都是继承这个类，为了防止出现忘记定义nextState方法
class EmptyState {
  constructor() {
  }
  nextState() {
    throw new Error("下一个状态必须在子类中被重写");
  }
}
//初始状态
class InitState extends EmptyState {
  constructor(state) {
    super()
    this.state = state
  }
  /**
   * @description 切换下一个状态
   * @param {function} fn 执行下一个状态的回调函数
   */
  nextState(fn) {
    if (!fn || typeof fn !== 'function') {
      throw new Error("请传入useState控制变量的函数");
    }
    const nextValue = '正在保存'
    fn.call(this, nextValue)
    this.state.setState(this.state.saving)
  }
}
//正在保存
class Saving extends EmptyState {
  constructor(state) {
    super()
    this.state = state
  }
  nextState(fn) {
    if (!fn || typeof fn !== 'function') {
      throw new Error("请传入useState控制变量的函数");
    }
    const nextValue = '保存成功'
    fn.call(this, nextValue)
    this.state.setState(this.state.saveDone)
  }
}
//保存完毕
class SaveDone extends EmptyState {
  constructor(state) {
    super()
    this.state = state
  }
  nextState(fn) {
    if (!fn || typeof fn !== 'function') {
      throw new Error("请传入useState控制变量的函数");
    }
    const nextValue = '正在保存'
    fn.call(this, nextValue)
    this.state.setState(this.state.saving)
  }
}
export default EditState