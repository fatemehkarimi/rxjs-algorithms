import { Observable } from "rxjs";

function dfs(graph: Array<number[]>, startNode: number): Observable<number> {
  return new Observable((subscriber) => {
    const visited: boolean[] = new Array(graph.length).fill(false);
    const stack = [];
    stack.push(startNode);

    while(stack.length != 0) {
      const topNode = stack.pop();
      if(visited[topNode!])
        continue;

      visited[topNode!] = true;
      subscriber.next(topNode);

      for(const node of graph[topNode!])
        if(!visited[node])
          stack.push(node);
    }
    subscriber.complete();
  })
}

const graph = [
  [1, 2],
  [0, 3, 4],
  [0, 3, 4],
  [1, 2],
  [1, 2]
];

dfs(graph, 0).subscribe(console.log);
