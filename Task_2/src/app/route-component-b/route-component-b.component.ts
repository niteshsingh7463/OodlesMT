import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-component-b',
  templateUrl: './route-component-b.component.html',
  styleUrls: ['./route-component-b.component.scss']
})
export class RouteComponentBComponent implements OnInit {
val:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
this.route.queryParamMap.subscribe(res=>{this.val=res.get('value');})
  }

}
