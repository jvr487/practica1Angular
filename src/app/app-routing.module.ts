import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPlaceComponent } from './Components/list-place/list-place.component';
import { PlaceDetailComponent } from './components/place-detail/place-detail.component';


const routes: Routes = [
{ path: 'place-list', component: ListPlaceComponent},
{ path: 'place-detail/:id', component: PlaceDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
