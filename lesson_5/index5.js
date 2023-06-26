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

function averageStudentMark(studentId, students) {
  const student = students.find((student) => student.id === studentId);

  if (!student) {
    return "Student not found";
  }

  const sum = student.marks.reduce((total, mark) => total + mark, 0);
  const average = sum / student.marks.length;
  return average;
}

function averageGroupMark(students) {
  const allMarks = students.reduce((acc, student) => {
    return acc.concat(student.marks);
  }, []);

  const sumOfMarks = allMarks.reduce((total, mark) => {
    return total + mark;
  }, 0);

  const numberOfMarks = allMarks.length;

  if (numberOfMarks === 0) {
    return "No marks found";
  }

  const average = sumOfMarks / numberOfMarks;

  return average;
}

console.log(averageStudentMark(10, students));
console.log(averageGroupMark(students));
