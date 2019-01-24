import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  public userIsYoungerThan21 = 'kk';
  public title = 'Patient component';
  public heading = false;
  constructor() { }

  ngOnInit() {
    this.userIsYoungerThan21 ? this.serveGrapeJuice() : this.serveWine();
  }
  serveGrapeJuice() {
    console.log('hello from servegrapejuice');
  }
  serveWine() {
    console.log('hello from serveWine');
  }
  clicktobutton() {
    this.heading = true;
    console.log('button clicked');

  }

}
