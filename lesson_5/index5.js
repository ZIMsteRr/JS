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

function averageGroupMark(students) {
  const allMarks = students.reduce((acc, student) => {
    return acc.concat(student.marks); // Объединяем все оценки всех студентов в один массив
  }, []);

  const sumOfMarks = allMarks.reduce((total, mark) => {
    return total + mark; // Находим сумму всех оценок
  }, 0);

  const numberOfMarks = allMarks.length; // Получаем количество всех оценок

  if (numberOfMarks === 0) {
    return "No marks found";
  }

  const average = sumOfMarks / numberOfMarks; // Вычисляем средний балл

  return average;
}

console.log(averageStudentGrade(10, students));
console.log(averageGroupGrade(students));
