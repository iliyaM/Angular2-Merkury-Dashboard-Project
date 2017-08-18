import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
//Array of messages 
messages:Array<any> = [
	{id:20, icon: './assets/male2.png', title: "Nina Jones", content: "Hey You! it's me again :-) I attached new(...)", time: this.getCurrentTime()},
	{id:20, icon: './assets/male2.png', title: "Nina Jones", content: "Hey! I attached some new PSD files for (...)", time: this.getCurrentTime()},
	{id:20, icon: './assets/male.png', title: "James Smith", content: "Good morningm you are fired!", time: this.getCurrentTime()},
	{id:20, icon: './assets/male2.png', title: "Nina Jones", content: "Hello! Could You bring me coffe please?", time: this.getCurrentTime()}
];

//Gets current date object and sets variable with current minutes + random number
getCurrentTime() {
  let time = new Date();
  let currentMinutes = time.getMinutes() +  Math.floor(Math.random()*20);
  return currentMinutes;
}

  constructor() { }

  ngOnInit() {
  }

}
