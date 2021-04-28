import './index.less'

interface Weight {
    [key: string]: number
}

interface Graph {
    [key: string]: Weight
}

const graph: Graph = {
    "1": { "2": 5, "5": 20, "4": 7 },
    "2": { "3": 2, "5": 5, "1": 5 },
    "3": { "6": 26, "2": 2 },
    "4": { "5": 2, "1": 7 },
    "5": { "6": 5, "4": 2, "1": 20, "2": 5 },
    "6": {"3": 26, "5": 5}
}

const findShortestRoute = (gr: Graph, start: string, end: string) => {
    const graphLength = Object.keys(gr).length
    const visited: string[] = [start]
    const weights: Weight = {}
    const route = {
        path: end,
        weight: Infinity
    }

    weights[start] = 0
    updateWeights(gr, start, weights)
    
    let node
    while (visited.length !== graphLength) {
        node = findLightestNode(weights, visited)
        updateWeights(gr, node, weights)
    }
    route.weight = weights[end]

    node = end
    while(node !== start) {
        const nodes = findPreviousNode(gr, weights, node)
        node = nodes.reduce((acc, node) => weights[acc] > weights[node] ? node : acc, nodes[0])
        route.path = `${node} -> ${route.path}`
    }
}

const findLightestNode = (weights: Weight, visited: string[]) : string => {
    let min = Infinity
    let lightest = null
    for(let w in weights) {
        if (!visited.includes(w)) {
            if(min > weights[w]) {
                min = weights[w]
                lightest = w
            }
        }
    }
    lightest && visited.push(lightest)
    return lightest
}

const updateWeights = (gr: Graph, node: string, weights: Weight) => {
    Object.keys(gr[node]).forEach((key) => {
        const oldWeight = weights[key] || Infinity
        const newWeight = gr[node][key] + weights[node]
        if (newWeight < oldWeight) {
            weights[key] = newWeight
        }
    })
}

const findPreviousNode = (gr: Graph, weights: Weight, end: string) : string[] => {
    const nodes : string[] = []
    for (let node in gr) {
        if (Object.keys(gr[node]).includes(end)) {
            const ref1 = Math.abs(weights[end] - weights[node])
            const ref2 = gr[node][end]
            if (ref1 === ref2) {
                nodes.push(node)
            }
        }
    }
    return nodes
}

findShortestRoute(graph, '3', '4')

console.log('done')

