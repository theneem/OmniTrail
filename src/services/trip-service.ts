import {Injectable} from "@angular/core";
import {TRIPS} from "./mock-trips";
import { Http } from '@angular/http'; 



@Injectable()
export class TripService {
  private trips: any;
  private religions: any;

  constructor( public http: Http) {
    this.trips = TRIPS;
  }

  getAll() {
    this.http.get("http://scienceclub.in/relisantapi/religionlist.php").subscribe(data=> {
      this.religions  = JSON.parse(data["_body"]);
      //console.log("test");
    } , err => {
      console.log(err);
    })
    //console.log(this.religions[0])
    console.log("test");
   // console.log(this.religions.length);
    return this.religions;
  }

  getItem(id) {
    for (var i = 0; i < this.trips.length; i++) {
      if (this.trips[i].id === parseInt(id)) {
        return this.trips[i];
      }
    }
    return null;
  }

  remove(item) {
    this.trips.splice(this.trips.indexOf(item), 1);
  }
}
