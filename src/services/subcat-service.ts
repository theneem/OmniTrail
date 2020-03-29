import {Injectable} from "@angular/core";
import {SUBCATS} from "./mock-rel-subcat";

@Injectable()
export class SubcatService {
  private subcats: any;

  constructor() {
    this.subcats = SUBCATS;
  }

  getAll() {
    return this.subcats;
  }

  getItem(id) {
    for (var i = 0; i < this.subcats.length; i++) {
      if (this.subcats[i].id === parseInt(id)) {
        return this.subcats[i];
      }
    }
    return null;
  }

  remove(item) {
    this.subcats.splice(this.subcats.indexOf(item), 1);
  }
}
