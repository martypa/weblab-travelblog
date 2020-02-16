import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {BlogHeaderModel} from '../BlogHeaderModel';
import {TravelSaveService} from '../../services/travel-save.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-travel',
  templateUrl: './create-travel.component.html',
  styleUrls: ['./create-travel.component.scss']
})
export class CreateTravelComponent implements OnInit {
  title = 'Create new Travel';

  constructor(
    private travelSaver: TravelSaveService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  createEntry(newTravel: NgForm) {
    const travel: BlogHeaderModel = {
      _id: null,
      location: newTravel.value.travelDestination,
      type: 'header',
      duration: newTravel.value.travelDuration,
      description: newTravel.value.travelDescription,
      title: newTravel.value.travelTitle,
    };
    this.travelSaver.saveTravel(travel).subscribe(data => {
      this.router.navigate(['/dashboard']);
    });
  }

}
