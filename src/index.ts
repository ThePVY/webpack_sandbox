import './index.less'

interface Node {
  [key: string]: number
}

interface Graph {
  [key: string]: Node
}

const graph: Graph = {
  "1": { "2": 5, "5": 20, "4": 7 },
  "2": { "3": 2, "5": 5 },
  "3": { "6": 26 },
  "4": { "5": 2 },
  "5": { "6": 5 },
  "6": {}
}


const findShortestRoute = (gr: Graph, start: string, end: string) => {
  const distances: Node = {}
  let nodesNum = Object.keys(gr).reduce((acc) => acc + 1, 0)
  const processed: string[] = [start]

  
  distances[start as keyof Node] = 0

  let node = start
  let prevNode : string 
  let count = 0
  while (node && count < 50) {
    count++
    prevNode = node
    node = findLightestNode(node, gr, distances, processed)
    if(node === '-1') {
      node = prevNode
    }
  }

}

const findLightestNode = (node: string, gr: Graph, distances: Node, processed: string[]): string => {
  const children = gr[node]
  if(Object.keys(children).length === 0) {
    processed.push(node)
    return '-1'
  }
  for(let key in children) {
    if (!processed.includes(key)) {
      const newDist = gr[node][key] + distances[node]
      const oldDist = distances[key] || 100000
      if (newDist < oldDist) { 
        distances[key] = newDist
        processed.push(key)
        return key
      }
    }
  }
  return null
  /* Object.keys(gr[node]).reduce((neighbour) => {
    if (!processed.includes(neighbour)) {
      const newDist = gr[node][neighbour] + distances[node]
      const oldDist = distances[neighbour] || 100000
      if (newDist < oldDist) { 
        distances[neighbour] = newDist
        processed.push(neighbour)
        return neighbour
      }
    }
  }, null) */
}

findShortestRoute(graph, '1', '6')

console.log('done')

