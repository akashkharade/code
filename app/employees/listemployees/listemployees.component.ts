import {Employee} from '../../models/employee.model';
import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@gmail.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/2.jpg'
    },
    {
      id: 2,
      name: 'Kerry',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345342344,
      dateOfBirth: new Date('11/20/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/1.jpg'

    },
    {
      id: 3,
      name: 'Brenda',
      gender: 'Female',
      contactPreference: 'Email',
      email: 'brenda@gmail.com',
      dateOfBirth: new Date('3/25/1976'),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/3.jpg'

    }
];



  constructor() {}

  ngOnInit() {
  }

}
