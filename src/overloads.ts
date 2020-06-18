export { };

function dobble(value: number): number;
function dobble(value: string): string;

function dobble(value: any): any {
  if (typeof value === 'number') {
    return value * 2;

  } else if (typeof value === 'string') {
    return value + value
  }
};


console.log(dobble(100));
console.log(dobble('go'));
// console.log(dobble(false));