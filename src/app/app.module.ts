//import { FormsModule } from '@angular/forms';
//import { RouterModule } from '@angular/router';
//import { LoginComponent } from './login/login.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BirdcardsComponent } from './birdcards/birdcards.component';

import { BirdlistComponent } from './birdlist/birdlist.component';
import { RouterModule } from '@angular/router';
/* import { JerdonComponent } from './jerdon/jerdon.component';
import { LapwingComponent } from './lapwing/lapwing.component';
import { IndianvultureComponent } from './indianvulture/indianvulture.component';
import { SiberiancraneComponent } from './siberiancrane/siberiancrane.component';
import { LiocichlaComponent } from './liocichla/liocichla.component';
import { IndianbustardComponent } from './indianbustard/indianbustard.component';
import { WhitebelledheronComponent } from './whitebelledheron/whitebelledheron.component';
import { PochardComponent } from './pochard/pochard.component';
import { BengalfloricanComponent } from './bengalflorican/bengalflorican.component';
import { SandpiperComponent } from './sandpiper/sandpiper.component';
import { RedvultureComponent } from './redvulture/redvulture.component';
import { HimalayanquailComponent } from './himalayanquail/himalayanquail.component';
 */import { MammallistComponent } from './mammallist/mammallist.component';
import { BirdDetailsComponent } from './bird-details/bird-details.component';
import { MammalDetailsComponent } from './mammal-details/mammal-details.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    BirdcardsComponent,
    /* JerdonComponent,
    LapwingComponent,
    IndianvultureComponent,
    SiberiancraneComponent,
    LiocichlaComponent,
    IndianbustardComponent,
    WhitebelledheronComponent,
    PochardComponent,
    BengalfloricanComponent,
    SandpiperComponent,
    RedvultureComponent,
    HimalayanquailComponent, */
    MammallistComponent,
    BirdDetailsComponent,
    MammalDetailsComponent,

    /*BirdlistComponent  This is replaced wit the routing components*/
     //LoginComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    //RouterModule.forRoot([
     // { path: '', component: BirdcardsComponent},
      //{ path: 'birdlist', component: BirdlistComponent },
    //])
    //FormsModule,
   
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
