// Add Student Function
function addStudent() {
    // Get form values
    const name = document.getElementById('studentName').value.trim();
    const id = document.getElementById('studentID').value.trim();
    const course = document.getElementById('studentCourse').value.trim();

    // Validate
    if (!name || !id || !course) {
        alert('Please fill in all fields.');
        return;
    }

    // Add row to table
    const table = document.getElementById('studentTable');
    const row = table.insertRow(-1);
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = id;
    row.insertCell(2).textContent = course;

    // Clear inputs
    document.getElementById('studentName').value = '';
    document.getElementById('studentID').value = '';
    document.getElementById('studentCourse').value = '';
}

// Event Listener for Add Button
document.getElementById('addStudentBtn').addEventListener('click', addStudent); 

// Add Subject Function
function addSubject() {
    // Get form values
    const code = document.getElementById('subjectCode').value.trim();
    const name = document.getElementById('subjectName').value.trim();
    const units = document.getElementById('subjectUnits').value.trim();

    // Validate
    if (!code || !name || !units) {
        alert('Please fill in all fields.');
        return;
    }

    // Add row to table
    const table = document.getElementById('subjectTable');
    const row = table.insertRow(-1);
    row.insertCell(0).textContent = code;
    row.insertCell(1).textContent = name;
    row.insertCell(2).textContent = units;

    // Clear inputs
    document.getElementById('subjectCode').value = '';
    document.getElementById('subjectName').value = '';
    document.getElementById('subjectUnits').value = '';
}

// Event Listener for Add Button
document.getElementById('addSubjectBtn').addEventListener('click', addSubject);
