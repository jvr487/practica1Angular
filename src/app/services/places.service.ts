import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Place } from '../domain/Place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  
  urlBase = 'https://openapi3.herokuapp.com/api/places';
  user = 'demo';
  password = 'demo';

  cache: Place[] = null;
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Place[]>{
    // Si tien cache la devolvemos
    if(this.cache){
      return of(this.cache);
    }
    // definimos las opciones para la llamada http GET
    // Hedear
    //    Content-Type
    //    Accept
    //    Authorization Basic
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: this.getBasicAuth(this.user, this.password)
      }
    };

    // Realizamos la llamada GET con los parametros correspondientes
    // Con map, convertimos el resultado Json Any a un Array de Place y cargamos en cache el resultado
    return this.http.get(this.urlBase, options).pipe(
      map(p => {
        this.cache = p as Place[];
        return this.cache}
        )
    );
  }
  
  getById(id: string): Observable<Place>{
    if(this.cache){
      const place = this.cache.find(p => p._id === id);
      if(place){
        return of(place);
      }
    }
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: this.getBasicAuth(this.user, this.password)
      }
    };

    const urlGetById = this.urlBase + '/' + encodeURIComponent(id);

    this.http.get(urlGetById, options).pipe(
      map(p => p as Place)
    )
  }
  // codifica a base 64
  getBasicAuth(user: string, password: string): string {
    return 'Basic ' + btoa(user + ':' + password);
  }
}
