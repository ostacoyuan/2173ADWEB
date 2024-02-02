import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // declarations
  public title ='Research Conferences';
  public msg ='Join our online events this 2024!';
  public website1 ='https://www.britannica.com/place/France';
  public website2 ='https://www.britannica.com/place/Philippines';
  public website3 ='https://www.sftravel.com/';
  onClick(){
    console.log("Thank you for the early bird registration")
  }
}
