import { Component, OnInit } from '@angular/core';
import {SpeakersService} from './shared/speakers.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css'],
  providers: [ SpeakersService]
})
export class SpeakersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
