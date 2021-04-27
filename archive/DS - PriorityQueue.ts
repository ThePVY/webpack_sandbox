import './index.less'

interface IQueueItem<T> {
  value: T;
  priority: number;
}

interface IQueue<T> {
  push: (item : IQueueItem<T>) => IQueueItem<T>[]
  pop: () => IQueueItem<T>
  peek: () => IQueueItem<T>
  queue: IQueueItem<T>[]
}

class Queue<T> implements IQueue<T> {
  private _queue : IQueueItem<T>[] = []

  push(item : IQueueItem<T>) {
    this._queue = [ ...this._queue, item ].sort((a, b) => b.priority - a.priority)
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
a = q.push({value : '1', priority: 0})
a = q.push({value : '2', priority: 1})
a = q.push({value : '3', priority: 0})

b[0] = q.pop()
b[1] = q.pop()
b[2] = q.pop()
b[3] = q.pop()

console.log('done')







