import {NgModule,  Component, Input } from '@angular/core';

/**
 * Generated class for the SearchHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-header',
  templateUrl: 'search-header.html'
})
export class SearchHeaderComponent {
  @Input("SecName")  strSecName ; 

  text: string;


  hide:boolean = true;

  public     LWithin = [
    {
      id : 10,
      value : '10 KM'
    },
    {
      id : 20,
      value : '20 KM'
    },
    {
      id : 30,
      value : '30 KM'
    },
    {
      id : 40,
      value : '40 KM'
    },
    {
      id : 50,
      value : '50 KM'
    },
    {
      id : 60,
      value : '60 KM'
    }
  ]



  constructor() {
    console.log('Hello SearchHeaderComponent Component');
    this.text = 'Hello World';
  }

   
ngIfCtrl(){
  this.hide = !this.hide;
}



}
