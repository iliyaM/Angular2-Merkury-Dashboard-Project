import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})


export class TasksComponent implements OnInit {

//Array of tasks 
tasks:Array<any> = [
	{id:20, icon: './assets/letter-n.png', title: "New website from Symu.com", menu: "./assets/workflow.png", status: "delayed"},
	{id:12, icon: './assets/letter-f.png', title: "Free buisiness PSD Template", menu: "./assets/workflow.png", status: "notDelayed"},
	{id:3, icon: './assets/letter-n.png', title: "New logo for JCD.pl", menu: "./assets/workflow.png", status: "notDelayed"},
	{id:6, icon: './assets/letter-f.png', title: "Free Icons Set vol.3", menu: "./assets/workflow.png", status: "delayed"}
];

//Delayed messages counter
delayedCounter:Number = 0;

//Filters the array and find all keys with value delayed.
updateConter = function(){
	this.delayedCounter = this.tasks.filter(counter => counter.status === 'delayed').length
}

//Function runs on change event. emits id of message and value of selected option.
delayStateUpdate(id, value) {
	//Finds message by id and sets its key status value to provided value
	const task = this.tasks.find(task => task.id === id).status = value;

	// Runs the update function after resetting status value to check if needs to update counter.
	this.updateConter();
}

constructor() {}

// OnInit run array search to count delayed messages.
ngOnInit() {
	this.updateConter();
}

}
