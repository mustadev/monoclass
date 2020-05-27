import { Component, OnInit } from '@angular/core';

/**
 * Nav Bar Component 
 */
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // navbra collapse state
  public isMenuCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

}
