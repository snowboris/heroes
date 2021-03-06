import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-autocomplete-field',
    templateUrl: './autocomplete-field.component.html',
    styleUrls: ['./autocomplete-field.component.scss']
})
export class AutocompleteFieldComponent implements OnInit {

    @Input() options: string[];
    @Output() emitHero: EventEmitter<string> = new EventEmitter<string>();
    myControl = new FormControl();
    filteredOptions: Observable<string[]>;

    constructor() { }

    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
            .pipe(
                startWith(''),
                map(value => this.filter(value)
            )
        );
    }

    navToHero(heroName: string) {
        this.emitHero.emit(heroName);
    }

    private filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

}
