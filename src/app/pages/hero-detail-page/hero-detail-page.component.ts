import { Tag } from './../../shared/models/tag.model';
import { Subscription } from 'rxjs/Subscription';
import { TagsService } from './../../core/services/tags/tags.service';
import { Hero } from './../../shared/models/hero.model';
import { HeroesService } from './../../core/services/heroes/heroes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-hero-detail-page',
    templateUrl: './hero-detail-page.component.html',
    styleUrls: ['./hero-detail-page.component.scss']
})
export class HeroDetailPageComponent implements OnInit, OnDestroy {

    heroId: number;
    hero: Hero;
    tags: Tag[];

    private subs: Subscription[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private heroesService: HeroesService,
        private tagsService: TagsService
    ) {
        this.subs.push(this.route.params.subscribe((params: Params) => {
            this.heroId = +params['id'];
        }));
    }

    ngOnInit() {
        this.getHero();
        this.loadTags();
    }

    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }

    getHero() {
        this.subs.push(this.heroesService.loadHeroes().subscribe(heroes => {
            if (heroes) {
                this.hero = heroes.filter(hero => hero.id === this.heroId)[0];
                if (!this.hero) {
                    this.router.navigate(['404']);
                }
            }
        }));
    }

    loadTags() {
        this.subs.push(this.tagsService.loadTags().subscribe(tags => {
            this.tags = tags;
        }));
    }

    editHero(hero: Hero) {
        this.router.navigate(['edit-hero', hero.id]);
    }

}
