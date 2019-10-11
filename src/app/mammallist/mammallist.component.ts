import { Component, OnInit } from '@angular/core';
import { Mammals } from '../mammals';

@Component({
  selector: 'app-mammallist',
  templateUrl: './mammallist.component.html',
  styleUrls: ['./mammallist.component.css']
})

export class MammallistComponent implements OnInit {
mammals = Mammals;
  constructor() { }

  ngOnInit() {
  }

}
