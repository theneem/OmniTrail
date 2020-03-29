import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
import {TripDetailPage} from "../trip-detail/trip-detail"
import {TripService} from "../../services/trip-service";
import {GlobalProvider} from "../../providers/global/global"
import {RelgodPage} from "../relgod/relgod"
import {ReltemplePage} from "../reltemple/reltemple"
import {RelsaintPage} from "../relsaint/relsaint"
/**
 * Generated class for the i page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-relegionhome',
  templateUrl: 'relegionhome.html',
})
export class RelegionhomePage {

  tab1Root = RelgodPage;
  tab2Root = ReltemplePage;
  tab3Root = RelsaintPage;


  
  // trip info
  public trip: any;
  // number of adult
  public adults = 2;
  // number of children
  public children = 0;

public rId =0;


  constructor(public global:  GlobalProvider, public navCtrl: NavController, public tripService: TripService,public navParams: NavParams) {
    //this.trip = tripService.getItem(navParams.get('id'));
    this.trip = tripService.getItem(navParams.get('id'));
    console.log(navParams.get('id'));
 
    this.global.GlobarlRelId = navParams.get('id');
    this.global.GlobalRelName = navParams.get('name');
    this.global.GlobalRelImg = navParams.get('img');

    this.rId=navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RelegionhomePage');
  }

}
