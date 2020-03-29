  import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global"
import {TripService} from "../../services/trip-service";
import {SubcatService} from "../../services/subcat-service";
import {RelsaintallPage} from "../../pages/relsaintall/relsaintall";
import {Injectable} from "@angular/core";
import { Http } from '@angular/http'; 


/**
 * Generated class for the RelsaintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-relsaint',
  templateUrl: 'relsaint.html',
})
export class RelsaintPage {


    // trip info
    public relheader: any;
    public temples: any;
    public subcats : any; 


    public saints: any; 

    hide:boolean = true;


public     LWithin = [
      {
        id : 10,
        value : '10 KM'
      },
      {
        id : 20,
        value : '20 KM'
      },
      {
        id : 30,
        value : '30 KM'
      },
      {
        id : 40,
        value : '40 KM'
      },
      {
        id : 50,
        value : '50 KM'
      },
      {
        id : 60,
        value : '60 KM'
      }
    ]


        
  constructor(public nav: NavController,public global:  GlobalProvider,public navCtrl: NavController, public navParams: NavParams,public tripService: TripService,public subcatService : SubcatService,  public http: Http) {
  
    this.relheader = tripService.getItem(this.global.GlobarlRelId);
    this.subcats = subcatService.getAll();

    this.http.get("http://scienceclub.in/relisantapi/saintlist.php").subscribe(data=> {
      this.saints  = JSON.parse(data["_body"]);
  //console.log("test");
} , err => {
  console.log(err);
})


console.log("sample data"); 



  }

  gotoSaint(){

    // we need to pass the Selected Sain Details 
    this.nav.push(RelsaintallPage, 1);
  }

 
ngIfCtrl(){
  this.hide = !this.hide;
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad RelsaintPage');
  }

}
