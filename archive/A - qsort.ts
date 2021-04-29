function quickSort(arr: number[]): number[] {
  let pivot: number = getPivot(arr)

  const larger = findLarger(pivot, arr)
  const lower = findLower(pivot, arr)
  if(larger.length > 1 || lower.length > 1) {
    return [ ...quickSort(lower), pivot, ...quickSort(larger) ]
  }
  else {
    return [...lower, pivot, ...larger].filter((num: number) => num ? true : false)
  }
}

function findLarger(pivot: number, arr: number[]) : number[] {
  return arr.reduce((acc, num) => num > pivot ? [...acc, num] : acc, [])
}

function findLower(pivot: number, arr: number[]) : number[] {
  return arr.reduce((acc, num) => num < pivot ? [...acc, num] : acc, [])
}

const getPivot = (arr: number[]) => arr[Math.floor(arr.length/2)]


const arr: number[] = [1, 5, 3, 2, 100, 150, 300, 32, 92, 1000]

const sorted = quickSort(arr)


console.log('done')

export {}

