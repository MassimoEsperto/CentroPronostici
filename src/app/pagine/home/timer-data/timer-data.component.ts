
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'timer-data',
  templateUrl: './timer-data.component.html',
  styleUrls: ['./timer-data.component.css']
})
export class TimerDataComponent implements OnInit {

  private _trialEndsAt;
  private _diff: number;
  private _days: number;
  private _hours: number;
  private _minutes: number;

  constructor() { }

  ngOnInit() {
    this._trialEndsAt = "2021-06-08";
    this.getCountdown();
    setTimeout(() => {
      this.getCountdown();
    }, 60000);


  }

  getCountdown() {
    this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
   
    if (this._diff > 0) {
      this._days = this.getDays(this._diff);
      this._hours = this.getHours(this._diff);
      this._minutes = this.getMinutes(this._diff);
    }
  
  }

  getDays(t) {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }

  getHours(t) {
    return Math.floor((t / (1000 * 60 * 60)) % 24);
  }

  getMinutes(t) {
    return Math.floor((t / 1000 / 60) % 60);
  }



}