import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mammals } from '../mammals';

@Component({
  selector: 'app-mammal-details',
  templateUrl: './mammal-details.component.html',
  styleUrls: ['./mammal-details.component.css']
})

export class MammalDetailsComponent implements OnInit
 {
  mammals;
  constructor(private route: ActivatedRoute,)
   {

  }

  ngOnInit() 
  {
    this.route.paramMap.subscribe(params => {
      this.mammals = Mammals[+params.get('mammalId')];
      
    });
   
  }

}
