import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

backgroundColor = environment.navBarBackgroundColor;

  constructor() { }

  

}
