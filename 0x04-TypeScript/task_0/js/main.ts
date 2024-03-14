interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Leon',
  lastName: 'Albert',
  age: 20,
  location: 'Nairobi',
}

const student2: Student = {
  firstName: 'Rodney',
  lastName: 'Brad',
  age: 24,
  location: 'Nigeria',
}

const studentList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableHeader = document.createElement('thead');
const tableBody = document.createElement('tbody');

const headerRow = document.createElement('tr');
const headerCell1 = document.createElement('th');
headerCell1.textContent = 'First Name';
headerRow.appendChild(headerCell1);
const headerCell2 = document.createElement('th');
headerCell2.textContent = 'Location';
headerRow.appendChild(headerCell2);
tableHeader.appendChild(headerRow);

studentList.forEach((student) => {
  const bodyRow = document.createElement('tr');
  const bodyCell1 = document.createElement('td');
  bodyCell1.textContent = `${student.firstName}`;
  bodyRow.appendChild(bodyCell1);
  const bodyCell2 = document.createElement('td');
  bodyCell2.textContent = `${student.location}`;
  bodyRow.appendChild(bodyCell2);
  tableBody.appendChild(bodyRow);
});

table.appendChild(tableHeader);
table.appendChild(tableBody);

document.body.appendChild(table);




