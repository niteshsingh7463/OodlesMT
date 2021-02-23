import { Component, OnInit } from '@angular/core';
import { BridgeServiceService } from '../bridge-service.service';

@Component({
  selector: 'app-name-b',
  templateUrl: './name-b.component.html',
  styleUrls: ['./name-b.component.scss']
})
export class NameBComponent implements OnInit {
val:any = this.bridge.val;
  constructor(private bridge:BridgeServiceService) { }

  ngOnInit(): void {
    this.bridge.valStatusObs.subscribe(status=>{this.val=status})
  }

}
