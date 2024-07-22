export default function createIteratorObject(report) {
  let itr = [];
  for (let employees of Object.values(report.allEmployees)) {
    for (let employee of employees) {
      itr.push(employee);
    }
  }
  return itr;
}