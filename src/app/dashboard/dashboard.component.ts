import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // getHeroes(){
  //   this.heroService.getHeroes()
  //   .subscribe(heroes => this.heroes = heroes.slice(1, 5))
  // }
}
