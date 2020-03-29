import {Injectable} from "@angular/core";
import {TEMPLES} from "./mock-temple";

@Injectable()
export class TempleService {
  private temples: any;

  constructor() {
    this.temples = TEMPLES;
  }

  getAll() {
    return this.temples;
  }

  getItem(id) {
    for (var i = 0; i < this.temples.length; i++) {
      if (this.temples[i].id === parseInt(id)) {
        return this.temples[i];
      }
    }
    return null;
  }

  remove(item) {
    this.temples.splice(this.temples.indexOf(item), 1);
  }
}
