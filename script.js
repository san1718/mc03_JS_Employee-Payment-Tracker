// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];
  // Prompt to get employee(s) count
  const employeeCount = prompt("Number of employees to be added: ");
  // Getting for loop on employees
  for (let i = 0 ; i < employeeCount ; i++) {
    // Getting employee's full name and salary
    const firstName = prompt("Employee's first name: ");
    const lastName = prompt("Employee's last name: ");
    const salary = parseInt(prompt("Employee's salary: "));
    // Creating object for employee
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };
    employees.push(employee);
  }

  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  
  // Loop to see the salaries and add them up
  for (let i = 0 ; i < employeesArray.length ; i++) {
    totalSalary += employeesArray[i].salary;
  }
  // Average calculation after summing salaries
  const averageSalary = totalSalary / employeesArray.length;
  // Sending alert for averageSalary 
  alert(`Average employee salary is: ${averageSalary.toLocaleString("en-US",
        {
          style: "currency",
          currency: "USD",
        })}`);

  return averageSalary;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  // Checking if there is any data input
  if (employeesArray.length <= 0) {
    alert("There are no employees currently.");
    return;
  }
  // Creatinng index with employeesArray length
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  // Getting employee in the array from the index
  const randomEmployee = employeesArray[randomIndex]
  // Displaying result of random employee
  alert(
    `Randomly selected employee: 
    \nFirst Name: ${randomEmployee.firstName}
    \nLast Name: ${randomEmployee.lastName}
    \nSalary: ${randomEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })}`);
  // Displaying result of random employee in console
  console.log(
    `Employee selected randomly: 
    \nFirst Name: ${randomEmployee.firstName}
    \nLast Name: ${randomEmployee.lastName}
    \nSalary: ${randomEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })}`);
  
    return randomEmployee;
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
