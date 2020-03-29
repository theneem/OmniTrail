import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RelgodPage } from './relgod';

// importing components
import {ComponentsModule} from "../../components/components.module" ; 


@NgModule({
  declarations: [RelgodPage],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(RelgodPage)
  ]
})

export class RelgodPageModule {}
