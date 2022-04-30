import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '42-angular';

  public startTrain(): void {
    console.log('Train started')
    alert('Train started');
  }
}
