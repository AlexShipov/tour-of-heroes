import {
    Component,    
    OnInit
} from '@angular/core';

import { Hero } from './hero'

import { HeroService } from './hero.service';
import { Router } from '@angular/router';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'my-heroes',    
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  implements OnInit {
    public name = 'Angular 2 Webpack Starter';
    public title = 'Tour of Heroes';

    public heroes: Hero[];

    public selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router
    ) { }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void {
        this.getHeroes();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
