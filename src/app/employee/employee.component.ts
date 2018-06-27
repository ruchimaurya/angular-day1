import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Employee} from '../models/employee.model' ;
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 
 
 
  constructor() { }
  qualificationList= [];
  experiance=[];
  languageList=[];
  chechked=[];
  public model =new Employee("ruchi","maurya","rm@gm.com",97245813,"jnsdkmrkf","rmaurya","123456","female","BE","fresher",this.chechked);
  languageObj=[{languageName:"C/C++",IsEnabled:"false"},
  {languageName:"Java",IsEnabled:"true"},
  {languageName:"CSharp",IsEnabled:"true"},
  {languageName:"PHP",IsEnabled:"false"},
  {languageName:"Python",IsEnabled:"false"}];


  //model =new Employee("ruchi","maurya","rm@gm.com",97245813,"jnsdkmrkf","rmaurya","123456","female","BE","fresher","java");
   ngOnInit() {
    this.qualificationList= ["Diploma","BE","ME","PHD"];
    this.experiance=["Fresher","1-2 year","3-4 year",">4 years"];
    this.languageList=["c/c++","java","csharp","php","Python"];
  }
     

change (value) {
console.log(value);
if(this.chechked.indexOf(value) === -1 )
{
  this.chechked.push(value);
} 
else
{
  var index = this.chechked.indexOf(value);
  this.chechked.splice(index, 1);
}
console.log(this.chechked);


}

  onSubmit(form: NgForm) {
    console.log(this.model);
    console.log("First name :"+this.model.firstName+"\nLastName: "+this.model.lastName+"\nEmail: "+this.model.email+"\nContact num: "+this.model.contactNumber+"\nAddress: "+this.model.address+"\nUser Name: "+this.model.userName+"\nPassword: "+this.model.password+"\nGender : "+this.model.gender+"\nQualification: "+this.model.qualification+"\nExperiance: "+this.model.experiance+"\nCoding Languages: "+this.model.codingLanguages);
  }

}
