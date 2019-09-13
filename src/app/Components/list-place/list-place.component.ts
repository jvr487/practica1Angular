import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-place',
  templateUrl: './list-place.component.html',
  styleUrls: ['./list-place.component.scss']
})
export class ListPlaceComponent implements OnInit, OnDestroy {
places:Place[] = null
private sub: Subscription;

  constructor(private _placeServices: PlacesService) { }

  ngOnInit() {
     this.getPlaces()
  }

  getPlaces() {
    this.sub = this._placeServices.getAll().subscribe(
      data => {this.places = data},
      error => {console.log('Error al conectar con el sericio de obtener todos los lugares: ' + error.message)}
    )
  }

  // Para desuscribirnos 
  ngOnDestroy(){
    if(this.sub)
    {
      this.sub.unsubscribe();
      this.sub = null;
    }
  }
}
