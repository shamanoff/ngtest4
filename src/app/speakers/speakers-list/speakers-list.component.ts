import {Component, HostBinding, OnInit} from '@angular/core';
import {SpeakersService} from '../shared/speakers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Speaker} from '../shared/speakers';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.css']
})
export class SpeakersListComponent implements OnInit {
  @HostBinding('class.small-6')
  @HostBinding('class.columns')
  speakers: Speaker[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: SpeakersService,
  ) { }

  ngOnInit() {
    this.speakers = this.service.getSpeakers();

  }

  showBio(id) {
    this.router.navigate(['/speakers', {outlets: {'bio': [id]}}]);
  }

}
