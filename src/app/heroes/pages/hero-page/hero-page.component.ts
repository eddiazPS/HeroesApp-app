import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/heros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit{

public hero? : Hero;

  constructor(
  private heroesSrevice: HeroService,
  private activatedRoute: ActivatedRoute,
  private router: Router,
){}


  ngOnInit(): void {
  this.activatedRoute.params
  .pipe(
    switchMap(({id}) => this.heroesSrevice.getHeroById(id)),
  )
  .subscribe( hero => {
    if (!hero ) return this.router.navigate(['/heroes/list']);

    this.hero = hero;
    return;

  })
  }

  goBack():void{
    this.router.navigateByUrl('heroes/list');
  }



}
