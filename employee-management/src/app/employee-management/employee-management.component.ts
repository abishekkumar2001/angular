import { Component, OnInit } from "@angular/core"; 

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employeeName: string = '';
  selectedDepartment: string = '';
  dob: string = '';

  // minDate: string = new Date().toISOString().split('T')[0]; // Today's date
  maxDate: string = new Date().toISOString().split('T')[0]; // Today's date

  //Giving both minDate and maxDate will disable all dates except today's date

  departments: string[] = ['IT', 'HR', 'Finance', 'Operations'];

  employees: any[] = [];

  currentPage: number = 1;
  pageSize: number = 1;

  //constructor() {} 
  //Empty constructor

  addEmployee() {
    const employee = {
      name: this.employeeName,
      department: this.selectedDepartment,
      dob: this.dob
    };
    this.employees.push(employee);

    // Optionally, you can reset form fields here
    this.employeeName=''
    this.selectedDepartment=''
    this.dob=''

    console.log(this.employees)
    
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    const totalPages = Math.ceil(this.employees.length / this.pageSize);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  get pagedEmployees() {

    if (this.currentPage * this.pageSize <= this.employees.length) {
      this.nextPage();
    }
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.employees.slice(startIndex, endIndex);
  }

  

}



  
