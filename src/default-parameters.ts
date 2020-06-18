export { };

const nextYearSalary = (currentSlary: number, rate: number = 1.1): number => {
  return currentSlary * rate;
};

console.log(nextYearSalary(1000));