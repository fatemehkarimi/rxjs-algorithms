import { scan, map, of } from "rxjs";

function calcAverage(numbers: number[]) {
  const numbers$ = of(...numbers);
  return numbers$.pipe(
    scan((acc, v) => acc + v, 0),
    map((sum, idx) => sum / (idx + 1))
  );
}

const results$ = calcAverage([12, 31, 5, 1, 2, 7, 100]).subscribe(console.log);
