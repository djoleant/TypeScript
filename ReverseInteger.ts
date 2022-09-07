/*
  Created on Wed Sep 07 2022
  Djordje Antic
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Reverse integer                                                         │
  └─────────────────────────────────────────────────────────────────────────┘
  ┌─────────────────────────────────────────────────────────────────────────┐
  │         [1]                                                             │
  │   Input: x = 123                                                        │
  │   Output: x = 321                                                       │
  │                                                                         │
  │ Constraints:  -2^31 <= x <= 2^31 - 1                                    │
  └─────────────────────────────────────────────────────────────────────────┘
 */

function reverse(number: number): number {
    let reverse = 0
    while (number != 0) {
        let LeastSignificantDigit = number % 10
        number /= 1
        if (reverse > (Math.pow(2, 31) - 1)) {
            alert("Out of range")
            return 0;
        }

        if (reverse < (Math.pow(2, 31) * (-1))) {
            alert("Out of range")
            return 0;
        }

        reverse = reverse * 10 + LeastSignificantDigit

    }

    return reverse
};
