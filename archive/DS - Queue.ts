import './index.less'

interface IQueue<T> {
  push: (item : T) => Array<T>
  pop: () => T
  peek: () => T
  queue: Array<T>
}

class Queue<T> implements IQueue<T> {
  private _queue : Array<T> = []

  push(item : T){
    this._queue = [ ...this._queue, item ]
    return this._queue
  }

  pop() {
    return this._queue.splice(0, 1)[0]
  }

  peek() {
    return this._queue[0]
  }

  get queue() {
    return this._queue
  }
}

const q = new Queue<any>()
let a, b = []
a = q.push('1')
a = q.push('2')
a = q.push('3')

b[0] = q.pop()
b[1] = q.pop()
b[2] = q.pop()

console.log('done')






