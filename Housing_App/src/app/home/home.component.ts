import { Component , inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingLocationService } from '../housing-location.service';
@Component({
  selector: 'app-home',
  imports: [CommonModule,HousingLocationComponent],//import common module to use ngFor
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList:HousingLocation[] =[];
  housingService:HousingLocationService = inject(HousingLocationService) ;
  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLists();
  }
}
 
