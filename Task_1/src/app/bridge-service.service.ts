import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BridgeServiceService {
  valStatus = new Subject();
  valStatusObs = this.valStatus.asObservable();
val=0;
  constructor() { }
  valChangeFun(){
    this.val+=1;
    this.valStatus.next(this.val);
  }
}
