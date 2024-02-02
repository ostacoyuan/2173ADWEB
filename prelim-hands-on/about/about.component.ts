import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  // declarations
  public title='About the Organization';
  public msg='Learn how the team and committee leadership are shaping the world of conferences, get the latest conference news and updates on our blog, and contact for guidance'

  onClick(){
    console.log("You are now a sponsor");
  }
  
  onClick2(): void {
    console.log('Button clicked! You got your FREE Gift!');

  }
}