import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Importing components for birds */
import { BirdcardsComponent } from './birdcards/birdcards.component';
import { BirdlistComponent } from './birdlist/birdlist.component';
import { BirdDetailsComponent } from './bird-details/bird-details.component';

/* Importing components for mammals */
import { MammallistComponent } from './mammallist/mammallist.component';
import { MammalDetailsComponent } from './mammal-details/mammal-details.component';







const routes: Routes = [
  { path: '', component: BirdcardsComponent},
  { path: 'birdlist', component: BirdlistComponent },
  {path: 'Birds/:birdId', component: BirdDetailsComponent},

   //Mammal components
   { path: 'mammallist', component: MammallistComponent},
   { path: 'Mammals/:mammalId', component: MammalDetailsComponent }

  
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ BirdlistComponent, BirdcardsComponent,MammallistComponent,MammalDetailsComponent ]

/* { path: 'jerdon', component: JerdonComponent },
  { path: 'lapwing', component :  LapwingComponent},
  { path: 'indian-vulture', component : IndianvultureComponent },
  { path: 'siberian-crane', component : SiberiancraneComponent },
  { path: 'liocichla', component: LiocichlaComponent},
  { path: 'indian-bustard', component:  IndianbustardComponent},
  { path: 'heron', component : WhitebelledheronComponent },
  { path: 'pochard', component: PochardComponent},
  { path: 'bengal-florican', component : BengalfloricanComponent},
  { path: 'sandpiper', component: SandpiperComponent },
  { path: 'red-headed-vulture', component: RedvultureComponent},
  { path: 'himalayan-quail', component: HimalayanquailComponent}, */

/* import { JerdonComponent } from './jerdon/jerdon.component';
import { LapwingComponent } from './lapwing/lapwing.component';
import { IndianvultureComponent } from './indianvulture/indianvulture.component';
import { SiberiancraneComponent } from './siberiancrane/siberiancrane.component';
import { LiocichlaComponent} from './liocichla/liocichla.component';
import { IndianbustardComponent } from './indianbustard/indianbustard.component';
import { WhitebelledheronComponent } from './whitebelledheron/whitebelledheron.component';
import { PochardComponent } from './pochard/pochard.component';
import { BengalfloricanComponent } from './bengalflorican/bengalflorican.component';
import { SandpiperComponent } from './sandpiper/sandpiper.component';
import { RedvultureComponent } from './redvulture/redvulture.component';
import { HimalayanquailComponent } from './himalayanquail/himalayanquail.component'; */