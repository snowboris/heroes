import { MaterialAppModule } from './../app.material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { AutocompleteFieldComponent } from './components/autocomplete-field/autocomplete-field.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { CreateHeroComponent } from './components/create-hero/create-hero.component';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { TextareaFieldComponent } from './components/textarea-field/textarea-field.component';
import { ButtonComponent } from './components/button/button.component';
import { TagsListComponent } from './components/tags-list/tags-list.component';
import { AddTagHeroComponent } from './components/add-tag-hero/add-tag-hero.component';

import { TruncateTextPipe } from './pipes/truncate-text/truncate-text.pipe';
import { DatexPipe } from './pipes/datex/datex.pipe';
import { TagsFilterPipe } from './pipes/tags-filter/tags-filter.pipe';

@NgModule({
    imports: [
        CommonModule,
        MaterialAppModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        HeroCardComponent,
        AutocompleteFieldComponent,
        HeroesListComponent,
        CreateHeroComponent,
        EditHeroComponent,
        InputFieldComponent,
        TextareaFieldComponent,
        ButtonComponent,
        TagsListComponent,
        AddTagHeroComponent,
        TruncateTextPipe,
        DatexPipe,
        TagsFilterPipe
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        HeroCardComponent,
        AutocompleteFieldComponent,
        HeroesListComponent,
        CreateHeroComponent,
        EditHeroComponent,
        InputFieldComponent,
        TextareaFieldComponent,
        ButtonComponent,
        TagsListComponent,
        AddTagHeroComponent,
        TruncateTextPipe,
        DatexPipe,
        TagsFilterPipe
    ]
})
export class SharedModule { }
