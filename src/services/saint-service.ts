import {Injectable} from "@angular/core";
import { Http } from '@angular/http'; 



@Injectable()
export class TripService {
  private trips: any;
  private saints: any;

  constructor( public http: Http) {
    //this.trips = TRIPS;
  }

  getAll() {
    this.http.get("http://scienceclub.in/relisantapi/saintlist.php").subscribe(data=> {
      this.saints  = JSON.parse(data["_body"]);
      //console.log("test");
    } , err => {
      console.log(err);
    })
    //console.log(this.religions[0])
    console.log("test");
   // console.log(this.religions.length);
    return this.saints;
  }

  getItem(id) {
    for (var i = 0; i < this.trips.length; i++) {
      if (this.saints[i].id === parseInt(id)) {
        return this.saints[i];
      }
    }
    return null;
  }

  remove(item) {
    this.trips.splice(this.saints.indexOf(item), 1);
  }
}
