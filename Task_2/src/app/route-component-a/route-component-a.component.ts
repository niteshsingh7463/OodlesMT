import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-component-a',
  templateUrl: './route-component-a.component.html',
  styleUrls: ['./route-component-a.component.scss']
})
export class RouteComponentAComponent implements OnInit {
val:any='';
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
this.route.navigate(['/routeCompB'],{queryParams:{value:this.val}});
  }
}
