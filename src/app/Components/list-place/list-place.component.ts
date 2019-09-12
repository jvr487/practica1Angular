import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-place',
  templateUrl: './list-place.component.html',
  styleUrls: ['./list-place.component.scss']
})
export class ListPlaceComponent implements OnInit {
places:IPlace[] = null

  constructor() { }

  ngOnInit() {
    this.places = this.getPlaces()
  }

  getPlaces(): IPlace[]{
    return [
      {
        name : "Juan1",
        address:"1",
        zipCode:11,
        city:"111"
      },
      
      {
        name : "Juan2",
        address:"2",
        zipCode:22,
        city:"222"
      },
      
      {
        name : "Juan3",
        address:"3",
        zipCode:33,
        city:"333"
      }
    ]
  }
}
