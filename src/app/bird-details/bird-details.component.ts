import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Birds} from '../birds';

@Component({
  selector: 'app-bird-details',
  templateUrl: './bird-details.component.html',
  styleUrls: ['./bird-details.component.css']
})

export class BirdDetailsComponent implements OnInit 
{
  birds;

  constructor(private route: ActivatedRoute,) 
  {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.birds = Birds[+params.get('birdId')];
      
    });
   
  }

}


