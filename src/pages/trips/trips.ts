import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {RelegionhomePage} from "../relegionhome/relegionhome"
import { Http } from '@angular/http'; 


@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {
  // list of trips
  public trips: any;
  public religions: any; 

  constructor(public nav: NavController, public tripService: TripService,  public http: Http) {
    // set sample data
    //this.religions = tripService.getAll();

    this.http.get("http://scienceclub.in/relisantapi/religionlist.php").subscribe(data=> {
      this.religions  = JSON.parse(data["_body"]);
      //console.log("test");
    } , err => {
      console.log(err);
    })


    console.log("sample data"); 
  }

  // view trip detail
  viewDetail(id,name,img) {  
console.log(id,name,img);
    this.nav.push(RelegionhomePage, {id: id,name:name,img:img});

  }
}
