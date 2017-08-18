import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
//Array of activities 
activities:Array<any> = [
	{id:20, icon: './assets/female.png', userName: "Nina Jones", projectName: "Free UI Kit", activity: this.randomActivity(), time:this.getCurrentTime()},
	{id:12, icon: './assets/male.png', userName: "James Smith", projectName: "Free PSD Template", activity: this.randomActivity(), time:this.getCurrentTime()},
	{id:3, icon: './assets/dude.png', userName: "Alex Clooney", projectName: "Website", activity: this.randomActivity(), time:this.getCurrentTime()},
	{id:6, icon: './assets/male2.png', userName: "Alexandra Spears", projectName: "Angular2 Dev", activity: this.randomActivity(), time:this.getCurrentTime()}
];

//Generate Random activity
randomActivity(){
	let activityList:Array<any> = ['add a new project', 'commented project', 'completed task', 'deployed to server', 'fixed styling'];
	let randomNumber = Math.floor(Math.random() * activityList.length);
	let randomActivityItem = activityList[randomNumber];
	return randomActivityItem;
}

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
