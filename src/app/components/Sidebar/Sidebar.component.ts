import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-Sidebar',
  templateUrl: './Sidebar.component.html',
  styleUrls: ['./Sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	@Input() isOpen: boolean;
  constructor() { }

  ngOnInit() {
  }
}
