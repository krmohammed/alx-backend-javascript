export default function createReportObject(employeesList) {
  const emp = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      let total = 0;
      for (let x in employeesList) {
        total++;
      }
      return total;
    },
  };
  return emp;
}
