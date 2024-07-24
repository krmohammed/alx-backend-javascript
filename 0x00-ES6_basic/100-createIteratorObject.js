export default function createIteratorObject(report) {
  const itr = [];
  for (const employees of Object.values(report.allEmployees)) {
    for (const employee of employees) {
      itr.push(employee);
    }
  }
  return itr;
}
