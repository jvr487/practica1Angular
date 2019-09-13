import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  
  urlBase = 'https://openapi3.herokuapp.com/api/places';
  user = 'demo';
  password = 'demo';
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Place[]>{
    
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
    // Con map, convertimos el resultado Json Any a un Array de Place 
    return this.http.get(this.urlBase, options).pipe(
      map(p => {return p as Place[]})
    );
  }

  // codifica a base 64
   getBasicAuth(user: string, password: string): string {
    return 'Basic ' + btoa(user + ':' + password);
  }
}
