import { LightningElement } from 'lwc';

export default class HelloWorld1 extends LightningElement {
    greeting = 'World';
  changeHandler(event) {
    this.greeting = event.target.value;
    //TestComment5
  }
}