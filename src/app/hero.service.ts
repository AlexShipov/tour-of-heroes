import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';


@Injectable()
export class HeroService {

    private heroesUrl = 'api/heroes';  // URL to web api

    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        return this.getCore(this.heroesUrl);
    }

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.getCore(url);
    }

    private getCore<THero>(url: string): Promise<THero> {
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as THero)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
