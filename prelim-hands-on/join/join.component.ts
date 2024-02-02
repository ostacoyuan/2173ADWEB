import { Component } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrl: './join.component.css'
})
export class JoinComponent {
  // declarations
  public title='Join our Mailing list!';
  public msg='Join and meet thousands of academicians around the globe and stay updated!';
  name: string = '';
  submitted: boolean = false;

  
  last: string = '';
  email: string = '';
  instituition: string = '';

  submitForm() {
    this.submitted = true;
  }

  onClick(){
    console.log('You have registered successfully');
  }
}
