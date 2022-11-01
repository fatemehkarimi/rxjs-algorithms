import { Observable } from "rxjs";
function bfs(graph: Array<number[]>, startNode: number) : Observable<number> {
  return new Observable((subscriber) => {
    const visited: boolean[] = new Array(graph.length).fill(false);
    const queue = [];
    queue.push(startNode);
    visited[startNode] = true;

    while(queue.length != 0) {
      const topNode = queue.shift();
      subscriber.next(topNode);

      for(const node of graph[topNode!])
        if(!visited[node]) {
          visited[node] = true;
          queue.push(node);
        }
    }
    subscriber.complete();
  });
}

const graph = [
  [1, 2],
  [0, 3, 4],
  [0, 3, 4],
  [1, 2],
  [1, 2]
];

bfs(graph, 4).subscribe(console.log);
