import { Component, OnInit } from '@angular/core';
import { Birds } from '../birds';

@Component({
  selector: 'app-birdlist',
  templateUrl: './birdlist.component.html',
  styleUrls: ['./birdlist.component.css']
})

export class BirdlistComponent implements OnInit {
  birdname = Birds;
  constructor() { }

  ngOnInit() {
  }

}
