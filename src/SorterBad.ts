export class SorterBad {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;
    // bubble sort
    for (let i = 0; i < length; i++) {
      // for every iteration of i the largest number
      // will be moved to the very last element in
      // the array so you don’t have to look at it
      // again in the next iteration hence j < length - i - 1
      if (
        this.collection instanceof
        Array /* type guard - Need to reference the constructor  */
      ) {
        for (let j = 0; j < length - i - 1; j++) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }
      }

      // use typeof for primitive types
      // - number, string and boolean only
      if (typeof this.collection === "string" /* type guard */) {
      }
    }
  }
}
