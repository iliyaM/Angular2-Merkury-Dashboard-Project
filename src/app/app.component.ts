import { Component, EventEmitter } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	isOpenFlag:boolean; // Boolean flag to set its value from the $event set by the child HeaderComponent

	reciveClickEvent($event) {
		this.isOpenFlag = $event;
	}
}
