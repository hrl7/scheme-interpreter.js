import { buildNumber} from "../nodes";

export const MATH_PROCEDURES = [
  ["REST", "+", operands => buildNumber(operands.reduce((acc, num) => num.value + acc,0))],
  ["REST", "*", operands => buildNumber(operands.reduce((acc, num) => num.value * acc,1))],
  [["NUMBER", "NUMBER"], "-", operands => buildNumber(operands[0].value - operands[1].value)],
  [["NUMBER", "NUMBER"], "/", operands => buildNumber(operands[0].value / operands[1].value)],
];

