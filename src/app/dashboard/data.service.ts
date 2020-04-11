import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly data = [
    ['January', 33],
    ['February', 68],
    ['March', 22],
    ['April', 84],
    ['May', 54],
    ['June', 37]
  ]

  constructor() { }

  getData(): Observable<any>{
    return new Observable(
      observable => {
        observable.next(this.data);
        observable.complete;
      }
    )
  }
}
