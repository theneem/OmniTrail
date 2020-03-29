import {Injectable} from "@angular/core";
import {GODS} from "./mock-gods";

@Injectable()
export class GodService {
  private gods: any;

  constructor() {
    this.gods = GODS;
  }

  getAll() {
    return this.gods;
  }

  getItem(id) {
    for (var i = 0; i < this.gods.length; i++) {
      if (this.gods[i].id === parseInt(id)) {
        return this.gods[i];
      }
    }
    return null;
  }

  remove(item) {
    this.gods.splice(this.gods.indexOf(item), 1);
  }
}
