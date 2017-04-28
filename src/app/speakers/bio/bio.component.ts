import { Component, OnInit } from '@angular/core';
import {SpeakersService} from '../shared/speakers.service';
import {ActivatedRoute} from '@angular/router';
import {Speaker} from '../shared/speakers';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  currentSpeaker: Speaker;

  constructor(private route: ActivatedRoute,
              private service: SpeakersService) { }

  ngOnInit() {
    this.route.params.subscribe((params: { id: string }) => {
      this.currentSpeaker = this.service.getSpeakerByID(params.id);
    });
  }
}
