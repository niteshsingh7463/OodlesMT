import { Component, OnInit } from '@angular/core';
import { BridgeServiceService } from '../bridge-service.service';

@Component({
  selector: 'app-name-a',
  templateUrl: './name-a.component.html',
  styleUrls: ['./name-a.component.scss']
})
export class NameAComponent implements OnInit {

  constructor(private bridge:BridgeServiceService) { }

  ngOnInit(): void {
  }
  btnFun(){
this.bridge.valChangeFun();
  }
}
