function calculateGrade() {
    var subject1 = parseInt(document.getElementById("subject1").value);
    var subject2 = parseInt(document.getElementById("subject2").value);
    var subject3 = parseInt(document.getElementById("subject3").value);
    var subject4 = parseInt(document.getElementById("subject4").value);

    var totalMarks = subject1 + subject2 + subject3 + subject4;
    var percentage = (totalMarks / 400) * 100;

    var grade;

    if (percentage >= 90) {
      grade = 'A+';
    } else if (percentage >= 80) {
      grade = 'A';
    } else if (percentage >= 70) {
      grade = 'B';
    } else if (percentage >= 60) {
      grade = 'C';
    } else if (percentage >= 50) {
      grade = 'D';
    } else {
      grade = 'Fail';
    }

    document.getElementById("total").innerHTML = "Total Marks: " + totalMarks;
    document.getElementById("percentage").innerHTML = "Percentage: " + percentage.toFixed(2) + "%";
    document.getElementById("grade").innerHTML = "Grade: " + grade;
  }