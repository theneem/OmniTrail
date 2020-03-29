import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global"
import {TripService} from "../../services/trip-service";
import {GodService} from "../../services/god-service";
import { Http } from '@angular/http'; 

/**
 * Generated class for the RelgodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-relgod',
  templateUrl: 'relgod.html',
})
export class RelgodPage {

    // trip info
    public religion: any;
    public trips: any;
    public gods: any;
    godid: any = {};
    
    

    constructor(public global:  GlobalProvider,public navCtrl: NavController, public navParams: NavParams, public tripService: TripService, public godService: GodService ,  public http: Http) {
  
    this.getReligion(this.global.GlobarlRelId);
    console.log("globalrelid");
    console.log(this.global.GlobarlRelId);
    this.trips = tripService.getAll();
    this.gods = godService.getAll();

  
  }

  getReligion(id)
  {


    this.godid.religionid = id;
    console.log('godid');
    console.log(this.godid.sreligionid);

    this.http.post("http://scienceclub.in/relisantapi/getreligion.php", this.godid).subscribe(data=>{
        console.log(data); 
        this.religion = JSON.parse(data["_body"]); 
        console.log("religion-data");
       console.log(this.religion);
    }, err=>{
    console.log(err); 
    })
    


    console.log("sample data"); 
    

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RelgodPage');
  }

}
