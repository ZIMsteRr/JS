const students = [
  {
    id: 10,
    name: "John Smith",
    marks: [10, 8, 6, 9, 8, 7],
  },
  {
    id: 11,
    name: "John Doe",
    marks: [9, 8, 7, 6, 7],
  },
  {
    id: 12,
    name: "Thomas Anderson",
    marks: [6, 7, 10, 8],
  },
  {
    id: 13,
    name: "Jean-Baptiste Emanuel Zorg",
    marks: [10, 9, 8, 9],
  },
];

function averageStudentGrade(studentId, students) {
  const student = students.find((student) => student.id === studentId);

  if (!student) {
    return "Student not found";
  }

  const sum = student.grades.reduce((total, grade) => total + grade, 0);
  const average = sum / student.grades.length;
  return average;
}

function averageGroupGrade(students) {
  let sum = 0;
  let count = 0;

  students.forEach((student) => {
    student.grades.forEach((mark) => {
      sum += mark;
      count++;
    });
  });

  if (count === 0) {
    return "No grades found";
  }

  const average = sum / count;
  return average;
}

console.log(averageStudentGrade(10, students));
console.log(averageGroupGrade(students));
