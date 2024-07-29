function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeInfo = newGrades.find(
        (grade) => grade.studentId === student.id
      );
      return {
        ...student,
        grade: gradeInfo ? gradeInfo.grade : 'N/A'
      };
    });
}

export default updateStudentGradeByCity;
