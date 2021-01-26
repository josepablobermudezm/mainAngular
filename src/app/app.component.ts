import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mainProject';
  opened = false;
  barsIcon = faBars;

  toggleSidebar(){//abrir el sidebar
    this.opened = !this.opened;
  }

}
