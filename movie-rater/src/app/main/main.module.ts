import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  {path: 'movies', component: MainComponent}
];

@NgModule({
  declarations: [
    MainComponent,
    MovieDetailsComponent,
    MovieListComponent,
    MovieFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainModule { }