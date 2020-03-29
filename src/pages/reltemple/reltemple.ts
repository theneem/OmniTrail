import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global"
import {TripService} from "../../services/trip-service";
import { TempleService } from '../../services/temple-service';

/**
 * Generated class for the ReltemplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reltemple',
  templateUrl: 'reltemple.html',
})
export class ReltemplePage {

    // trip info
    public relheader: any;
    public temples: any;


  constructor(public global:  GlobalProvider,public navCtrl: NavController, public navParams: NavParams,public tripService: TripService, public templeService: TempleService) {
    
      this.relheader = tripService.getItem(this.global.GlobarlRelId);
    this.temples = templeService.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReltemplePage');
  }

}
