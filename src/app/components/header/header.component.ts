import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	isOpen:boolean = true;
	@Output() headerMenuClickEvent = new EventEmitter<any>();

	constructor() { }

	sendClickEvent($event){
		//Prevent default refresh of rhe page, emit with value of flag and change flag to the opsite
		event.preventDefault();
		$event.target.classList.toggle('clicked'); //Setting menu click class to handle animations
		this.headerMenuClickEvent.emit(this.isOpen);
		this.isOpen = !this.isOpen;
	}


}
