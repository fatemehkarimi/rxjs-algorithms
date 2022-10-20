import { of, take, expand, map } from "rxjs";

function fibonacciSeries(n: number) {
  return of([]).pipe(
    map(() => [0, 1]),
    expand(([a, b]) => of([b, a + b])),
    map(([_, last]) => last),
    take(n),
  );
}

fibonacciSeries(7).subscribe(console.log);
