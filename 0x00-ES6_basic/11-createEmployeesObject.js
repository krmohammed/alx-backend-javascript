export default function createEmployeesObject(departmentName, employees) {
  let employeesObj = {
    [departmentName]: employees,
  };
  return employeesObj;
}
