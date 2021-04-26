import './index.less'

interface IStack<T> {
  push: (item: T) => T;
  pop: () => T[];
  peek: () => T;
  getStack: () => Array<T>
}

class Stack<T> {
  private stack: Array<T>
  private last: number

  constructor() {
    this.stack = []
    this.last = 0
  }

  push(item: T): T {
    return this.stack[this.last++] = item
  }

  pop() : T[] {
    return this.stack.splice(--this.last, 1)
  }

  peek() : T {
    return this.stack[this.last]
  }

  getStack(): Array<T> { return this.stack }
}

let st : IStack<any> = new Stack<any>()

console.log('-----')

console.log('peek:', st.peek())

console.log(st.push('0'))
console.log(st.push('1'))
console.log(st.push('2'))

console.log('stack:', st.getStack())
console.log('peek:', st.peek())

console.log(st.pop())
console.log(st.pop())
console.log(st.pop())
console.log(st.pop())
console.log(st.pop())

console.log('stack:', st.getStack())
console.log('peek:', st.peek())


