function Stack() {
  const stack = []
  let last = 0

  this.push = function(item) {
    return stack[last++] = item
  }

  this.pop = function() {
    return stack.splice(--last, 1)
  }

  this.peek = function() {
    return stack[last]
  }

  this.getStack = () => stack
}

let st = new Stack()

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


