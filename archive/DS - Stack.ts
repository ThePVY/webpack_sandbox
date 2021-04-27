import './index.less'

interface IStack<T> {
  push: (item: T) => T
  pop: () => T
  peek: () => T
  stack: Array<T>
}

class Stack<T> implements IStack<T> {
  private _stack: Array<T> = []
  private last: number = 0


  push(item: T): T {
    return this._stack[this.last++] = item
  }

  pop() : T {
    return this._stack.splice(--this.last, 1)[0]
  }

  peek() : T {
    return this._stack[this.last - 1]
  }

  get stack() {
    return this._stack;
  }

  set stack(val : T[]) {
    this._stack = val
  }
}

let st : IStack<any> = new Stack<any>()

console.log('-----')

console.log('peek:', st.peek())

console.log(st.push('0'))
console.log(st.push('1'))
console.log(st.push('2'))

console.log('stack:', st.stack)
console.log('peek:', st.peek())

console.log(st.pop())
console.log(st.pop())
console.log(st.pop())
console.log(st.pop())
console.log(st.pop())

console.log('stack:', st.stack)
console.log('peek:', st.peek())


