const marks = [85, 92, 78, 90, 87];
let highestMarks = 0;

for (let i = 0; i < marks.length; i++) {
highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
}

console.log(`The highest marks scored by any student is: ${highestMarks}`);
