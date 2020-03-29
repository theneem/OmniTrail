import {Component} from "@angular/core";

import {NavController, NavParams} from "ionic-angular";

import {TripService} from "../../services/trip-service";
import {CheckoutTripPage} from "../checkout-trip/checkout-trip";
import {SettingsPage} from "../settings/settings";
import {GlobalProvider} from "../../providers/global/global"




@Component({  
  selector: 'page-trip-detail',
  templateUrl: 'trip-detail.html'
})
export class TripDetailPage {


  
  tab1Root = SettingsPage;
  tab2Root = SettingsPage;
  tab3Root = SettingsPage;


  
  // trip info
  public trip: any;
  // number of adult
  public adults = 2;
  // number of children
  public children = 0;

  constructor(public global:  GlobalProvider, public nav: NavController, public tripService: TripService, public navParams: NavParams) {
    // set sample data

    this.trip = tripService.getItem(this.global.GlobarlRelId);


    console.log();
  }

  // minus adult when click minus button
  minusAdult() {
    this.adults--;
  }

  // plus adult when click plus button
  plusAdult() {
    this.adults++;
  }

  // minus children when click minus button
  minusChildren() {
    this.children--;
  }

  // plus children when click plus button
  plusChildren() {
    this.children++;
  }

  // go to checkout page
  checkout() {
    this.nav.push(CheckoutTripPage);
  }
}
