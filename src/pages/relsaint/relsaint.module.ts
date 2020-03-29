import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RelsaintPage } from './relsaint';


// importing components
import {ComponentsModule} from "../../components/components.module"  


@NgModule({
  declarations: [
    RelsaintPage,
  ],
  imports: [
ComponentsModule,
    IonicPageModule.forChild(RelsaintPage),
  ],
})
export class RelsaintPageModule {}
