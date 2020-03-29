import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReltemplePage } from './reltemple';


// importing components
import {ComponentsModule} from "../../components/components.module"  


@NgModule({
  declarations: [
    ReltemplePage,
  ],
  imports: [  
    ComponentsModule,
    IonicPageModule.forChild(ReltemplePage),
  ],
})
export class ReltemplePageModule {}
