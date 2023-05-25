import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

// userdefined event creation
@Output() onMenubtnclick = new EventEmitter()

menubtnclicked(){
  // to occur an useerdefined event
  this.onMenubtnclick.emit()

  // to resize screen
  setTimeout(() => {
    window.dispatchEvent(
      new Event("resize")
    )
  }, 100);
}

}
