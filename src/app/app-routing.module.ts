import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { MyComponentComponent } from './my-component/my-component.component';

const routes: Routes = [
  { path: '', component: MyComponentComponent },           // Default route
  { path: 'home', component: MyComponentComponent },     // About route
  { path: 'favorites', component: FavoritesComponent },     // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
