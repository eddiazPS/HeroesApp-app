import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/heros.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit {

public heroes: Hero []=[];

constructor (private herosService: HeroService){}


  ngOnInit(): void {
    this.herosService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }




}
