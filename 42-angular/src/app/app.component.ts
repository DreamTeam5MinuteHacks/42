import { Component } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = '42.1.png';
  public imgURL: string = '42.1.png';
  private imgURLList: string[] = [
    '42.1.png',
    '42.2.png',
    '42.3.png',
    '42.4.png',
    '42.5.png',
  ];

  constructor(private db: AngularFireDatabase) {}

  public startTrain(): void {
    interval(2000)
      .pipe(take(5))
      .subscribe((step) => {
        console.log(step);
        this.imgURL = this.imgURLList[step];
      });

    console.log('Train started');
    const batchSF: AngularFireObject<any> = this.db.object('Hackathon');
    batchSF.valueChanges().subscribe((x) => {
      console.log(x);
    });
  }
}
