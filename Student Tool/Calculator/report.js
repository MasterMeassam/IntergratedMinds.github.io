function addSubject() {
    const subjectsContainer = document.getElementById('subjectsContainer');
    const subjectInput = document.createElement('div');
    subjectInput.innerHTML = `
      <label for="subjectName">Subject Name:</label>
      <input type="text" class="subjectName" required>
      <label for="obtainedMarks">Obtained Marks:</label>
      <input type="number" class="obtainedMarks" required>
      <label for="totalMarks">Total Marks:</label>
      <input type="number" class="totalMarks" required>
    `;
    subjectsContainer.appendChild(subjectInput);
  }
  
  function generateReport() {
    const studentName = document.getElementById('studentName').value;
    const className = document.getElementById('className').value;
    const rollNumber = document.getElementById('rollNumber').value;
  
    const subjects = document.querySelectorAll('.subjectName');
    const obtainedMarks = document.querySelectorAll('.obtainedMarks');
    const totalMarks = document.querySelectorAll('.totalMarks');
  
    let totalObtainedMarks = 0;
    let totalTotalMarks = 0;
  
    const subjectDetails = [];
  
    subjects.forEach((subject, index) => {
      const subjectName = subject.value;
      const subjectObtainedMarks = parseFloat(obtainedMarks[index].value);
      const subjectTotalMarks = parseFloat(totalMarks[index].value);
  
      totalObtainedMarks += subjectObtainedMarks;
      totalTotalMarks += subjectTotalMarks;
  
      const subjectPercentage = (subjectObtainedMarks / subjectTotalMarks) * 100;
  
      subjectDetails.push({
        name: subjectName,
        obtainedMarks: subjectObtainedMarks,
        totalMarks: subjectTotalMarks,
        percentage: subjectPercentage.toFixed(2),
      });
    });
  
    const totalPercentage = (totalObtainedMarks / totalTotalMarks) * 100;
  
    const grade = calculateGrade(totalPercentage);
  
    const reportOutput = document.getElementById('reportOutput');
    reportOutput.innerHTML = `
      <h2>Report Card:</h2>
      <p><strong>Name:</strong> ${studentName}</p>
      <p><strong>Class:</strong> ${className}</p>
      <p><strong>Roll Number:</strong> ${rollNumber}</p>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Obtained Marks</th>
            <th>Total Marks</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          ${subjectDetails.map(subject => `
            <tr>
              <td>${subject.name}</td>
              <td>${subject.obtainedMarks}</td>
              <td>${subject.totalMarks}</td>
              <td>${subject.percentage}%</td>
            </tr>`).join('')}
        </tbody>
      </table>
      <p><strong>Total Percentage:</strong> ${totalPercentage.toFixed(2)}%</p>
      <p><strong>Grade:</strong> ${grade}</p>
    `;
  }
  
  function calculateGrade(percentage) {
    if (percentage >= 90) {
      return 'A++';
    } else if (percentage >= 80) {
      return 'A+';
    } else if (percentage >= 70) {
      return 'A';
    } else if (percentage >= 60) {
      return 'B';
    } else {
      return 'F';
    }
  }
  