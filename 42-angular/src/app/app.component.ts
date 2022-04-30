import { HttpClient } from '@angular/common/http';
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
  public title = '42app';
  public step: number = 0;
  public batchSFValue: string = '';
  public val2: any = null;
  public val3: any = null;

  constructor(private db: AngularFireDatabase, private http: HttpClient) {}

  public startTrain(): void {
    interval(2000)
      .pipe(take(5))
      .subscribe((step) => {
        this.step = step;

        if (step === 0) {
        }

        if (step === 1) {
          this.http.get('http://127.0.0.1:7101/42/two').subscribe((val) => {
            this.val2 = val;
          });
        }

        if (step === 2) {
          this.http.get('http://127.0.0.1:7101/42/three').subscribe((val) => {
            this.val3 = val;
          });
        }

        if (step === 3) {
        }

        if (step === 4) {
          const batchSF: AngularFireObject<any> = this.db.object('Hackathon');
          batchSF.valueChanges().subscribe((x) => {
            this.batchSFValue = x;
          });
        }
      });
  }
}
