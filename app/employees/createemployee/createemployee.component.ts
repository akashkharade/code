import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  gender = 'female';

  constructor() {}

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm) {

    console.log(empForm);
  }

}
