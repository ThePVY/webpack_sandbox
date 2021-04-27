import './index.less'

interface IListItem<T> {
  value: T
  next: IListItem<T>
}

class ListItem<T> implements IListItem<T> {
  value: T
  next: IListItem<T>

  constructor(val: T, next?: IListItem<T>) {
    this.value = val
    this.next = next
  }
}

class LinkedList<T> {
  private length: number = 0
  private _head: IListItem<T>
  private prevNode: IListItem<T>
  private currNode: IListItem<T>

  size() {
    return this.length
  }

  add(val: T) {
    if (this.length === 0) {
      this.prevNode = this.currNode = this._head = new ListItem(val)
      this.length++
    }
    else {
      this.currNode = new ListItem(val)
      this.prevNode.next = this.currNode
      this.prevNode = this.currNode
      this.length++
    }
  }

  at(idx: number) {
    let node = this._head
    if (idx >= this.length) return -1
    for (let i = 0; i < idx; i++) {
      node = node.next
    }
    return node
  }

  indexOf(val: T) {
    let node = this._head
    let i = 0
    while (node.value !== val) {
      node = node.next
      i++
      if(!node.next) return -1
    }
    return i
  }

  remove(idx: number) {
    if(idx >= this.length) return -1
    if(idx === 0) {
      this._head = this._head.next
    }
    else {
      let prevNode = this._head
      for (let i = 0; i < idx - 1; i++) {
        prevNode = prevNode.next
      }
      if(prevNode.next === this.currNode) {
        this.prevNode = prevNode
      }
      prevNode.next = prevNode.next.next
    }
    this.length--
    return this   
  }

  get head() {
    return this._head
  }

  get tail() {
    return this.prevNode
  }

  print() {
    let node = this.head
    while (node?.value) {
      console.log(node)
      node = node.next
    }
  }
}

let ll = new LinkedList<any>()

ll.add('1')
ll.add('2')
ll.add('3')

ll.print()
console.log('size', ll.size())

console.log('at 0:', ll.at(0))
console.log('at 1:', ll.at(1))
console.log('at 2:', ll.at(2))
console.log('at 3:', ll.at(3))
console.log('at 4:', ll.at(4))
console.log('indexOf 1:', ll.indexOf('1'))
console.log('indexOf 2:', ll.indexOf('2'))
console.log('indexOf 3:', ll.indexOf('3'))
console.log('indexOf 4:', ll.indexOf('4'))

ll.print()
ll.remove(0) //lower bound
console.log('0 removed')
ll.print()
ll.add('4')
console.log('4 added')
ll.print()
ll.remove(1)
console.log('1 removed')
ll.print() //upper bound
ll.add('5')
console.log('5 added')
ll.print()

console.log('done')







