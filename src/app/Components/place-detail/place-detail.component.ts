import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Place } from 'src/app/domain/Place';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss']
})
export class PlaceDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private placeService: PlacesService) {}

  ngOnInit() {
    const placeId = this.route.snapshot.paramMap.get('id');
    if (placeId) {
      this.placeService.getById(placeId).subscribe(
        data => data as Place,
        error => console.log('error: ' + error)
      );
    }
  }

}
