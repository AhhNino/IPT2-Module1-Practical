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

