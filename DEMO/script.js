const form = document.getElementById('studentForm');
const tableBody = document.querySelector('#studentTable tbody');
let count = 1;

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const course = document.getElementById('course').value;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${count++}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>${course}</td>
  `;

  tableBody.appendChild(row);
  form.reset();
});
