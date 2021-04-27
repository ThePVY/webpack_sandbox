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
  private head: IListItem<T>
  private prevNode: IListItem<T>
  private currNode: IListItem<T>

  size() {
    return this.length
  }

  add(val : T) {
    if(length === 0) {
      this.prevNode = this.currNode = new ListItem(val)
      this.length++
    }
    else {
      this.currNode = new ListItem(val)
      this.prevNode.next = this.currNode
      this.length++
    }
  }
}

console.log('done')







