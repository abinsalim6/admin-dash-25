import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin_dashboard';

  sidebaropen:boolean=true

  toggle(){
    this.sidebaropen=!this.sidebaropen
  }
}
