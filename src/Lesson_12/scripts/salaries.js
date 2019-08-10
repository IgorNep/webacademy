function calcTotalSalaries(arr) {
  let total = arr[0].salary;

  for (const employee of arr) {
    total += employee.salary;
  }

  return total;
}

function findLargestSalary(arr) {
  let max = arr[0];
  for (const employee of arr) {
    max = employee.salary > max.salary ? employee : max;
  }
  return max;
}

function toNames(employies) {
  const names = [];
  for (const employee of employies) {
    names.push(employee.name);
  }
  return names;
}

export { calcTotalSalaries, findLargestSalary, toNames };
