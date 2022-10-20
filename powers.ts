import { expand, map, of, take } from "rxjs";

function firstNPowers(base: number, n: number) {
  return of([]).pipe(
    map(() => 1),
    expand((v) => of(v * base)),
    take(n)
  );
}

firstNPowers(3, 5).subscribe(console.log);